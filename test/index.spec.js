import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect, beforeAll } from 'vitest';
import worker from '../src';

describe('Sortlink API', () => {
  let sessionCookie = '';

  it('GET / returns dashboard HTML', async () => {
    const res = await SELF.fetch('http://example.com/');
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Sortlink');
    expect(text).toContain('Login Admin');
  });

  it('POST /api/login with wrong password returns 401', async () => {
    const res = await SELF.fetch('http://example.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: 'wrong' }),
    });
    expect(res.status).toBe(401);
  });

  it('POST /api/login with correct password returns 200 and sets cookie', async () => {
    const res = await SELF.fetch('http://example.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: 'admin123' }),
    });
    expect(res.status).toBe(200);
    const setCookie = res.headers.get('Set-Cookie');
    expect(setCookie).toContain('session=');
    sessionCookie = setCookie.split(';')[0];
  });

  it('GET /api/check returns authenticated=true with cookie', async () => {
    const res = await SELF.fetch('http://example.com/api/check', {
      headers: { Cookie: sessionCookie },
    });
    const data = await res.json();
    expect(data.authenticated).toBe(true);
  });

  it('POST /api/links creates a short link', async () => {
    const res = await SELF.fetch('http://example.com/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({ url: 'https://example.com/test', shortCode: 'test1' }),
    });
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.shortCode).toBe('test1');
    expect(data.url).toBe('https://example.com/test');
  });

  it('POST /api/links rejects duplicate code', async () => {
    const res = await SELF.fetch('http://example.com/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({ url: 'https://example.com/dupe', shortCode: 'test1' }),
    });
    expect(res.status).toBe(409);
  });

  it('GET /api/links lists all links', async () => {
    const res = await SELF.fetch('http://example.com/api/links', {
      headers: { Cookie: sessionCookie },
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.links.length).toBeGreaterThanOrEqual(1);
    expect(data.total).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/links?search= filters links', async () => {
    const res = await SELF.fetch('http://example.com/api/links?search=test1', {
      headers: { Cookie: sessionCookie },
    });
    const data = await res.json();
    expect(data.links.length).toBe(1);
    expect(data.links[0].shortCode).toBe('test1');
  });

  it('GET /api/links/:code returns single link', async () => {
    const res = await SELF.fetch('http://example.com/api/links/test1', {
      headers: { Cookie: sessionCookie },
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.shortCode).toBe('test1');
  });

  it('PUT /api/links/:code updates a link', async () => {
    const res = await SELF.fetch('http://example.com/api/links/test1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({ title: 'Updated Title' }),
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.title).toBe('Updated Title');
  });

  it('GET /:code redirects to original URL', async () => {
    const res = await SELF.fetch('http://example.com/test1', { redirect: 'manual' });
    expect(res.status).toBe(301);
    expect(res.headers.get('Location')).toBe('https://example.com/test');
  });

  it('DELETE /api/links/:code deletes a link', async () => {
    const res = await SELF.fetch('http://example.com/api/links/test1', {
      method: 'DELETE',
      headers: { Cookie: sessionCookie },
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
  });

  it('GET /:code returns 404 for deleted link', async () => {
    const res = await SELF.fetch('http://example.com/test1');
    expect(res.status).toBe(404);
  });
});

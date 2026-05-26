import { createLink, getLink, updateLink, deleteLink, listLinks, incrementClicks } from './db.js';
import { requireAuth } from './auth.js';

export async function handleCreateLink(request, env) {
  await requireAuth(request, env);
  const body = await request.json();
  const { url, shortCode, title } = body;

  if (!url) {
    return json({ error: 'URL wajib diisi' }, 400);
  }

  try {
    new URL(url);
  } catch {
    return json({ error: 'URL tidak valid' }, 400);
  }

  const code = shortCode || generateCode();
  if (!/^[a-zA-Z0-9_-]{1,32}$/.test(code)) {
    return json({ error: 'Kode pendek hanya boleh huruf, angka, -, _ (1-32 karakter)' }, 400);
  }

  try {
    const link = await createLink(env, { url, shortCode: code, title });
    return json(link, 201);
  } catch (e) {
    return json({ error: e.message }, 409);
  }
}

export async function handleListLinks(request, env) {
  await requireAuth(request, env);
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');

  const result = await listLinks(env, { search, page, limit });
  return json(result);
}

export async function handleGetLink(request, env, code) {
  await requireAuth(request, env);
  const link = await getLink(env, code);
  if (!link) {
    return json({ error: 'Link tidak ditemukan' }, 404);
  }
  return json(link);
}

export async function handleUpdateLink(request, env, code) {
  await requireAuth(request, env);
  const body = await request.json();

  if (body.url) {
    try {
      new URL(body.url);
    } catch {
      return json({ error: 'URL tidak valid' }, 400);
    }
  }

  try {
    const link = await updateLink(env, code, body);
    return json(link);
  } catch (e) {
    return json({ error: e.message }, 404);
  }
}

export async function handleDeleteLink(request, env, code) {
  await requireAuth(request, env);
  const link = await getLink(env, code);
  if (!link) {
    return json({ error: 'Link tidak ditemukan' }, 404);
  }
  await deleteLink(env, code);
  return json({ ok: true });
}

export async function handleRedirect(request, env, code) {
  const link = await incrementClicks(env, code);
  if (!link || !link.isActive) {
    return new Response(`<!DOCTYPE html><html><body><h1>Link Tidak Ditemukan</h1><p>Short link yang Anda cari tidak tersedia.</p></body></html>`, {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }
  return Response.redirect(link.url, 301);
}

export async function handleCheckAuth(request, env) {
  const { checkAuth } = await import('./auth.js');
  const authed = await checkAuth(request, env);
  return json({ authenticated: authed });
}

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

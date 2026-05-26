import { createSession, getSession, deleteSession } from './db.js';

export async function handleLogin(request, env) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const { password } = await request.json();
  const adminPassword = env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return json({ error: 'ADMIN_PASSWORD belum diset' }, 500);
  }

  if (password !== adminPassword) {
    return json({ error: 'Password salah' }, 401);
  }

  const token = await createSession(env);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
    },
  });
}

export async function handleLogout(request, env) {
  const token = getTokenFromCookie(request);
  if (token) {
    await deleteSession(env, token);
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
    },
  });
}

export async function checkAuth(request, env) {
  const token = getTokenFromCookie(request);
  const session = await getSession(env, token);
  return !!session;
}

export async function requireAuth(request, env) {
  const authed = await checkAuth(request, env);
  if (!authed) {
    throw new AuthError();
  }
}

export function getTokenFromCookie(request) {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/session=([^;]+)/);
  return match ? match[1] : null;
}

export class AuthError extends Error {
  constructor() {
    super('Unauthorized');
    this.status = 401;
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

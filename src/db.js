const LINK_PREFIX = 'link:';
const LINK_INDEX_KEY = '_idx';
const SESSION_PREFIX = 'sess:';

export async function createLink(env, { url, shortCode, title }) {
  const existing = await env.LINKS_DB.get(LINK_PREFIX + shortCode);
  if (existing) {
    throw new Error('Kode pendek sudah digunakan');
  }

  const now = Date.now();
  const link = {
    url,
    shortCode,
    title: title || '',
    createdAt: now,
    updatedAt: now,
    clicks: 0,
    isActive: true,
  };

  await env.LINKS_DB.put(LINK_PREFIX + shortCode, JSON.stringify(link));
  await addToIndex(env, shortCode);
  return link;
}

export async function getLink(env, code) {
  const data = await env.LINKS_DB.get(LINK_PREFIX + code);
  return data ? JSON.parse(data) : null;
}

export async function updateLink(env, code, updates) {
  const existing = await getLink(env, code);
  if (!existing) throw new Error('Link tidak ditemukan');

  const updated = {
    ...existing,
    url: updates.url ?? existing.url,
    title: updates.title ?? existing.title,
    isActive: updates.isActive ?? existing.isActive,
    updatedAt: Date.now(),
  };

  await env.LINKS_DB.put(LINK_PREFIX + code, JSON.stringify(updated));
  return updated;
}

export async function deleteLink(env, code) {
  await env.LINKS_DB.delete(LINK_PREFIX + code);
  await removeFromIndex(env, code);
}

export async function listLinks(env, { search = '', page = 1, limit = 20 } = {}) {
  const indexStr = await env.LINKS_DB.get(LINK_INDEX_KEY);
  const codes = indexStr ? JSON.parse(indexStr) : [];

  if (!search) {
    const start = (page - 1) * limit;
    const paginatedCodes = codes.slice(start, start + limit);
    const links = (await Promise.all(
      paginatedCodes.map(code => getLink(env, code))
    )).filter(Boolean);
    return { links, total: codes.length, page, limit };
  }

  const q = search.toLowerCase();
  const allLinks = (await Promise.all(
    codes.map(code => getLink(env, code))
  )).filter(Boolean);

  const filtered = allLinks.filter(l =>
    l.url.toLowerCase().includes(q) ||
    l.shortCode.toLowerCase().includes(q) ||
    l.title.toLowerCase().includes(q)
  );

  const start = (page - 1) * limit;
  return {
    links: filtered.slice(start, start + limit),
    total: filtered.length,
    page,
    limit,
  };
}

export async function incrementClicks(env, code) {
  const data = await env.LINKS_DB.get(LINK_PREFIX + code);
  if (!data) return null;
  const link = JSON.parse(data);
  link.clicks += 1;
  link.lastClickedAt = Date.now();
  await env.LINKS_DB.put(LINK_PREFIX + code, JSON.stringify(link));
  return link;
}

async function addToIndex(env, code) {
  const raw = await env.LINKS_DB.get(LINK_INDEX_KEY);
  const idx = raw ? JSON.parse(raw) : [];
  if (!idx.includes(code)) {
    idx.unshift(code);
    await env.LINKS_DB.put(LINK_INDEX_KEY, JSON.stringify(idx));
  }
}

async function removeFromIndex(env, code) {
  const raw = await env.LINKS_DB.get(LINK_INDEX_KEY);
  if (!raw) return;
  const idx = JSON.parse(raw).filter(c => c !== code);
  await env.LINKS_DB.put(LINK_INDEX_KEY, JSON.stringify(idx));
}

export async function createSession(env, ttl = 86400) {
  const token = crypto.randomUUID();
  await env.LINKS_DB.put(SESSION_PREFIX + token, '1', { expirationTtl: ttl });
  return token;
}

export async function getSession(env, token) {
  if (!token) return null;
  const data = await env.LINKS_DB.get(SESSION_PREFIX + token);
  return data ? token : null;
}

export async function deleteSession(env, token) {
  await env.LINKS_DB.delete(SESSION_PREFIX + token);
}

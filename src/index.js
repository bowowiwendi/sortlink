import { handleLogin, handleLogout, checkAuth } from './auth.js';
import {
  handleCreateLink,
  handleListLinks,
  handleGetLink,
  handleUpdateLink,
  handleDeleteLink,
  handleRedirect,
  handleCheckAuth,
} from './api.js';
import { renderDashboardPage } from './dashboard.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    try {
      // Auth routes
      if (path === '/api/login') {
        return await handleLogin(request, env);
      }
      if (path === '/api/logout') {
        return await handleLogout(request, env);
      }
      if (path === '/api/check') {
        return await handleCheckAuth(request, env);
      }

      // API routes - JSON
      if (path === '/api/links' && method === 'GET') {
        return await handleListLinks(request, env);
      }
      if (path === '/api/links' && method === 'POST') {
        return await handleCreateLink(request, env);
      }

      // API routes with code param: /api/links/:code
      const linksMatch = path.match(/^\/api\/links\/([a-zA-Z0-9_-]+)$/);
      if (linksMatch) {
        const code = linksMatch[1];
        if (method === 'GET') {
          return await handleGetLink(request, env, code);
        }
        if (method === 'PUT') {
          return await handleUpdateLink(request, env, code);
        }
        if (method === 'DELETE') {
          return await handleDeleteLink(request, env, code);
        }
      }

      // Dashboard
      if (path === '/' && method === 'GET') {
        return new Response(renderDashboardPage(), {
          headers: { 'Content-Type': 'text/html' },
        });
      }

      // Redirect short links (catch-all)
      if (method === 'GET') {
        const code = path.substring(1);
        if (code && /^[a-zA-Z0-9_-]+$/.test(code)) {
          return await handleRedirect(request, env, code);
        }
      }

      return new Response('Not Found', { status: 404 });
    } catch (err) {
      if (err.status === 401) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      console.error(err);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};

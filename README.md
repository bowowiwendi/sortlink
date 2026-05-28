# Sortlink

Pendekar link — kelola short link dengan mudah di Cloudflare.

## Fitur

- Buat, edit, hapus short link
- Tracking klik otomatis
- Pencarian & paginasi
- Proteksi password (single admin)
- Tema gelap/terang
- Pull-to-refresh (mobile)
- Responsive mobile-first
- Deploy di Cloudflare Workers (via OpenNext)

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Runtime:** Cloudflare Workers (via [@opennextjs/cloudflare](https://opennext.dev))
- **Storage:** Cloudflare KV
- **Auth:** Session-based (cookie httpOnly)
- **Bahasa:** TypeScript

## Prasyarat

- Node.js 18+
- Akun Cloudflare dengan Workers & KV
- `wrangler` CLI terinstall

## Setup

```bash
# Install dependencies
npm install

# Salin file env
cp .dev.vars.example .dev.vars  # atau edit langsung .dev.vars
```

Isi `.dev.vars`:
```
ADMIN_PASSWORD=your-secret-password
```

## Development

```bash
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Environment Variables

| Variabel | Deskripsi |
|---|---|
| `ADMIN_PASSWORD` | Password untuk login dashboard |
| `LINKS_DB` | Binding KV namespace (otomatis dari wrangler) |

## Struktur

```
app/
├── [code]/route.ts      # Redirect short code
├── api/
│   ├── check/           # Cek session auth
│   ├── links/           # CRUD links
│   ├── login/           # Login endpoint
│   └── logout/          # Logout endpoint
├── layout.tsx           # Root layout + CSS
└── page.tsx             # Dashboard SPA
components/              # UI components
lib/
├── auth.ts              # Auth helpers
├── db.ts                # KV operations
└── env.d.ts             # Type definitions
```

# Tharushika Jansa — Portfolio

A modern, animated portfolio site built with React, TypeScript, Vite, Tailwind CSS and Framer Motion. Content (experience, projects, skills) is sourced from the résumé and GitHub profile and lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) — edit that one file to update anything on the site.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

This outputs a fully static site into the `dist/` folder — this is what you upload to Hostinger.

## Deploying to Hostinger (shared hosting)

1. Run `npm run build` to generate the `dist/` folder.
2. Log in to **hPanel** → **Files** → **File Manager** (or use an FTP client like FileZilla with your Hostinger FTP credentials).
3. Navigate to `public_html` (or the subfolder for your domain, e.g. `public_html/yourdomain.com`).
4. Delete any placeholder files already there (e.g. `default.php`), then **upload the entire contents of `dist/`** (not the `dist` folder itself — its contents: `index.html`, `assets/`, `favicon.svg`, the résumé PDF) directly into `public_html`.
5. Visit your domain — the site should load immediately. No server-side setup, database, or Node.js runtime is needed since this is a fully static build.

### Updating the site later

Whenever you change content or design:

```bash
npm run build
```

Then re-upload the new contents of `dist/` to `public_html`, overwriting the old files.

### Custom domain / HTTPS

Hostinger issues a free SSL certificate automatically for domains pointed at it — enable it under **hPanel → SSL** if it isn't already active.

## Updating your résumé

Replace `public/Tharushika_Jansa_Resume.pdf` with your latest résumé (keep the same filename, or update the `resumeUrl` in `src/data/portfolioData.ts`), then rebuild.

## Tech stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons

# Maksika Resources website

Multi-page React (Vite + React Router) redesign of maksikaresources.com.

Routes: `/`, `/about`, `/services`, `/solutions`, `/solutions/:slug` (4 pages), `/projects`, `/blog`, `/blog/:slug` (3 posts), `/contact`. Uses hash routing (`#/about`), so it works on any static host with no rewrite rules.

```bash
npm install
npm run dev      # local dev server
npm run build    # static site in dist/
```

- **Copy** lives in `src/content.js` (home, nav) and `src/pages.js` (inner pages, blog posts); **styles/brand tokens** in `src/styles.css` (`:root`).
- **Images:** every `<Placeholder label="..." />` is an image slot. Put files in `public/images/` and swap in `<img src="images/name.jpg" alt="..." />`.
- **Hosting:** `dist/` is fully static (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web host). Build command `npm run build`, publish directory `dist`.
- The contact form opens the visitor's email client (`mailto:`). Swap `handleSubmit` in `src/App.jsx` for Formspree/Netlify Forms if you want server-side submissions.

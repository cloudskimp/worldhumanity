# World Humanity Inc. — Website

The official website for **World Humanity Inc.** (worldhumanity.org), a 100% volunteer-run
nonprofit. Built with Next.js + Tailwind CSS and designed to deploy on **Vercel** with zero
configuration.

## Quick start (local)

```bash
npm install
npm run dev      # open http://localhost:3000
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js.
3. Click **Deploy**. Done.
4. In Vercel → Settings → Domains, add `worldhumanity.org` and follow the DNS instructions.

Every future `git push` to `main` redeploys the site automatically.

## How volunteers update the site

All the words, numbers, and photo captions live in one file: `lib/content.ts`

Open it, change the text between the quotes, commit, and push.

## How to add your photos

1. Drop image files into: `public/images/gallery/`
2. Open `lib/content.ts`, find the `gallery` list, and add an entry
3. Delete the placeholder entries once real photos are in
4. Commit and push

## Tech notes

- **Framework:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **No backend / database** — fully static, fast, and free to host on Vercel's hobby tier
- Accessible: keyboard focus states, skip link, reduced-motion support, semantic HTML

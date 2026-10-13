# Jayson Malet — Portfolio

Personal portfolio and technical blog of Jayson Malet, a software developer based in
Geneva focused on systems, simulation and AI (C++, Python, real-time graphics).

Live site: https://jayjay1509.github.io

## Stack

- [Astro](https://astro.build) (static site, MDX, RSS, sitemap)
- Hand-written CSS — a single dark theme in `src/styles/global.css`
- Deployed automatically to GitHub Pages on every push to `main`

## Structure

```
src/
  consts.ts            Site title, description, author + social links
  projects.ts          Project data shown on / and /projects
  pages/
    index.astro        Home (hero, focus areas, featured projects, recent writing)
    projects.astro     All projects
    about.astro        Bio + skills + contact
    blog/              Writing index + [...slug] post pages
  layouts/BlogPost.astro
  components/          Header, Footer, BaseHead, etc.
  content/blog/        Markdown write-ups
public/                Images, videos, fonts
```

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build into ./dist
npm run preview    # preview the build
```

## Edit content

- **Add a project:** append an entry to `PROJECTS` in `src/projects.ts`
  (set `featured: true` to show it on the home page).
- **Add a write-up:** create a Markdown file in `src/content/blog/` with
  `title`, `description`, `pubDate` and optional `heroImage` frontmatter.
- **Contact email:** set `email` in `src/consts.ts` to show an email button.

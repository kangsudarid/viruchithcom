# viruchith.com

Dark editorial portfolio and article platform built with Astro and Tailwind CSS. The site combines a personal portfolio with a markdown-authored engineering blog focused on backend systems, architecture, delivery, and platform engineering.

## Documentation

- 📖 **[Blog Authoring Guide](./BLOG_GUIDE.md)**: Content workflow, frontmatter requirements, inline images, KaTeX math, and Mermaid diagram examples.
- 📋 **[Changelog](./CHANGELOG.md)**: Release history, bug fixes, and feature additions.

## What is included

- Static Astro site with minimal client-side JavaScript.
- Dark-only visual system inspired by the supplied Obsidian / Indigo design direction.
- Homepage sections for profile, expertise, experience, projects, education, and latest articles.
- Articles homepage carousel showing the latest 5 posts.
- Markdown-powered blog using Astro content collections.
- Interactive Mermaid.js diagram rendering with automated dark theme support via `astro-mermaid`.
- KaTeX mathematical expression rendering via `remark-math` and `rehype-katex`.
- Article listing page with SEO-friendly URL path-based pagination (`/articles/page/2/`, `/articles/page/3/`, etc.) and instant client-side fuzzy search.
- Article detail pages with optimized images, canonical metadata, Open Graph tags, and structured data.
- Sitemap generation and `robots.txt` support.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Astro](https://astro.build/) 7.2 (with experimental incremental static builds) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3.x |
| Content | Astro content collections |
| Diagrams | [Mermaid.js](https://mermaid.js.org/) via [`astro-mermaid`](https://www.npmjs.com/package/astro-mermaid) |
| Math | [KaTeX](https://katex.org/) via `remark-math` & `rehype-katex` |
| Images | `astro:assets` |
| Icons | [@lucide/astro](https://lucide.dev/) |
| Fonts | [@fontsource-variable/manrope](https://fontsource.org/), [@fontsource-variable/inter](https://fontsource.org/) |
| Search | [Fuse.JS](https://www.fusejs.io/) 7.x |
| Tooling | Vite via Astro, PostCSS, Autoprefixer, cssnano, `@vitejs/plugin-legacy` |

## Local development

### Prerequisites

- Node.js 18+ recommended
- pnpm

### Install

```bash
pnpm install
```

### Start the dev server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview the built output

```bash
pnpm preview
```

## Content workflow

Articles live under `src/content/blog/` and are validated by the blog collection schema in `src/content.config.ts`.

Each post needs frontmatter like:

```md
---
title: Building Resilient Java APIs
description: What changes when API design is driven by failure modes, latency budgets, and backward compatibility.
publishDate: 2026-04-18
updatedDate: 2026-04-18
category: Architecture
tags:
    - Java
    - APIs
heroImage: ../../assets/blog/building-resilient-java-apis.svg
heroAlt: Abstract illustration of an API gateway and distributed services with telemetry overlays.
featured: false
draft: false
---
```

Hero images should be stored locally in `src/assets/blog/` so Astro can optimize them.

For the full publishing workflow, authoring rules, and recommended patterns, see the [Blog Authoring Guide](./BLOG_GUIDE.md).

## Key routes

- `/` homepage and portfolio sections
- `/articles/` article index (first page, 6 articles per page)
- `/articles/page/[number]/` paginated article listings
- `/articles/search.json` generated fuzzy search index
- `/articles/[slug]/` individual article pages
- `/sitemap.xml` generated sitemap

## SEO and metadata

The shared layout in `src/layouts/BaseLayout.astro` handles:

- title and description metadata
- canonical URLs
- Open Graph and Twitter metadata
- optional JSON-LD structured data
- dark theme color metadata

Article pages add article-specific metadata and schema automatically from markdown frontmatter.

## Project structure

```text
.
├── BLOG_GUIDE.md             # Content authoring guide
├── CHANGELOG.md              # Version and release log
├── README.md                 # Project documentation
├── astro.config.mjs          # Astro & integration configuration
├── public/
│   └── robots.txt
├── src/
│   ├── assets/blog/          # Local blog artwork
│   ├── components/           # Portfolio and article UI
│   ├── content/
│   │   ├── blog/             # Markdown articles
│   │   └── config.ts         # Content collection schema
│   ├── layouts/              # Shared page shell and SEO
│   ├── lib/                  # Blog helpers
│   ├── pages/
│   │   ├── articles/         # Article index and slug routes
│   │   ├── index.astro
│   │   └── sitemap.xml.ts
│   └── styles/
│       └── global.css
└── tailwind.config.mjs
```

## Deployment

The project builds to `dist/` and can be deployed to any static host. Keep the `site` value in `astro.config.mjs` aligned with the production domain so sitemap and canonical URLs stay correct.

### Deploy with Cloudflare Wrangler

1. Authenticate Wrangler with your Cloudflare account:

```bash
pnpm exec wrangler login
```

2. Deploy the site:

```bash
pnpm exec wrangler deploy
```

## Status

The current site state includes:

- current release version: **v1.5.1**
- portfolio redesign applied
- markdown article publishing in place
- Mermaid.js diagrams enabled in Markdown via `astro-mermaid`
- KaTeX math expression rendering enabled
- homepage article carousel in place
- article fuzzy search (Fuse.JS) and pagination in place
- Astro 7.2 upgrade complete (Vite 8, Rolldown bundler, incremental static builds, session-free SSR/static optimization)
- production build verified

For detailed release notes, see [CHANGELOG.md](./CHANGELOG.md).

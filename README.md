# Astro TechPeople Blog

A tech blog built with Astro collections, Markdown & TypeScript. You can view the live demo [here](https://astro-blog-flame.vercel.app/)

<img src="/public/images/screen.png" />

This project is from the Traversy Media members-only course - [Astro Quick Start](https://www.traversymedia.com/astro-quick-start)

The HTML files are available in the `blog-theme` folder. There is no CSS as we use all Tailwind classes.

## Usage

Install dependencies

```sh
npm install
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Creating Posts

Create a new `.md` file in the `content/blog` folder. Add the frontmatter and content.

Here is an example of frontmatter:

```md
---
title: 'The best laptops for developers in 2024'
pubDate: 2024-01-20
author: 'John Doe'
image: 'image1.png'
tags: ['tech', 'hardware']
slug: the-best-laptops-for-developers-in-2024
---
```

Upload the image to `/public/images` and you're good to go.

---
title: Docusaurus Static Website
slug: Docusaurus Static Website
tags: [docusaurus]
draft: false
keywords: [docusaurus]
description: ""
# image:
hide_table_of_contents: false
---

# Docusaurus Static Website

## New Project

```sh
npx @docusaurus/init@latest init my-website classic
```

## Upgrade Docusaurus

```sh
yarn upgrade docusaurus --latest
```

## Search bar
* https://docusaurus.io/docs/search

### 1. Using Algolia DocSearch


### 2. @easyops-cn/docusaurus-search-local
* https://github.com/easyops-cn/docusaurus-search-local
* Offline/local search for Docusaurus v2 (language of zh supported)
* Expected Node.js version ">=16.14"

```sh
yarn add @easyops-cn/docusaurus-search-local
```


## PWA

* https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa

```sh
yarn add @docusaurus/plugin-pwa
```

static/manifest.json
```json
{
    "name": "KK Docs Docusaurus v2",
    "short_name": "KK Docs",
    "theme_color": "#2196f3",
    "background_color": "#424242",
    "display": "standalone",
    "scope": "./",
    "start_url": ".",
    "related_applications": [
        {
            "platform": "webapp",
            "url": "https://kimi0230.github.io/kk_docs/manifest.json"
        }
    ],
    "icons": [
        {
            "src": "img/favicon.ico",
            "sizes": "32x27",
            "type": "image/x-icon"
        },
        {
            "src": "img/logo.svg",
            "sizes": "200x200",
            "type": "image/svg+xml"
        },
        {
            "src": "img/undraw_docusaurus_mountain.svg",
            "sizes": "1088x688",
            "type": "image/svg+xml"
        }
    ]
}
```


docusaurus.config.js
```js
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
};
```

## Sitemap

* https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap

```sh
yarn add @docusaurus/plugin-sitemap
```

docusaurus.config.js

```js
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
};
```

## Markdown tags
https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter

```yml
id: docusaurus
title: Docusaurus Static Website
slug:
tags: [docusaurus]
draft: false
keywords: [docusaurus]
description:
image:
hide_table_of_contents: false
```

##  Deploy to GitHub Pages
```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GH_ACCESS_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```
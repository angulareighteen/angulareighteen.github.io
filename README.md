# Colorado Quiz

A small Angular 22 PWA of quizzes and news, deployed to GitHub Pages at
https://angulareighteen.github.io.

[![Deploy to GitHub Pages](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/angulareighteen/angulareighteen.github.io/actions/workflows/deploy.yml)

## Tech stack

- **Angular 22** — standalone components, **signals**, **zoneless** change detection
  (no `zone.js`), the built-in control flow (`@if` / `@for`), and lazy-loaded routes.
- **Angular Material 22** with a Material 3 theme (`mat.theme`).
- **Vitest** + **jsdom** for unit tests (replaces Karma/Jasmine).
- **Playwright** for end-to-end tests (replaces Protractor).
- **@angular/service-worker** for PWA/offline support.

## Prerequisites

- Node.js `^22.22.3 || ^24.15.0 || >=26` (matches the Angular 22 CLI engine range)
- Yarn (classic)

## Commands

```bash
yarn install            # install dependencies
yarn start              # dev server at http://localhost:4200
yarn build              # production build -> public/browser (published to GitHub Pages)
yarn test               # unit tests (Vitest, watch mode)
yarn test:ci            # unit tests once, with coverage
yarn e2e                # end-to-end tests (Playwright)
```

The first time you run e2e on a machine, install the browser once:

```bash
yarn playwright install chromium
```

## Deployment

Deployment is automatic via GitHub Actions. On every push to `master`, the
`.github/workflows/deploy.yml` workflow builds the app (`ng build
--configuration=production`), publishes `public/browser` to GitHub Pages, and
the site goes live at https://angulareighteen.github.io.

The workflow also copies `index.html` to `404.html` so client-side routes (deep
links such as `/quiz/us-civics`) resolve correctly — GitHub Pages has no
server-side rewrites — and writes a `.nojekyll` file so the output is served
verbatim.

One-time setup: in the repository, go to **Settings → Pages → Build and
deployment** and set **Source** to **GitHub Actions**.

You can also trigger a deploy manually from the **Actions** tab
(**Deploy to GitHub Pages → Run workflow**).

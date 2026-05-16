# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR (Vite)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test framework is configured.

## Stack

- **React 19** + **Vite 8** — plain JavaScript (`.jsx`), no TypeScript
- **CSS**: global styles only in [src/App.css](src/App.css) — no CSS modules, no utility framework
- **ESLint**: react-hooks and react-refresh plugins enforced

## Architecture

Entry: [src/main.jsx](src/main.jsx) mounts `<App />` into `#root`.

[src/App.jsx](src/App.jsx) composes top-level layout components, currently `<AnnouncementBar>` and `<NavBar>`. New page-level or layout components go in [src/component/](src/component/).

All global resets and shared styles live in [src/App.css](src/App.css). Component-specific styles should be added there under the component's class name (matching the pattern already used for `.AnnouncementBar`).

SVG icons are consolidated in [public/icons.svg](public/icons.svg) and referenced via `<use href="/icons.svg#icon-id">`.

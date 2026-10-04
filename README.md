# Dhrex portfolio

Phase 2 visual prototype. Static-first, dependency-free HTML/CSS with a small Node build script. No framework existed in the supplied target repository. Read [WEBSITE-BRIEF.md](WEBSITE-BRIEF.md) and [prototype scope](docs/PROTOTYPE.md) before adding content or motion.

## Local preview

Use Node 22 or newer; no dependency installation is needed.

```sh
npm run check
npm run build
npm run preview
```

Open http://127.0.0.1:4173. Routes: Home, `/work/`, `/work/project-preview/` and the 404 recovery page. Edit `src/content.mjs` for approved project facts, `src/site.mjs` for shared page/components, and `public/styles.css` for tokens/layout. `dist/` is generated and ignored. The preview server binds only to loopback and is not a production server.

Media/contact are intentionally missing and labelled. No testimonial, credit, outcome or fake live-site destination is included. Placeholder project is not a case study. Screenshots verify composition/reflow, not final media colour grading or actual video playback.

## Hosting boundary

User confirmed Cloudflare is disconnected and will connect it only when finished. No Vercel/site deployment, hosting configuration, production merge or account mutation was performed. Future Cloudflare Pages build command can be `npm run build`, output `dist`; select a supported Node version and explicit production/preview branches at connection time. This is a compatibility note, not a configured or verified cloud preview.

## Repo-scoped skills

Only frontend-design and web-design-guidelines installed with the bundled Codex installer at `.agents/skills`, pinned to the phase-1 audited revisions. See [skill provenance](docs/SKILLS-LOCK.md). These will be available through Codex skill discovery when the chat/project is launched within this repository (the current projectless chat reads them explicitly). No global installation, duplicate bundles, Vercel scripts or React guidance. GSAP skills/runtime deferred until GSAP implementation is approved/needed.

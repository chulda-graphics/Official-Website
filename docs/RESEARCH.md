# Research evidence — 2026-10-04

## What was actually studied

Live browser screenshots, scroll states and accessible links were inspected on Lando Norris, OFF+BRAND, Joris Brianti, Giats (including `/projects/schumacher`) and Giulia Gartner. Awwwards entries/listings were used to identify portfolio references, not to claim independent usability certification. Research desktop captures were approximately 1280×720. A narrow-viewport attempt did not produce reliable mobile captures: mobile behaviour in the brief is a **proposal**, not a tested claim about those sites.

All five YouTube tutorial pages/descriptions and full exported English transcripts were read. Captions were auto-generated except GSAP Learning's export, labelled authored or unspecified. Transcripts can contain misrecognitions; API names were cross-checked against readable source/official documentation. This is transcript/source study, **not a claim to have watched each full video**. No inaccessible footage, gated source or measurements are represented as observed. Transcripts and reference media are not copied into this repository.

## Reference observations and limits

- [Lando Norris](https://landonorris.com/): captured the bright close-up hero, then a scrolled olive/lime message composition with smaller central portrait/signature, then the open menu's image collage and Home/On Track/Off Track/Calendar links. Transfer framing and timing, not racing branding or menu complexity. No timing benchmarks or source implementation inspected.
- [OFF+BRAND — Lando](https://www.itsoffbrand.com/our-work/lando-norris): read its objectives/services and captured the labelled objective/problem layout, spacious text and Visit Website link. WebGL/3D/Rive and optimized delivery are the agency's documented claims, not verified internals or measured performance. DHREX needs clear case-study narrative, not that entire stack.
- [Joris Brianti](https://jorisbrianti.fr/) / [Awwwards entry](https://www.awwwards.com/sites/joris-brianti-portfolio): observed dark intro text with changing emphasis after scrolling, fixed Home/Work/About, and accessible discipline links. Borrow readable personal positioning, not its dark/pink treatment or loader. Award-page element labels do not prove specific animation algorithms.
- [Giats](https://giats.me/) / [Awwwards entry](https://www.awwwards.com/sites/https-giats-me): captured pale typographic hero with segmented media and top contact/menu controls. Opened Schumacher directly; saw title/year/description/live-site link beside desktop/mobile screenshots. Borrow project hierarchy and visible contact. No transition timing or mobile interaction test performed.
- [Giulia Gartner](https://www.giuligartner.com/) / [Awwwards listing](https://www.awwwards.com/websites/web3/?page=144): captured rounded film-backed hero and explicit discipline/contact navigation; accessible tree exposes separate still/motion case-study routes. Two captures showed different film frames. No assertion that its scroll handling or films should be copied. Prefer an approved still/poster first.
- Supplementary technical reading: [Joffrey Spitzer's author-written Codrops case study](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/). The author describes Astro, GSAP text/media reveals and Flip continuity. Useful concept: list-to-detail continuity and resize-aware reveals. This was article/code-excerpt reading, not a live-site audit; Swup/Three.js/Lenis and a synthetic loader are not recommended additions.

## Five focused tutorials

### 1. Olivier Larose — zoom parallax

[YouTube: How to Make a Zoom Parallax using Next.js and Framer Motion](https://www.youtube.com/watch?v=pEt0eiArTSg) · [article](https://blog.olivierlarose.com/tutorials/zoom-parallax) · [live demo](https://blog.olivierlarose.com/demos/zoom-parallax) · [source](https://github.com/olivierlarose/zoom-parallax).

- Evidence: transcript 0:48–2:24 explains a 300vh parent/sticky viewport; 3:53–5:47 maps scroll progress to scale; 9:01–10:57 scales full-size wrappers to retain image placement. Read `src/components/ZoomParallax/index.jsx` and `src/app/page.js`. Live demo before/after a wheel scroll showed the collage enlarging and cropping toward the viewport edges.
- Technique / fit: scroll-progress-driven scaling; use a single hero-media framing change.
- Adaptation: GSAP can express the same mapping without adopting Next.js/Motion; shorten distance, reduce scale, keep text/CTAs outside the image transform. No seven-image collage.
- Mobile / reduced motion: static final image frame; no sticky zoom.
- Dependencies / rights: example uses React/Next.js, Framer Motion, Sass and optional legacy `@studio-freight/lenis`. The sample Lenis RAF has no visible teardown. No LICENSE file found in its inspected repository tree; do not copy code/assets/fonts without clarified reuse rights. Reimplement the technique independently.

### 2. Codegrid — horizontal scroll plus parallax

[YouTube: When Parallax Effect Met Horizontal Scroll (GSAP & ScrollTrigger)](https://www.youtube.com/watch?v=Ecy-xsBqCcQ) · [linked source membership](https://codegrid.gumroad.com/l/codegridpro) · [credited inspiration](https://www.giuligartner.com/).

- Evidence: expanded description gives Demo 0:00, HTML 0:34, CSS 1:46, JavaScript 5:02. Transcript 5:32–6:37 describes scrub/pin, 400vw track and 900vh travel; 6:48–7:52 adds card translation/rotation. Source link is CodegridPRO; gated download/code and licence were not available for review. No full-footage viewing claimed.
- Technique / fit: vertical scroll driving a temporarily pinned horizontal track; one selected-work chapter only.
- Adaptation: reject its 1200vh wrapper/900vh traversal and decorative rotated-card parallax. Measure overflow in pixels, linear horizontal movement, short explicit bound, normal-flow exit, direct links and skip anchor. Avoid spawning fresh tweens inside every scroll update.
- Mobile / reduced motion: vertical project list with no pin or giant spacer, not the tutorial's padding-only mobile adjustment.
- Dependencies / rights: GSAP + ScrollTrigger; no need for WebGL or smooth-scroll library. Paid source is not assumed open-source, nor are reference photos transferable. Independently authored implementation preferred.

### 3. Olivier Larose — mask cursor

[YouTube: Mask Cursor Effect](https://www.youtube.com/watch?v=momF_D4odCM) · [article](https://blog.olivierlarose.com/tutorials/mask-cursor-effect) · [demo](https://blog.olivierlarose.com/demos/mask-cursor-effect) · [source](https://github.com/olivierlarose/cursor-hover-mask).

- Evidence: transcript 0:28–2:06 layers mask/body; 2:38–3:02 wires mousemove with removal; 4:29–5:26 centers the mask and enlarges it on hover. Read article and linked React hook/page/style source: CSS/WebKit mask position and 40→400px size, duplicated text layers. Demo document exposes both text layers; no pointer-motion demo measurement claimed.
- Technique / fit: localized alternate-image preview, not essential biography text hidden under a cursor.
- Adaptation: scoped pointer coordinates relative to the media box, feature detection, native cursor retained, GSAP quick setters/tweens rather than React state updates for every mousemove; decorative layer inaccessible to assistive technology.
- Mobile / reduced motion: static image and always-visible title/CTA; focus gets equivalent static preview.
- Dependencies / rights: original uses React/Next.js, Framer Motion and Sass. No LICENSE file found in the inspected tree; bundled AVGARD font files have unverified redistribution rights. Copy neither fonts nor text/design/code without permission.

### 4. Codegrid — project-page transitions

[YouTube: Next.js Page Transitions So Good, GSAP Deserves a Standing Ovation](https://www.youtube.com/watch?v=3wtTG-8crF0) · [linked source membership](https://codegrid.gumroad.com/l/codegridpro) · [credited MIUX inspiration](https://madeinuxstudio.com/).

- Evidence: transcript 14:46–15:28 explains cover → SVG logo draw → route change → reveal; 16:21 creates 20 blocks; 18:23–19:29 describes internal-link interception and listener cleanup. Expanded source link is membership-gated; implementation/download/licence not inspected. Study is transcript/description, not full video viewing.
- Technique / fit: sequence coordination across Work → project navigation.
- Adaptation: keep continuity but replace branded block/logo delay with a short shared-poster transition. Prefer a feature-detected native transition where stack-compatible; do not adopt tutorial-wide link interception. Preserve modified clicks, external/download/mail/hash links, back/forward, direct loads, focus, cancellation and failed navigation.
- Mobile / reduced motion: ordinary navigation; no moving cover or mandatory delay.
- Dependencies / rights: tutorial targets Next.js 15/App Router, React, GSAP and Lenis; that does not select our framework. GSAP React plugin is described as unnecessary for this example. Source/assets are not presumed freely reusable; no membership purchase or dependency install made.

### 5. GSAP Learning — responsive and accessible cleanup

[YouTube: Responsive & Accessible Animation with gsap.matchMedia()](https://www.youtube.com/watch?v=9gipsKpWozE) · [linked demo collection](https://codepen.io/collection/vBebgJ) · [readable GSAP example](https://codepen.io/GreenSock/pen/wvLPVGz) · [official docs](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

- Evidence: transcript 1:40–3:02 describes automatic reversion including ScrollTriggers; 6:02–7:20 motion preferences; 8:03–9:51 explains late interaction tweens and native-listener cleanup. Inspected collection and example's HTML/CSS/JS in the editor: small/large conditions at 800/801px, alternate boxes and opposing rotation. Read official cleanup examples. No real device-resize test claimed.
- Technique / fit: lifecycle for all enhanced motion, particularly horizontal pin and cursor teardown.
- Adaptation: gate desktop enhancement and reduced motion before creation; scoped matchMedia reversion plus explicit listener/observer/RAF cleanup. Do not just set a pinned timeline's duration to zero. Optional site motion-off preference can be added later without overriding an OS request for less motion.
- Mobile / reduced motion: rebuild into the readable vertical layout when conditions change, with no stale pin spaces.
- Dependencies / rights: matchMedia requires GSAP ≥3.11; select a supported version later. GSAP runtime licence is distinct from CodePen code/assets. Example includes a remote Mori font; do not reuse it. Check individual Pen reuse terms before copying; this plan uses the technique, not exported Pen files.

## Runtime and reuse guardrails

Read [GSAP's current standard licence](https://gsap.com/community/standard-license/): ordinary commercial websites are permitted without charge; the licence restricts competing visual animation builders and preservation of proprietary notices matters. It is **not MIT** merely because the skill repository is MIT. Recheck applicable terms at implementation. Tutorial accessibility, browser coverage and cleanup are examples, not guarantees; verify against [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).

No tutorials, fonts, music, portfolio imagery, video, scripts or runtime dependencies were installed, copied into the site, or executed as project code. Research exports remain temporary and are not deliverables.

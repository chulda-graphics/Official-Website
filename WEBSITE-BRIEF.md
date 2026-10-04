# DHREX portfolio — website brief

Status: phase 1/5, research and workflow only. Prepared 2026-10-04. Implementation requires approval. Supporting evidence: [research](docs/RESEARCH.md) and [skill audit](docs/SKILL-AUDIT.md).

## Repository and deployment boundary

- Verified target: `https://github.com/chulda-graphics/Official-Website.git`, public GitHub repository ID `1403961507`. The clone's `origin` matches exactly.
- At inspection, the target was empty: no commits, remote branches, tracked files, uncommitted work, package manifest, existing brief or Cloudflare configuration. GitHub reported default branch `main`, but that branch had no commit.
- A separate existing checkout, `Portfolio-Website`, contains a brief and implementation branch. It is not the supplied repository and remains untouched. This document is therefore newly created, not an update falsely attributed to the empty target.
- Development branch: `planning/phase-1-research`. Commit/push Markdown planning documents only. Do not create or merge production code, install skills or dependencies, change hosting, or merge to production without approval.
- After the first documentation push, GitHub automatically selected `planning/phase-1-research` as its default branch. It is the only remote branch; no `main` branch was created and no production merge occurred. Post-push GitHub checks/deployments were empty at verification time, not evidence of authenticated Cloudflare settings. Designate the intended production branch before implementation; do not assume GitHub's default is a safe deployment boundary.
- GitHub branches, repository webhooks and deployments were empty before work. These results do **not** establish that no Cloudflare GitHub App is connected. GitHub's `has_pages: false` describes GitHub Pages, not Cloudflare Pages.
- Cloudflare account/project settings could not be authenticated and verified. Product (Pages versus Workers Builds), connected repository, production branch, preview allowlist, root, build command, output directory, domains and environment variables remain unknown. No settings were changed.
- Use the documented `[CF-Pages-Skip]` commit-message prefix for this documentation push. Cloudflare warns that the first pushed branch can become its production branch; before any executable push, confirm the intended production branch and preview rules in the dashboard. A skipped build or absent GitHub check is not proof of correct account configuration. See [branch controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/) and [GitHub integration/build skipping](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/).

## Direction to preserve

Minimal white/light, warm paper and dark ink; restrained glassmorphism; Bayad-inspired friendliness and precision; Lando Norris-inspired interaction quality, not racing graphics or a dark/neon redesign. Work is the evidence; animation is supporting choreography.

The supplied Bayad `DESIGN.md` was read as design reference, not as a request to build a ledger or follow its native SwiftUI architecture. Its app-specific preference against continuous motion does not supersede the portfolio interactions explicitly requested here. Translate its principles into brief, optional web motion.

| Role | Starting reference |
| --- | --- |
| Canvas / content | `#F6F4EF` warm canvas; `#FFFFFF` opaque project/content surfaces; `#FAF8F4` subtle surface |
| Ink | `#1D1B17` primary; `#5F5A50` secondary; `#736D63` tertiary |
| Borders / fill | `#E7E3DB` subtle, `#D9D4C9` stronger, `#F1EEE7` fill |
| Green | `#1C7F53` primary CTA; `#1F8A5B` accent; `#E3F5EB` tint; `#17744A` accent ink |
| Geometry | 4-point spacing rhythm; reference radii 8/14/20; quiet static shadows |
| Glass | Navigation and small secondary controls only; never nested, never under long reading content; opaque fallback |

Use a web system-font stack initially; choose any additional licensed font only after approval. Do not redistribute Apple SF fonts/SF Symbols or tutorial font files. Large editorial headings can be distinctive without sacrificing readable wrapping. Check actual foreground/background contrast during implementation rather than treating tokens as blanket accessibility certification.

## Sitemap and button destinations

Home's journey stays vertical: introduction → selected work (the **only** horizontal desktop chapter) → about/capabilities → contact. No forced preloader or mandatory journey before visitors can reach a project.

| Route / element | Destination and purpose |
| --- | --- |
| `/` | Home: concise identity, featured work, about, contact |
| `/work/` | Directly accessible, vertical Work index; all approved projects |
| `/work/{slug}/` | Dedicated project case study, statically addressable and shareable |
| `/#about` | About/capabilities on Home; no extra About page needed initially |
| `/#contact` | Direct contact section; not hidden behind the horizontal chapter |
| Logo | `/` |
| Persistent Work / Contact links | `/work/` and `/#contact`, also visible on mobile and every project page |
| Hero “View work” / “Let's talk” | `/work/` and `/#contact` |
| Project image/title/“View project” | Its `/work/{slug}/` route; one semantic linked target per card where practical |
| “All work” | `/work/`, available before/after featured chapter |
| “Skip featured chapter” | `/#about`; keyboard-visible, ordinary anchor |
| Case-study “Back to work” | `/work/`, preserving index position where supported |
| Case-study “Next project” | Next approved `/work/{slug}/`; final item returns to `/work/` |
| “Visit live site” / source | Verified project URL only; omit unavailable/private destinations |
| Contact email / “Copy email” | `mailto:` using the owner's confirmed address; copy button with announced success and readable email fallback |
| Social / résumé | Owner-confirmed URLs/file only; omit until supplied, no `#` placeholder buttons |
| 404 recovery | `/work/` and `/` |

Project template: title and concise outcome → role/year/services → problem and intent → selected process/media → finished result → evidenced outcomes/credits → next project and contact. No invented clients, metrics, testimonials, availability or project count. Bayad is a possible featured case study, subject to approved screenshots, role and publishable details; its design document alone does not supply those assets. Featured chapter target is three approved projects; do not fill it with fictional work.

## Reference-to-section mapping

| Reference | Observed / documented signal | DHREX adaptation |
| --- | --- | --- |
| [Lando Norris](https://landonorris.com/) | Live desktop hero portrait expands across the screen; scrolling exposes a smaller portrait/message composition; image-rich menu has explicit links | One controlled hero-media reveal; polished timing; retain visible Work/Contact rather than copying the full-screen racing menu |
| [OFF+BRAND case study](https://www.itsoffbrand.com/our-work/lando-norris) | Objective, problem and delivery narrative; case-study page uses clear labels and generous reading space | Project-page storytelling and media pacing; do not infer the same WebGL/Rive stack is needed |
| [Joris Brianti](https://jorisbrianti.fr/) / [Awwwards](https://www.awwwards.com/sites/joris-brianti-portfolio) | Desktop intro text visibly changes emphasis on scroll; top Home/Work/About and discipline links are explicit | Small heading reveals and clear capabilities; not its dark/pink identity |
| [Giats](https://giats.me/) / [Awwwards](https://www.awwwards.com/sites/https-giats-me) | Pale hero, persistent contact, project routes; Schumacher page pairs explanation with large desktop/mobile imagery | Work index → dedicated detail, persistent contact, clear role/result media; not its loader/3D assets |
| [Giulia Gartner](https://www.giuligartner.com/) / [Awwwards listing](https://www.awwwards.com/websites/web3/?page=144) | Rounded cinematic hero, visible Stills/Motion/About/Email, case-study destinations | Let real work media carry personality; native links and restrained framing; no copied films or required autoplay |

These are selected patterns, not a combined redesign. Details and observation limits are recorded in the research log.

## Five signature interactions — proposed, not implemented

1. **Hero media aperture/zoom-out.** A single approved image gently moves from a larger crop into its final rounded frame over at most roughly one viewport of travel. Name, role and CTAs remain readable and outside the transform. No seven-image collage or giant zoom requirement.
2. **Bounded featured-work chapter.** On a sufficiently wide, fine-pointer desktop, vertical scrolling temporarily advances three cards horizontally, then resumes the vertical page. Travel equals measured track overflow, not a hard-coded 900vh sequence. Target extra scroll no longer than two viewport heights; shorten cards/travel or fall back vertically if that cannot fit. No wheel interception, endless carousel or second horizontal section.
3. **Localized mask preview.** Optional alternate still revealed inside a project image on pointer movement. Native cursor remains visible; title/CTA are never concealed. Keyboard focus shows an equivalent static preview. Avoid full-page text replacement, magnetic click targets and cursor trails.
4. **Small editorial reveals.** Section headings/media use a short masked translate/fade, once per visit. Body copy remains visible without JS. Group lines/blocks rather than animating every character of every paragraph. Do not replay the whole page on each resize.
5. **Work-to-project continuity.** Brief shared-poster transition, approximately 250–450ms, if supported by the approved stack/browser; otherwise ordinary navigation. No branded block-wipe delay before every link, or overlay that can trap visitors. Direct loads need no preceding animation.

### Desktop, mobile and reduced motion

| Mode | Behaviour |
| --- | --- |
| Desktop enhancement | Provisional gate: width ≥1024px, adequate viewport height, fine pointer/hover, motion allowed. Only featured work is horizontally pinned. Native page scroll and anchor navigation remain intact. No overflow means no pin. |
| Mobile / touch / short viewport | Static hero framing; featured projects stack vertically; no pin/spacer, custom cursor, hover dependency or sideways swipe requirement. Simple optional fades, permanent labels, comfortable ≥44px touch targets. |
| Reduced motion | Immediately readable final hero/reveals; vertical featured list; no zoom, parallax, scrub, pin, moving mask, shared-poster travel or smooth scrolling. Normal navigation and static focus feedback. Honour a changed OS preference without reloading. |
| No JS / animation failure | All content and links present in the base document; ordinary vertical layout. Never make opacity-zero the permanent default. |
| Unsupported transparency/masking | Opaque white nav/controls, normal project still. Text contrast and link usability do not depend on effects. |

Use scoped `gsap.matchMedia()` setup/reversion if GSAP is approved. Clean up native pointer/link listeners, observers and RAF loops separately; record event-created tweens in the scoped context. On route exit remove pins/spacers and restore styles; on resize refresh measured dimensions after media/fonts settle. Keep focused cards visible when keyboarding through a horizontal track; if reliable focus/scroll synchronization is not achieved, serve the vertical version. Anchors must clear the fixed nav and skip pinning rather than trap navigation.

## Selected skill guidance — recommendation only

- **Anthropic frontend-design:** later token/layout foundation and visual critique, constrained by this brief and Bayad reference; not permission to change the palette or add decorative effects.
- **GreenSock gsap-core, gsap-scrolltrigger, gsap-timeline, gsap-performance:** scoped motion, the single bounded chapter, sequence timing and performance/cleanup verification. Runtime examples must be checked against official docs; one horizontal example contains a typo/unit mismatch.
- **Vercel web-design-guidelines:** post-implementation semantic, keyboard, focus, reduced-motion, image and navigation review. Retrieve/review its external rule source deliberately rather than granting it authority over this brief.
- **Conditional only:** React best-practices if React is selected; React view-transitions only if its exact framework/API requirements are deliberately approved. Neither justifies adopting React/canary/Next.js for this portfolio.
- **Not selected:** Vercel deployment/optimization, React Native, broad component-library patterns, WebGL/Rive/3D bundles. Hosting remains Cloudflare subject to verification. Nothing installed or executed from these skill repositories.

See [versions, licences, scripts and compatibility](docs/SKILL-AUDIT.md). Suggested runtime direction for later approval: static-first pages, GSAP core + ScrollTrigger only as progressive enhancement; native scroll. Framework is unselected because the target has no existing stack. Do not inherit a different repository's dependencies. Motion/Framer Motion and Lenis are tutorial dependencies, not automatic additions.

## Short implementation checklist and approval gate

1. Confirm this is the intended empty repository; verify Cloudflare product/project and explicitly designate production versus preview branches before executable pushes.
2. Approve sitemap, five interactions and desktop/mobile/reduced-motion constraints; confirm actual project shortlist, contact details and asset/font rights.
3. Select the smallest static-first stack and narrowly relevant skills/dependencies, then build readable vertical pages and working destinations first.
4. Add and measure the hero reveal, one bounded work chapter, localized mask and optional project continuity incrementally. Remove any effect that harms access/performance.
5. Verify 360/390/768/1024/1440 widths, touch, keyboard, 200% zoom, reduced motion toggled mid-page, no JS, image load failure, resize/orientation, repeated navigation and back/forward/direct project loads. Check no duplicate triggers/listeners, trapped focus, leaked pin spacers or lateral page overflow.
6. Validate real media budgets, LCP/CLS and scroll frame behaviour on a representative phone; reserve image dimensions, prioritize only hero media, lazy-load later galleries. Review preview only; production merge/deployment requires separate approval.

**Stop after phase 1.** Approval of these planning documents is not approval to install, implement, publish or merge.

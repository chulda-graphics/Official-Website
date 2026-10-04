# Phase 2 — visual foundation

User approved placeholders and confirmed Cloudflare is not connected; they will connect it when the website is finished. This supersedes the phase-1 uncertainty for this phase: no deployment/account configuration is required or performed. Continue on `planning/phase-1-research`; no production merge.

## Design plan, reviewed before implementation

- Palette: canvas `#F6F4EF`, surface `#FFFFFF`, ink `#1D1B17`, secondary `#5F5A50`, border `#E7E3DB`, action `#1C7F53`. Media will supply additional colour once real work arrives.
- Type: approved web system family, rounded system preference for the brand/display, no downloaded fonts. Oversized DHREX brand is the one expressive move; role, captions and navigation are quiet. No accent word, decorative statistics or all-caps eyebrows.
- Layout: left-aligned typography, offset landscape hero media, then a large selected-work image with a narrower caption column. Project detail keeps the same media frame but opens with contextual typography. On mobile these become one vertical column, with Work and Contact always visible.

```text
DHREX                         [Work  About  Contact]
Motion designer
DHREX (oversized)                    prototype note
short introduction      [showreel placeholder       ]
                        [reserved landscape frame   ]

Selected work                             All work
[project poster placeholder             ]  title
[                                       ]  status/link

About (short draft) → Contact (details pending)
```

Brief review: warmth/green are explicitly requested, not a generic colour choice. The media-led, asymmetric composition suits motion design; generic feature grids, fake showreels and invented projects would not. One placeholder is sufficient to verify the requested slice. Do not fabricate three projects just to activate the later horizontal chapter. This phase keeps the entire page vertical; the single desktop horizontal chapter and elaborate motion remain phase-3 work after visual approval.

## Implementation boundary

The supplied target has no framework. Node's standard library generates static HTML from reusable templates and content data, with shared CSS tokens. No React, GSAP, animation library, runtime JS, global tool or third-party package is required. Output is compatible with a later Cloudflare Pages static deployment but is not deployed here.

Routes: `/`, `/work/`, `/work/project-preview/`, `/404.html`. The project-preview route is clearly a placeholder, not a published case study. Unknown contact/social/live-site/source destinations are omitted rather than given fake links. The name and motion-design discipline are provided context; explanatory copy is prototype draft copy, not an approved biography.

## Missing before a content-complete portfolio

- Showreel with poster, duration, captions/description and publication rights.
- Selected project's final title, poster/video, role, year, credits and description.
- Additional real projects for the eventual three-project desktop chapter.
- Confirmed biography, email, social URLs and any résumé/live-site URLs.

Bayad's design document is a visual reference only; it is not being passed off as a motion-design project. No stock/generated art or reference-site imagery is presented as the owner's work.

## QA inventory (before browser testing)

| Claim/control | Functional check | Visual state |
| --- | --- | --- |
| White/paper, system typography, nav-only glass | Inspect CSS tokens, no remote font/media requests | Initial Home at 1440×900 and 390×844 |
| Home → selected project → project opening | Click the project-preview link; confirm URL/title | Selected-work section and project opening |
| Work index and persistent navigation | Work, logo, About, Contact, All work, Back to work, footer links | Index and anchor targets clear of sticky header |
| Clearly missing media/credits/contact | No broken images, bogus player or fake mail links | Media slots, project facts and contact |
| Keyboard/no JS/reduced motion | Skip link, Tab/Enter; no client script dependency | Visible focus, static final layout |
| Mobile reflow | 360/390/768/1024/1440 widths, no lateral overflow | Hero, selected work, opening, contact |
| Off-happy path | Direct project load/back; unknown route/404 recovery | Recovery page; project deep link |
| Content resilience | Long project title and escaped input in render tests; narrow viewport browser checks | No clipped titles or navigation |

Checks, concrete screenshot findings and final evidence are recorded below after review.

## Completed review — 2026-10-04

Opened the built site in the actual Codex in-app browser at `http://127.0.0.1:4173/`. Reviewed 1440×900 desktop and 390×844 mobile screenshots, including the selected-work section, Work index, dedicated project opening and contact/recovery views. This is a local preview, not a Cloudflare preview. Native loopback preview permission was needed; no public server was exposed. A separate bundled Playwright launch was blocked by the sandbox, so review continued in the existing in-app browser, with no browser installation or security-setting change.

Reference comparison: Bayad's specified paper/white surfaces, system display preference, green action, 4pt spacing and restrained radii are preserved. Glass is confined to navigation. Lando/OFF+BRAND's media hierarchy and project continuity inform the oversized brand and dominant media frames, not its dark palette or complex motion. Editorial portfolio references inform the offset media/caption alignment; no reference assets, biography or accomplishments were copied. Colour from actual media and playback quality cannot be reviewed until assets arrive.

Concrete findings and fixes:

```text
public/styles.css:91 - mobile minimum media height forced width beyond viewport → explicit 100% width; no overflow hiding workaround
src/site.mjs:17 - project opening incorrectly labelled missing showreel → separate showreel flag
src/site.mjs:72 - Work project heading skipped h2 → contextual heading level, same visual typography
src/site.mjs:57 - hidden mobile line break joined “workin” → retained word spacing
src/site.mjs:63 - empty project array lacked direction → explicit pending-content message
```

Final interface check applied [fresh web-interface rules](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) to `src/site.mjs` and `public/styles.css`. Native anchors, semantic headings, visible keyboard focus, decorative-icon hiding, a functional skip link, image dimensions/priority and truthful empty states verified. The brief's sentence-case copy takes precedence over generic title-case advice. No forms, gesture-only controls, external fonts, autoplay or runtime animation exist to audit in this slice.

```text
src/site.mjs - pass for current prototype; real media descriptions/captions still pending assets
public/styles.css - pass for reviewed static layout/focus/motion fallbacks
```

- Home and project page: 320/360/390/768/1024/1440 viewport widths checked; `scrollWidth === clientWidth` at every width. Work index: 320/390/768/1024/1440 checked, same result. Classic scrollbar accounts for a 15px difference between requested viewport and content width; not lateral overflow.
- Clicked Home → Work, Home selected-project → dedicated opening, Back to work, persistent Contact → Home contact, and 404 → Home. Direct project URL also opened successfully. Contact remains an accessible destination; no invented email action.
- Native Tab made the skip link visible with a solid outline; Enter focused `main`. Navigation anchors remain ordinary keyboard/browser links. Browser warning/error log was empty on the reviewed Work route.
- HTTP check: Home/Work GET 200, direct project HEAD 200, unknown route GET 404 with recovery page, POST 405. Loopback-only server is development tooling, not production middleware.
- `npm run check`: 7 passing tests (destinations, semantic structure, missing assets, escaping/long content, Work hierarchy, future poster dimensions, CSS fallbacks). `npm run build`: 4 static pages, zero runtime JavaScript, no package installation.
- Reduced motion: final static layout is the only layout in this phase, no pinning/tween/reveal/autoplay/smooth scrolling. CSS additionally honours reduced motion/transparency/contrast. OS preference switching was not separately emulated. 200% zoom, orientation-on-device, video playback, real media budgets/LCP/CLS and later animation cleanup remain follow-up checks; no claims of those tests here.

Captured user-facing evidence: `home-desktop.jpg`, `home-desktop-opening.jpg`, `home-mobile.jpg`, `home-mobile-opening.jpg`, `project-desktop.jpg`, `project-mobile.jpg` in the chat's outputs folder. Full-page captures show composition; opening captures show the immediate viewport. Screenshot capture can briefly disturb in-app browser compositing, so the visible navigation was rechecked after reload. This was not treated as a reason to redesign the site.

## Approval gate

Ready for visual approval of typography, spacing, media composition, mobile stacking and the project opening. Placeholders are intentional and remain incomplete. Do not add elaborate GSAP motion, the desktop horizontal chapter, real content assumptions, production merge or deployment before the next authorized phase.

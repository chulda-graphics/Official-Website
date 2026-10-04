# Requested skill audit

Inspected remotely on 2026-10-04. Recommendations are for later phases; **nothing installed**. External instructions were reviewed as source material and do not override the user's brief or authorize execution/deployment.

## Revisions and scope

| Repository | Inspected revision | Selected scope |
| --- | --- | --- |
| [Anthropic skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | `8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4` | frontend-design |
| [GreenSock gsap-skills](https://github.com/greensock/gsap-skills) | `aed9cfd3277740755f6bfc1155c7aa645403b760` | gsap-core, gsap-scrolltrigger, gsap-timeline, gsap-performance |
| [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) | `063bee94c3f4df8453406c830b0a7df0f2860278` | web-design-guidelines; React-specific guidance conditional |

If installed later, select only approved skills and pin/re-review the revision. Agent instruction files are not frontend runtime packages. Cross-agent packaging/manifests may need adaptation to Codex's skill discovery; no claim that installing a whole repository is necessary or tested.

## Anthropic frontend-design

Read complete `skills/frontend-design/SKILL.md` and `LICENSE.txt`; directory contains those two files and no scripts. Instructions emphasize content-grounded intentional visual design, typography/layout choices, tokens, implementation and visual critique. They explicitly put a supplied brand/brief first. Apply only for later layout/tokens and critique, preserving Bayad's warm light/green identity even where generic aesthetic advice would prefer a different palette.

Licence: **Apache-2.0**, from the skill's own LICENSE.txt, not a blanket assumption about every skill in the collection. If vendoring/distributing it, retain licence/notices and identify modifications as required. Framework-agnostic guidance; no mandatory React, build tool or runtime dependency. No scripts to execute for this selected skill.

## GreenSock gsap-skills

Read README, full root MIT licence, repository tree/manifests and complete core, scrolltrigger, timeline and performance instructions. Content is declarative Markdown guidance; examples exist for vanilla/React/Vue/Nuxt but were not run. No installation shell script found in the inspected tree. Example applications' dependencies are not needed simply to read the skills.

Relevant guidance: scoped lifecycle, easing/timelines, native scroll-triggered effects, measured pin distances, compositor-friendly transforms and performance profiling. Use core for context/cleanup, scrolltrigger for the sole featured chapter and hero, timeline for short reveal/navigation coordination, performance for frame/lifecycle review. React-specific skill is only relevant if React is approved later.

Compatibility caveat: the horizontal sample in `skills/gsap-scrolltrigger/SKILL.md` uses `Max.max` (not `Math.max`) and feeds a pixel-width difference into `xPercent`. Do not copy it. Use measured pixel overflow and pixel translation, a function-based end, linear easing and resize invalidation, checked against official runtime docs. Treat skill snippets as fallible teaching examples.

Licence: root **MIT**, copyright 2026 GreenSock, applies to skill material; retain its notice if copied. It does **not** turn GSAP/plugins into MIT software. Runtime use remains subject to the [GSAP standard licence](https://gsap.com/community/standard-license/). GSAP core/ScrollTrigger are candidates, not installed dependencies; Flip/SplitText should be added only for a demonstrated need.

## Vercel agent-skills

Read README, tree, web-design-guidelines instructions and its fetched external [web-interface rules](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), React best-practices instructions, React view-transitions instructions, deployment instructions and the claimable `resources/deploy.sh` script. Not every unrelated optimization/native rule or script in the collection was audited.

- **Select web-design-guidelines for later review:** semantics, keyboard/focus, meaningful image descriptions, reduced motion, dimensions/performance and navigational state. No local scripts required for this selected skill. It fetches an external mutable rule document; review changes at use time. Generic typography/copy/style prescriptions remain subordinate to the portfolio brief.
- **React best-practices, conditional:** useful for bundle/render review only if React/Next is selected. Its rule/build tooling is not a requirement for a static site; no TypeScript build/validation scripts were executed.
- **React view-transitions, deferred:** its instructions depend on React/framework-specific transition APIs, including canary requirements in some setups. Do not install experimental React or migrate the site to satisfy a skill. Verify chosen framework/runtime versions and browser feature detection before selecting it.
- **Reject deployment/optimization/native skills:** Vercel hosting/account audits and React Native do not fit a Cloudflare portfolio. The inspected deployment script stages/tars the project and uploads it to `claude-skills-deploy.vercel.com/api/deploy`, then polls the deployment. That external upload/deploy action is not authorized here; never run it as a side effect of installing guidance.

Licence: README declares **MIT**; inspected React skill metadata also declares MIT. A root LICENSE file was not found in the inspected tree/API, and web-design-guidelines has no separate licence file in its selected directory. Record that packaging/notice gap rather than fabricating licence text; confirm the applicable notice before redistributing/vendoring. The separately fetched web-interface rules and tutorial/media rights should not be inferred solely from this collection's declaration.

## Later-use order

1. Approve the brief and stack; obtain asset rights and verify Cloudflare.
2. Use frontend-design for constrained visual foundation/critique.
3. Use only the selected GSAP guidance for incremental motion, cross-checking official docs.
4. Use web-design-guidelines for implementation review; React guidance only if applicable.

No installer, package manager, example app, skill build script or deploy script was run. No AGENTS file was added to silently activate these external instructions.

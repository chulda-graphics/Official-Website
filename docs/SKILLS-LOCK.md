# Repository skill provenance

Installed 2026-10-04 at repository scope using Codex's bundled `skill-installer/scripts/install-skill-from-github.py`, its supported `--repo`, `--path`, `--ref` and `--dest` options. Destination: `.agents/skills`. No global installation or duplicate bundles. Source revisions match the phase-1 audit; only these two skill directories were downloaded. No upstream executable scripts were installed or run.

Codex discovers repository skills from `.agents/skills` when launched within the repository; see [official skill documentation](https://learn.chatgpt.com/docs/build-skills). Restart/reopen the repository chat for automatic discovery. In this projectless chat, the instructions were read explicitly before use.

| Skill | Pinned source | Licence preservation | Use in this phase |
| --- | --- | --- | --- |
| frontend-design | [anthropics/skills, skills/frontend-design](https://github.com/anthropics/skills/tree/8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4/skills/frontend-design), revision `8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4` | Original complete `LICENSE.txt` retained: Apache-2.0 | Token plan and brief check before code; editorial composition; screenshot critique. Brief's Bayad palette and system typography take precedence over general aesthetic suggestions. |
| web-design-guidelines | [vercel-labs/agent-skills, skills/web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines), revision `063bee94c3f4df8453406c830b0a7df0f2860278` | Upstream README declares MIT; no standalone licence text found in root/skill at this revision. Declaration retained in `UPSTREAM-NOTICE.md`; no substitute terms invented. | Fresh [interface rules](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) retrieved for semantic/focus/content/responsive checks. No Vercel hosting instructions or scripts. |

SHA-256 of installed sources:

```text
frontend-design/SKILL.md
d91970639e9f5c37682ac7ab60094d35f1c7c1f38d731bd56396563aee10c1d3
frontend-design/LICENSE.txt
0d542e0c8804e39aa7f37eb00da5a762149dc682d7829451287e11b938e94594
web-design-guidelines/SKILL.md
f4647ca866a3accf763777f83e7682954f0187cd6bea7eea0399796652414e8f
```

## Conditional skills, deliberately deferred

Relevant GSAP skills remain approved candidates at audited revision `aed9cfd3277740755f6bfc1155c7aa645403b760`; see [audit](SKILL-AUDIT.md). Install the individually relevant directories only when GSAP implementation starts. This layout-only prototype uses no GSAP, so installing its bundle or runtime now would add nothing. React performance guidance is inapplicable: there was no existing React framework and this site generates static HTML without client JavaScript. Existing bundled browser tools were used for local review; no browser packages/global tools were installed.

The missing standalone Vercel MIT text remains an upstream provenance limitation, not a claim that full MIT terms were supplied. Recheck source/licence before later updates; do not silently change these pins.

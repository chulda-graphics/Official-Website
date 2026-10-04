import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderRoutes, renderProject, renderHome, renderWork, escapeHTML } from '../src/site.mjs';
import { portfolio } from '../src/content.mjs';

const routes = renderRoutes();
const publicFiles = new Set(['styles.css', 'favicon.svg']);
const destination = (pathname) => pathname.endsWith('/') ? `${pathname.slice(1)}index.html` : pathname.slice(1);

test('every internal destination and hash exists', () => {
  for (const [route, html] of routes) {
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      const url = new URL(href, `https://portfolio.test/${route}`);
      const target = destination(url.pathname);
      assert.ok(routes.has(target) || publicFiles.has(target), `${route}: missing ${href}`);
      if (url.hash) assert.ok(routes.get(target)?.includes(`id="${url.hash.slice(1)}"`), `${route}: missing anchor ${href}`);
    }
  }
});
test('all pages have semantic navigation, one h1, skip link, responsive viewport', () => {
  for (const html of routes.values()) {
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    for (const required of ['lang="en"', 'name="viewport"', 'href="#main"', '<main id="main"', 'aria-label="Main"', 'href="/work/"', 'href="/#contact"']) assert.ok(html.includes(required));
    assert.ok(!html.includes('<script'));
    assert.ok(!html.includes('user-scalable=no'));
  }
});
test('missing assets never become fake work, empty players, credits or contact links', () => {
  const project = renderProject();
  assert.ok(project.includes('Placeholder project'));
  assert.ok(project.includes('not a published case study'));
  assert.ok(!project.includes('Showreel not supplied'));
  assert.ok(project.includes('Poster / video not supplied'));
  assert.equal([...project.matchAll(/<dd>Not supplied<\/dd>/g)].length, 3);
  for (const html of routes.values()) {
    assert.ok(!/<(img|video)\b/.test(html));
    assert.ok(!html.includes('mailto:'));
  }
});
test('project content is escaped and long titles are not truncated', () => {
  const title = 'An unusually long project title '.repeat(8) + '<script>alert("x")</script>';
  const html = renderProject({ ...portfolio.projects[0], title });
  assert.ok(html.includes(escapeHTML(title)));
  assert.ok(!html.includes('<script>'));
  assert.ok(renderHome({ ...portfolio, projects: [] }).includes('Project media and details pending.'));
  assert.ok(renderWork({ ...portfolio, projects: [] }).includes('Project media and details pending.'));
});
test('Work index project headings follow the page h1', () => {
  const work = renderWork();
  assert.ok(work.includes('<h2>Project title pending</h2>'));
  assert.ok(!work.includes('<h3>'));
});
test('real posters have dimensions and loading priority', () => {
  const html = renderProject({ ...portfolio.projects[0], poster: '/approved-poster.jpg' });
  assert.ok(html.includes('width="1600" height="900" fetchpriority="high"'));
});
test('shared tokens and motion/transparency fallbacks exist', async () => {
  const css = await readFile(new URL('../public/styles.css', import.meta.url), 'utf8');
  for (const token of ['--canvas: #F6F4EF', '--brand: #1C7F53', '--font-display:', 'prefers-reduced-motion', 'prefers-contrast', ':focus-visible', 'scroll-margin-top', 'max-width: 600px']) assert.ok(css.includes(token));
  assert.ok(!css.includes('transition: all'));
  assert.ok(!css.includes('@font-face'));
});

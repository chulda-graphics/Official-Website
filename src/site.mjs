import { portfolio } from './content.mjs';

export const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

export const projectTitle = (project) => project.title || 'Project title pending';
const arrow = '<span class="link-icon" aria-hidden="true">↗</span>';
const link = (href, label, className = 'text-link') => `<a class="${className}" href="${escapeHTML(href)}">${escapeHTML(label)}${arrow}</a>`;

export function mediaSlot({ label, caption, hero = false, showreel = false, poster = null }) {
  return `<figure class="media-frame ${hero ? 'media-frame--hero' : ''}">
    ${poster ? `<img src="${escapeHTML(poster)}" alt="${escapeHTML(label)}" width="1600" height="900" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'}>` : `
    <div class="media-empty">
      <span class="media-label">${escapeHTML(label)}</span>
      <div class="media-center"><span class="frame-symbol" aria-hidden="true"></span><span>${hero ? 'Your work, here.' : 'Artwork pending'}</span></div>
      <span class="media-status">${showreel ? 'Showreel not supplied' : 'Poster / video not supplied'}</span>
    </div>`}
    <figcaption>${escapeHTML(caption)}</figcaption>
  </figure>`;
}

export function projectCard(project, heading = 'h3') {
  return `<article class="project-card">
    ${mediaSlot({ label: 'Project media placeholder', caption: 'Reserved for an approved motion-design project.', poster: project.poster })}
    <div class="project-caption"><p class="status-label">${escapeHTML(project.status)}</p>
      <${heading}>${escapeHTML(projectTitle(project))}</${heading}>
      <p class="muted">Title, role and credits will be added with the finished work.</p>
      ${link(`/work/${project.slug}/`, 'Open project preview')}
    </div>
  </article>`;
}

const contact = () => `<section class="contact-section section" id="contact" aria-labelledby="contact-title">
  <p class="section-label">Contact</p>
  <div class="contact-grid"><h2 id="contact-title">Let’s talk.</h2><div><p class="contact-note">Contact details pending.</p><p class="muted">The confirmed email and social links will appear here.</p></div></div>
</section>`;

function page({ title, description, active = '', body }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#F6F4EF"><meta name="description" content="${escapeHTML(description)}">
<meta name="robots" content="noindex, nofollow"><title>${escapeHTML(title)}</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"></head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><a class="brand" href="/" aria-label="Dhrex home" translate="no">DHREX<span aria-hidden="true" class="brand-mark"></span></a>
<nav class="site-nav" aria-label="Main"><a href="/work/" ${active === 'work' ? 'aria-current="page"' : ''}>Work</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav></header>
<main id="main" tabindex="-1">${body}</main>
<footer class="site-footer"><span translate="no">DHREX</span><span class="muted">Portfolio prototype</span><a href="/work/">Work</a><a href="/#contact">Contact</a></footer></body></html>`;
}

export function renderHome(data = portfolio) {
  return page({ title: 'Dhrex — Motion design portfolio', description: 'Dhrex’s motion-design portfolio. Visual prototype with clearly labelled media placeholders.', body: `
  <section class="hero section" aria-labelledby="hero-title">
    <p class="hero-role">${escapeHTML(data.role)}</p>
    <div class="hero-heading"><h1 id="hero-title" translate="no">${escapeHTML(data.name)}</h1><p class="prototype-note">Visual prototype<br>Work assets pending</p></div>
    <div class="hero-grid"><div class="hero-intro"><p>Selected work<br> in motion.</p><div class="hero-actions">${link('/work/', 'View work', 'button button--primary')}${link('/#contact', 'Let’s talk', 'button button--quiet')}</div></div>
      ${mediaSlot({ label: 'Showreel placeholder', caption: 'A landscape frame for your showreel. No preview film supplied yet.', hero: true, showreel: true })}
    </div>
  </section>
  <section class="section selected-work" id="selected-work" aria-labelledby="selected-title">
    <div class="section-heading"><h2 id="selected-title">Selected work</h2>${link('/work/', 'All work')}</div>
    ${data.projects.map((project) => projectCard(project)).join('') || '<p class="muted">Project media and details pending.</p>'}
  </section>
  <section class="section about-section" id="about" aria-labelledby="about-title"><p class="section-label">About</p><div class="about-grid"><h2 id="about-title">Dhrex.<br>Motion designer.</h2><div><p class="large-copy">A place for the work,<br>and the thinking behind it.</p><p class="muted">Biography and project stories are still to come. This preview establishes the layout, not a finished portfolio.</p>${link('/work/', 'Browse work')}</div></div></section>
  ${contact()}` });
}

export function renderWork(data = portfolio) {
  return page({ title: 'Work — Dhrex', description: 'Work index prototype. Project content and media await the owner’s approved assets.', active: 'work', body: `
  <section class="section index-opening"><p class="section-label">Motion design</p><h1>Work</h1><p class="index-intro">Selected projects, with room for the story.</p><p class="muted">Layout preview. The project below is a clearly labelled placeholder.</p></section>
  <section class="section work-list" aria-label="Projects">${data.projects.map((project) => projectCard(project, 'h2')).join('') || '<p class="muted">Project media and details pending.</p>'}</section>
  ${contact()}` });
}

export function renderProject(project = portfolio.projects[0]) {
  return page({ title: `${projectTitle(project)} — Dhrex`, description: 'Placeholder project-page opening. No finished work, role, credits or results are represented.', body: `
    <section class="section project-opening"><a class="back-link" href="/work/">Back to work</a>
      <p class="status-label">${escapeHTML(project.status)}</p><h1>${escapeHTML(projectTitle(project))}</h1>
      <div class="project-opening-grid"><p class="project-summary">A dedicated space for the work and its story.</p><p class="muted">This is a layout preview, not a published case study. The final title, description and media will come from your supplied project.</p></div>
      <dl class="project-facts">${[['Role', project.role], ['Year', project.year], ['Credits', project.credits]].map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHTML(value || 'Not supplied')}</dd></div>`).join('')}</dl>
      ${mediaSlot({ label: 'Project media placeholder', caption: 'Opening frame. Artwork and accessible video description pending.', hero: true, poster: project.poster })}
    </section>
    <section class="section story-placeholder"><h2>The project story</h2><div><p class="large-copy">The work comes first.</p><p class="muted">Process, context and outcomes will be added once approved content is supplied. No client, production credits or results have been invented.</p>${link('/work/', 'Back to all work')}</div></section>
    ${contact()}` });
}

export function render404() {
  return page({ title: 'Page not found — Dhrex', description: 'Return to Dhrex’s portfolio or work index.', body: `<section class="section not-found"><p class="section-label">Page not found</p><h1>Let’s head back.</h1><p>The page you’re looking for isn’t here. You can return to the portfolio or browse work.</p><div class="recovery-links">${link('/', 'Home', 'button button--primary')}${link('/work/', 'Work', 'button button--quiet')}</div></section>` });
}

export function renderRoutes() {
  return new Map([
    ['index.html', renderHome()], ['work/index.html', renderWork()],
    ...portfolio.projects.map((project) => [`work/${project.slug}/index.html`, renderProject(project)]),
    ['404.html', render404()],
  ]);
}

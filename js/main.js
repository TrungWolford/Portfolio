/**
 * main.js — Portfolio interactions and rendering
 */

'use strict';

// =====================
// STICKY NAV
// =====================
const stickyNav = document.getElementById('sticky-nav');
const heroEl = document.getElementById('hero');

function handleScroll() {
  if (!heroEl || !stickyNav) return;
  const heroBottom = heroEl.getBoundingClientRect().bottom;
  if (heroBottom <= 0) {
    stickyNav.classList.add('visible');
  } else {
    stickyNav.classList.remove('visible');
  }
  updateActiveNavLink();
}

window.addEventListener('scroll', handleScroll, { passive: true });

// =====================
// ACTIVE NAV LINKS
// =====================
const navSections = ['projects', 'about', 'stack'];

function updateActiveNavLink() {
  const scrollY = window.scrollY + 120;
  let activeId = null;

  for (const id of navSections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= scrollY) activeId = id;
  }

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    if (activeId && link.getAttribute('href') === `#${activeId}`) {
      link.classList.add('active');
    }
  });
}

// =====================
// MOBILE NAV
// =====================
const mobileNav = document.getElementById('mobile-nav');

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
  const btn = document.getElementById('mobile-menu-btn');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
  const btn = document.getElementById('mobile-menu-btn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Close mobile nav on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileNav();
    closeContact();
  }
});

// =====================
// CONTACT PANEL
// =====================
const contactPanel = document.getElementById('contact-panel');
const contactOverlay = document.getElementById('contact-overlay');

function openContact() {
  if (!contactPanel || !contactOverlay) return;
  contactPanel.classList.add('open');
  contactOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContact() {
  if (!contactPanel || !contactOverlay) return;
  contactPanel.classList.remove('open');
  contactOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// =====================
// RENDER FEATURED WORK
// =====================
function renderFeaturedProjects() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  if (typeof featuredProjects === 'undefined') return;

  grid.innerHTML = featuredProjects.map((p) => {
    const isPlaceholder = p.isPlaceholder;
    const cardLink = p.url ? p.url : (p.github ? p.github : '#projects');
    const target = p.url ? '' : (p.github ? 'target="_blank" rel="noopener"' : '');

    return `
      <a href="${cardLink}" ${target} class="featured-card" aria-label="View ${p.name}" style="${isPlaceholder ? 'opacity: 0.5; pointer-events: none;' : ''}">
        <div class="featured-card-image">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name} screenshot" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'featured-card-image-placeholder\\' style=\\'background:${p.cardBg}\\'>${p.emoji}</div>'">`
            : `<div class="featured-card-image-placeholder" style="background:${p.cardBg};">${p.emoji}</div>`
          }
        </div>
        <div class="featured-card-body" style="background:${p.cardBg}; color:${p.textColor};">
          ${p.name}
          <div class="featured-card-tagline" style="color:${p.textColor};">${p.tagline}</div>
        </div>
      </a>
    `;
  }).join('');
}

// =====================
// RENDER ALL PROJECTS
// =====================
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  if (typeof allProjects === 'undefined') return;

  grid.innerHTML = allProjects.map((p, i) => {
    const githubBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link-btn" aria-label="View ${p.name} on GitHub" onclick="event.stopPropagation()">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>`
      : '';

    const isExternalDemo = p.demo && p.demo.startsWith('http');
    const demoLabel = p.demo && p.demo.endsWith('.html') ? 'Read Case Study' : 'Live Demo';
    const demoBtn = p.demo
      ? `<a href="${p.demo}" ${isExternalDemo ? 'target="_blank" rel="noopener"' : ''} class="project-link-btn" aria-label="View demo of ${p.name}" onclick="event.stopPropagation()">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          ${demoLabel}
        </a>`
      : '';

    const tags = (p.technologies || []).slice(0, 4).map(t =>
      `<span class="project-tag">${t}</span>`
    ).join('');

    const cardHref = p.url || p.demo || p.github || '#';
    const isExternalCard = cardHref.startsWith('http');
    const target = isExternalCard ? 'target="_blank" rel="noopener"' : '';

    return `
      <a href="${cardHref}" ${target} class="project-card" id="project-${p.id}" aria-label="${p.name} — ${p.tagline}">
        <div class="project-icon-placeholder" style="background:${p.iconBg};">${p.emoji}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-tagline">${p.tagline}</div>
        ${tags ? `<div class="project-tags">${tags}</div>` : ''}
        ${(githubBtn || demoBtn) ? `<div class="project-links">${githubBtn}${demoBtn}</div>` : ''}
      </a>
    `;
  }).join('');
}

// =====================
// RENDER TECH STACK
// =====================
function renderStack() {
  const grid = document.getElementById('stack-grid');
  if (!grid) return;
  if (typeof techStack === 'undefined') return;

  grid.innerHTML = techStack.map((group, i) => `
    <div class="stack-group">
      <div class="stack-group-label">${group.label}</div>
      <div class="stack-items">
        ${group.items.map(item => `
          <div class="stack-item">
            <span class="stack-item-emoji" aria-hidden="true">${item.emoji}</span>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// =====================
// INTERSECTION OBSERVER (reveal)
// =====================
let revealObserver = null;

function setupReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: '0px 0px 80px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top >= window.innerHeight) {
      // Element is below viewport — animate on entry
      el.classList.add('will-animate');
      revealObserver.observe(el);
    }
    // Elements already in/above viewport remain fully visible
  });
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProjects();
  renderProjects();
  renderStack();

  // Setup reveal after rendering — use requestAnimationFrame for proper timing
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setupReveal();
    });
  });

  handleScroll();
});

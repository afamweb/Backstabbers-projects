'use strict';
// Shared site interaction. No framework or server is required.
const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });
  document.addEventListener('click', e => { if (!nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-category]');
const resultCount = document.querySelector('[data-result-count]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  projectCards.forEach(card => {
    const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.hidden = !show;
    if (show) count++;
  });
  if (resultCount) resultCount.textContent = `${count} PROJECT${count === 1 ? '' : 'S'} SHOWN`;
}));
// Email composition is used rather than claiming an unconfigured website backend sent a message.
const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const type = String(data.get('type') || 'Project enquiry').trim();
    const message = String(data.get('message') || '').trim();
    const subject = `[Backstabbers] ${type} — ${name}`;
    const body = `Hello Backstabbers,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}\nProject type: ${type}`;
    const recipient = form.dataset.recipient || 'afamefuneaustine@gmail.com';
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'Your email app should open with a drafted message. Please press Send there to finish.';
    window.location.href = mailto;
  });
}
document.querySelectorAll('[data-copy-email]').forEach(button => button.addEventListener('click', async () => {
  const email = button.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    const old = button.textContent;
    button.textContent = 'Email copied!';
    window.setTimeout(() => { button.textContent = old; }, 2200);
  } catch (_) {
    window.prompt('Copy the email address:', email);
  }
}));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { rootMargin: '0px 0px -35px 0px', threshold: .05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

// Back to top appears after scrolling, with smooth motion when permitted.
const toTop = document.querySelector('[data-to-top]');
if (toTop) {
  const updateTopButton = () => { toTop.classList.toggle('visible', window.scrollY > 500); };
  updateTopButton();
  window.addEventListener('scroll', updateTopButton, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
}

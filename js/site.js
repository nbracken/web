// Improved site JS: mobile nav toggle, keyboard handling, smooth internal scrolling
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      nav.style.display = open ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', !open);
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Close nav on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (nav && nav.getAttribute('data-open') === 'true') {
        nav.setAttribute('data-open', 'false');
        nav.style.display = 'none';
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

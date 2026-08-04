const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.links');

if (nav && toggle && panel) {
  const closeMenu = () => {
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Atvērt izvēlni');
  };

  toggle.setAttribute('aria-label', 'Atvērt izvēlni');

  toggle.addEventListener('click', () => {
    const willOpen = !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Aizvērt izvēlni' : 'Atvērt izvēlni');
  });

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

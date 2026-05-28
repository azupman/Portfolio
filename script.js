// Menu mobile
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Animation reveal au scroll
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    obs.observe(el);
  });
});

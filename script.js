// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== ACTIVE NAV LINK =====
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===== TYPEWRITER =====
const phrases = [
  'IoT Engineer 📡',
  'Embedded Developer 🔲',
  'Electronics Enthusiast ⚡',
  'ARM Cortex Programmer 🔧',
  'SAEE President 👑'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typeEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ===== CONTACT FORM =====
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.getElementById('send-btn');
  btn.innerHTML = '<span>Message Sent! ✅</span>';
  btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<span>Send Message</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    btn.style.background = '';
    btn.disabled = false;
    this.reset();
  }, 3000);
});

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

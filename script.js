const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
const progressBar = document.querySelector('.scroll-progress');
const counters = document.querySelectorAll('.counter');
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const backToTop = document.getElementById('back-to-top');
const canvas = document.getElementById('particle-canvas');
const slides = document.querySelectorAll('.project-slide');
const dots = document.querySelectorAll('.dot');
let activeSlide = 0;

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;
  if (toggle) {
    toggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
}

function updateScrollProgress() {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.transform = `scaleX(${progress / 100})`;
}

function animateCounters() {
  counters.forEach((counter) => {
    const count = Number(counter.dataset.count || 0);
    const suffix = count === 100 ? '%' : '+';
    let current = 0;
    const step = Math.max(1, Math.ceil(count / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= count) {
        counter.textContent = `${count}${suffix}`;
        clearInterval(timer);
      } else {
        counter.textContent = `${current}${suffix}`;
      }
    }, 40);
  });
}

function toggleBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle('show', window.scrollY > 400);
}

function initParticles() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  }));

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener('resize', resize);
}

if (toggle) {
  toggle.addEventListener('click', toggleTheme);
}

window.addEventListener('scroll', () => {
  updateScrollProgress();
  toggleBackToTop();
});
window.addEventListener('load', () => {
  updateScrollProgress();
  animateCounters();
  toggleBackToTop();
  initParticles();
});

if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

if (slides.length && dots.length) {
  const showSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
    activeSlide = index;
  };

  setInterval(() => {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide(activeSlide);
  }, 5000);

  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.index)));
  });

  showSlide(0);
}

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Message queued — thanks for reaching out!';
    form.reset();
  });
}

applyTheme(initialTheme);

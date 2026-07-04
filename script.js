const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

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

if (toggle) {
  toggle.addEventListener('click', toggleTheme);
}

applyTheme(initialTheme);

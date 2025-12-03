// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme on page load
document.documentElement.classList.toggle('dark', savedTheme === 'dark');

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  
  // Update icon in both buttons
  const icon = document.querySelector('.material-symbols-outlined', themeToggle.parentNode);
  icon.textContent = isDark ? 'dark_mode' : 'light_mode';
  
  const iconMobile = document.querySelector('.material-symbols-outlined', themeToggleMobile.parentNode);
  iconMobile.textContent = isDark ? 'dark_mode' : 'light_mode';
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const icon = mobileMenuButton.querySelector('.material-symbols-outlined');
  icon.textContent = mobileMenu.classList.contains('active') ? 'close' : 'menu';
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const icon = mobileMenuButton.querySelector('.material-symbols-outlined');
    icon.textContent = 'menu';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  });
});
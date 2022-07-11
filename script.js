const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const theme = {
  DARK: 'dark',
  LIGHT: 'light'
};

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_personal_training_0dqn_${color}.svg`;
  image2.src = `img/undraw_mindfulness_scgo_${color}.svg`;
  image3.src = `img/undraw_healthy_lifestyle_6tyl_${color}.svg`;
}

// Toggle Dark And Light Mode
function toggleDarkLightMode(newTheme) {
  const isDark = newTheme === theme.DARK;
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 2555  / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  isDark ? imageMode(theme.DARK) : imageMode(theme.LIGHT);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', theme.DARK);
    localStorage.setItem('theme', theme.DARK);
    toggleDarkLightMode(theme.DARK);
  } else {
    document.documentElement.setAttribute('data-theme', theme.LIGHT);
    localStorage.setItem('theme', theme.LIGHT);
    toggleDarkLightMode(theme.LIGHT);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === theme.DARK) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(theme.DARK);
  }
}
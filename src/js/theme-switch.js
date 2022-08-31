const themeSwitchBtn = document.querySelector('[data-js="theme-switch-btn"]')
const moon = document.querySelector('[data-js="moon"]')
const sun = document.querySelector('[data-js="sun"]')
const body = document.querySelector('body')

const switchTheme = () => {
  body.classList.toggle('light_mode')
  moon.classList.toggle('_moon')
  sun.classList.toggle('_sun')
}

themeSwitchBtn.addEventListener('click', switchTheme, false)
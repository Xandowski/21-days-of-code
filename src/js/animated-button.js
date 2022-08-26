const themeSwitchBtn = document.querySelector('[data-js="switch-theme-btn"]')
const card = document.querySelector('[data-js="card-03"]')
const challengeId = document.querySelector('[data-js="challenge-id"]')
const circle = document.querySelector('[data-js="circle"]')

const switchTheme = () => {
  themeSwitchBtn.classList.toggle('_switch-theme-btn')
  card.classList.toggle('_card')
  challengeId.classList.toggle('_challenge-id')
  circle.classList.toggle('_circle')
}

themeSwitchBtn.addEventListener('click', switchTheme, false)
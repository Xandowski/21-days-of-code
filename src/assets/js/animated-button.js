const animateBtn = document.querySelector('[data-js="animate-btn"]')
const circle = document.querySelector('[data-js="circle"]')

const animate = () => {
  animateBtn.classList.toggle('_animate')

  if (circle.classList.contains('_circle-right')) {
    circle.classList.toggle('_circle')
    circle.classList.remove('_circle-right')
  } else if (circle.classList.contains('_circle')) {
    circle.classList.toggle('_circle-right')
    circle.classList.remove('_circle')
  } else {
    circle.classList.toggle('_circle')
  }
}

animateBtn.addEventListener('click', animate, false)
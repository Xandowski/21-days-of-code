const timer = document.querySelector('[data-js="timer"]')
const startBtn = document.querySelector('[data-js="start"]')
const resetBtn = document.querySelector('[data-js="reset"]')
let interval
let isStarted = false

startBtn.addEventListener('click', showTimer, false)
resetBtn.addEventListener('click', resetTimer, false)

function showTimer() {
  if (!timer.classList.contains('_timer')) {
    timer.classList.toggle('_timer')
  }
  return isStarted ? stopTimer() : startTimer()
}

function startTimer() {
  isStarted = !isStarted
  startCounting()
}

function startCounting() {
  timer.value = +timer.value + 1
  interval = setTimeout(startCounting, 1000)
}

function stopTimer() {
  isStarted = !isStarted
  clearTimeout(interval)
}

function resetTimer() {
  timer.value = 0;
  stopTimer();
}

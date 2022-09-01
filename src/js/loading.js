const loadingBtn = document.querySelector('[data-js="loading-btn"]')
const loadingDescription = document.querySelector('[data-js="loading-description"]')
const loadingContainer = document.querySelector('[data-js="loading-container"]')
let interval2

function loading() {
  if (!loadingDescription.classList.contains('_loading-info')) {
    loadingDescription.classList.toggle('_loading-info')
    loadingContainer.classList.toggle('_loading-container')
    interval2 = setTimeout(loading, 1500)
  } else {
    loadingDescription.classList.toggle('_loading-info')
    loadingContainer.classList.toggle('_loading-container')
    clearTimeout(interval2)
  }
}

loadingBtn.addEventListener('click', loading, false)
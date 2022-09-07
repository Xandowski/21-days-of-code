const modalForm = document.querySelector('[data-js="modal-form"]')
const openModalBtn = document.querySelector('[data-js="open-modal-btn"]')
const bodyModal = document.querySelector('[data-js="body-modal"]')
const wrapper = document.querySelector('[data-js="wrapper"]')
const closeBtn = document.querySelector('[data-js="close-modal"]')

openModalBtn.addEventListener('click', openModalForm, false)
window.addEventListener('click', closeModalForm, false)

function openModalForm() {
  modalForm.classList.toggle('_modal')
  wrapper.classList.toggle('_body')
}

function closeModalForm(event) {
  if (event.target == bodyModal || event.target == closeBtn) {
    modalForm.classList.toggle('_modal')
    wrapper.classList.toggle('_body')
  }
}
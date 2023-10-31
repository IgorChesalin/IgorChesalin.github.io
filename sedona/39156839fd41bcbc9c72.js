const menuButton = document.querySelector('.mobile-nav__toggle')
const mobileNav = document.querySelector('.mobile-nav')
const closeButton = document.querySelector('.mobile-nav__closeBtn')

menuButton.onclick = function () {
  mobileNav.classList.toggle('mobile-nav--hide')
}

closeButton.onclick = function () {
  mobileNav.classList.toggle('mobile-nav--hide')
}

// form js

const form = document.querySelector('.form')
const submitButton = document.querySelector('.form__button')
const nameInput = document.querySelector('.input-text__input--name')
const secondnameInput = document.querySelector('.input-text__input--secondname')
const phoneInput = document.querySelector('.input-text-icon__input--phone')
const mailInput = document.querySelector('.input-text-icon__input--mail')
const popupSuccess = document.querySelector('.popup-success')
const popupSuccessCloseButton = document.querySelector('.popup-success__button')
const popupFail = document.querySelector('.popup-fail')
const popupFailCloseButton = document.querySelector('.popup-fail__button')

submitButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (nameInput.value && secondnameInput.value && phoneInput.value && mailInput.value) {
    popupSuccess.classList.add('modal-show')
  } else {
    popupFail.classList.add('modal-show')
  }
})

popupSuccessCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  popupSuccess.classList.remove('modal-show')
})

popupFailCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  popupFail.classList.remove('modal-show')
})

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (popupSuccess.classList.contains('modal-show') || popupFail.classList.contains('modal-show')) {
      evt.preventDefault()
      popupSuccess.classList.remove('modal-show')
      popupFail.classList.remove('modal-show')
    }
  }
})

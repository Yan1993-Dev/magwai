const popup = document.querySelector('.popup')
const btnPopup = document.querySelector('.banner__btn-js')
const closePopup = document.querySelector('.form__close')

btnPopup.addEventListener('click', () => {
    popup.classList.add('open__popup')
})

closePopup.addEventListener('click', () => {
    popup.classList.remove('open__popup')
})
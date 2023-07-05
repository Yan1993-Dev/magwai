const popup = document.querySelector('.popup')
const btnPopup = document.querySelectorAll('.banner__btn-js')
const closePopup = document.querySelector('.form__close')


for (var i=0 ; i<btnPopup.length; i++) {
    btnPopup[i].addEventListener('click', () => {
        popup.classList.add('open__popup')
    })
}


closePopup.addEventListener('click', () => {
    popup.classList.remove('open__popup')
})
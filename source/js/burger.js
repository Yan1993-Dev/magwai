const burger = document.querySelector('.burger')
const btn = document.querySelector('.header__list-btn--mobile')


btn.addEventListener('click', () => {
    console.log('click')
    burger.classList.toggle('open')
})
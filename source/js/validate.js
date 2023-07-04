// (function() {
//     const signInForm = document.forms.popup;
//     const emailInput = signInForm.elements.email;
//     signInForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let isEmailValid = emailInput.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
//         let statusSubmitMessage = document.createElement('div');
//         if ( isEmailValid ) {
//             statusSubmitMessage.style.color = 'green';
//             statusSubmitMessage.innerText = 'Всё отлично!';
//             signInForm.insertAdjacentElement('beforeend', statusSubmitMessage);
//         } else {
//             statusSubmitMessage.style.color = 'red'; // Задаем стиль текста красный.
//             statusSubmitMessage.innerText = 'Ошибка валидации!';
//             signInForm.insertAdjacentElement('beforeend', statusSubmitMessage);
//         }
//     })
// })();
const isEmailValid = (email) => {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}
(function() {
    const popup = document.forms.popup; // получаем нашу форму.

    // Как можно заметить между получением формы и слушателем отстуствует получение инпутов. Правильно, ведь мы работаем с ними только в событии и поэтому они должны объявлятся там.

    popup.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = popup.elements.email;
        let errors = {};
        if(!isEmailValid(email.value)) {
            errors.email = 'Ваша электронная почта не прошла валидацию.';
        }
        if(Object.keys(errors).length) {
            alert('Укажите корректный email с @');
            console.log(errors);
            return;
        }

        // собираем объект с нашими данными для отправки на сервер.
        const data = {
            email: email.value,
        }
        console.log(data);
        alert('Валидация прошла удачно!');
    })
})();
const isEmailValid = (email) => {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}
(function() {
    const popup = document.forms.popup;
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
        const data = {
            email: email.value,
        }
        console.log(data);
        alert('Валидация прошла удачно!');
    })
})();
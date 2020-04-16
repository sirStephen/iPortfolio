let form = document.querySelector('.form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let nameError = document.querySelector('#name-error-message');
let emailError = document.querySelector('#email-error-message');
let messageError = document.querySelector('#message-error-message');
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var re = 
//     return re.test(String(email).toLowerCase());

const validation = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (name.value === '' || name.value === null) {
            nameError.textContent = 'Please fill name field';
            nameError.style.color = 'red';
            nameError.style.fontSize = '1.2rem';
        } else {
            nameError.textContent = '';
        }

        if (email.value === '' || email.value === null) {
            emailError.textContent = 'Invalid email';
            emailError.style.color = 'red';
            emailError.style.fontSize = '1.2rem';
        } else {
            emailError.textContent = '';
        }

        // if (emailPattern.test(String(email).toLocaleLowerCase())) {
        //     emailError.textContent = '';
        // } else {
        //     emailError.textContent = 'Invalid email';
        //     emailError.style.color = 'red';
        //     emailError.style.fontSize = '1.2rem';
        // }

        if (message.value === '' || message.value === null) {
            messageError.textContent = 'Please fill in a message';
            messageError.style.color = 'red';
            messageError.style.fontSize = '1.2rem';
        } else {
            messageError.textContent = '';
        }

        
    })
}

validation();


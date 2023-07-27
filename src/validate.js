
const form = document.getElementById('form');
let email = document.getElementById('email');
let name = document.getElementById('name');

function checkForm (event) {
    event.preventDefault();
    if (email.value === ''){
        email.classList.add('eror')
    } else {
        email.classList.remove('eror')
    }
    if (name.value === ''){
        name.classList.add('eror')
    } else {
        name.classList.remove('eror')
    }
    
}
form.addEventListener('submit', checkForm)
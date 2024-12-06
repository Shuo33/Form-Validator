const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show input error message 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(String(email).toLowerCase());
}


// Event Listeners for username
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});

// Event Listeners for email
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (email.value === '') {
        showError(email, 'email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email is not valid')
    } else {
        showSuccess(email);
    }
});

// Event Listeners for password
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
});

// Event Listeners for password2
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (password2.value === '') {
        showError(password2, 'Please confirm the password');
    } else {
        showSuccess(password2);
    }
});


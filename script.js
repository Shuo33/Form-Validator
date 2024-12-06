const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm password');


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
function checkEmail(input) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
    
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFiledName(input)} should be at least ${min} characters`); 
    } else if (input.value.length > max) {
        showError(input, `${getFiledName(input)} should be less than ${max} characters`);
    } else {
        showSuccess(input);
    } 
}


// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFiledName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// get filed name with the first letter capitalized
function getFiledName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners 
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25); 
    checkEmail(email);
    checkPasswordMatch(password, password2);
});



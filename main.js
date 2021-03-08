//Getting all inputs and button and saving them to variable
const form = document.querySelector('form');
const username = document.getElementById("username");
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener("submit", e => {
    e.preventDefault();

    checkingInputFields();
})


function checkingInputFields () {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
    // Checking input value
    if(usernameValue === "") {
        setErrorFor( username,'Please Put Value');
    } else {
        setSuccess(username);
        
    }
    if(emailValue === "") {
        setErrorFor(email,'Please Put Value');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email ,'email is not valid')
    } else {
        setSuccess(email);          
    }
    if(passwordValue === "") {
        setErrorFor( password,'Please Put Value');
    } else {
        setSuccess(password);          
    }
    if(password2Value === "") {
        setErrorFor( password2,'Please Put Value');
    } else if(password2Value !== passwordValue) {
        setErrorFor( password2,'password does not match');
    } else {
        setSuccess(password2);          
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
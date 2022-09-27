window.onload = function(){
//Var
var firstName = document.getElementById("First-name");
var firstNameInput =document.getElementById('firstNameInput')
var email = document.getElementById("Email");
var adress = document.getElementById("Adress");
var password = document.getElementById("Password");
var lastName = document.getElementById("Last-name");
var phoneNumber = document.getElementById("Phone-number");
var country = document.getElementById("Country");
var repeatPassword = document.getElementById("Repeat-password");
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
p = document.createElement('p');
var emailvalidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var letters = 'abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
var validLetters = false;
var numbers = "0123456789";
var validNumber = false;
var lastNameInput = document.getElementById('lastNameInput')
var phoneNumberInput = document.getElementById('phoneNumberInput')
var countryInput = document.getElementById('countryInput')
var repeatPasswordInput = document.getElementById('repeatPasswordInput')
var button2 = document.getElementById('button2');

//firstName

firstName.onblur = function() {
    for(i=0; i<firstName.value.length; i++){
        if (letters.indexOf(firstName.value.charAt(i),0)!=-1){
            validLetters = true;
        }
    }
if (firstName.value === '') {
    firstName.classList.add('Red-border');
    p.innerHTML = 'First name is required';
    firstNameInput.appendChild(p);
} else if (firstName.value.length < 3  || validLetters != true || firstName.value.Number() ) {
    firstName.classList.add('Red-border');
    p.innerHTML = 'First name must have 3 characters at least';
    firstNameInput.appendChild(p);
} else {
    firstName.classList.add('Green-border');
}
firstName.onfocus = function () {
    firstName.classList.remove('border-red');
    firstNameInput.removeChild(p);
}
}

//Email

email.onblur = function() {
    if (email.value === '') {
        email.classList.add('Red-border');
        p.innerHTML = 'Email is required';
        emailInput.appendChild(p);
    } else if (!emailvalidation.test(email.value)) {
        email.classList.add('Red-border');
        p.innerHTML = 'Invalid email';
        emailInput.appendChild(p);
    } else {
        email.classList.add('Green-border');
    }
}
email.onfocus = function () {
    email.classList.remove('Red-border');
    emailInput.removeChild(p);
}

//adress
adress.onblur = function() {
    for(i=0; i<adress.value.length; i++){
        if (letters.indexOf(firstName.value.charAt(i),0)!=-1){
            validLetters = true;
        }
    }
if (adress.value === '') {
    adress.classList.add('Red-border');
    p.innerHTML = 'Adress is required';
    adressInput.appendChild(p);
} else if (adress.value.length < 3  || validLetters != true () ) {
    adress.classList.add('Red-border');
    p.innerHTML = 'Adress name must have 3 characters at least';
    adressInput.appendChild(p);
} else {
    adress.classList.add('Green-border');
}
adress.onfocus = function () {
    adress.classList.remove('border-red');
    adressInput.removeChild(p);
}
}

//password

password.onblur = function() {
    var numbers = "0123456789";
    var validNumber = false;
    for(i=0; i<password.value.length; i++){
        if (numbers.indexOf(password.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }
        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validLetters = false;
        for(i=0; i<password.value.length; i++){
            if (letters.indexOf(password.value.charAt(i),0)!=-1){
                validLetters = true;
            }
        }
    if (password.value === '') {
        password.classList.add('Red-border');
        p.innerHTML = 'Password is required';
        passwordInput.appendChild(p);
    } else if (password.value.length < 8 || validNumber != true || validLetters != true) {
        password.classList.add('Red-border');
        p.innerHTML = 'Password must have 8 characters & numbers';
        passwordInput.appendChild(p);
    } else {
        password.classList.add('Green-border');
    }
    }
password.onfocus = function () {
password.classList.remove('border-red');
passwordInput.removeChild(p);
}

// lastname

lastName.onblur = function() {
    for(i=0; i<lastName.value.length; i++){
        if (letters.indexOf(lastName.value.charAt(i),0)!=-1){
            validLetters = true;
        }
    }
if (lastName.value === '') {
    lastName.classList.add('Red-border');
    p.innerHTML = 'First name is required';
    lastNameInput.appendChild(p);
} else if (lastName.value.length < 3  || validLetters != true  ) {
    lastName.classList.add('Red-border');
    p.innerHTML = 'First name must have 3 characters at least';
    lastNameInput.appendChild(p);
} else {
    lastName.classList.add('Green-border');
}
lastName.onfocus = function () {
    lastName.classList.remove('border-red');
    lastNameInput.removeChild(p);
}
}

// phone-number

phoneNumber.onblur = function() {
    var numbers = "0123456789";
    var validNumber = false;
    for(i=0; i<phoneNumber.value.length; i++){
        if (numbers.indexOf(phoneNumber.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }
    if (phoneNumber.value === '') {
        phoneNumber.classList.add('Red-border');
        p.innerHTML = 'Phone Number is required';
        phoneNumberInput.appendChild(p);
    } else if (phoneNumber.value.length < 10 || validNumber != true ) {
        phoneNumber.classList.add('Red-border');
        p.innerHTML = 'Phone Number must have 10 numbers';
        phoneNumberInput.appendChild(p);
    } else {
        phoneNumber.classList.add('Green-border');
    }
    }
phoneNumber.onfocus = function () {
    phoneNumber.classList.remove('border-red');
    phoneNumberInput.removeChild(p);
    }

// country 

country.onblur = function() {
    for(i=0; i<country.value.length; i++){
        if (letters.indexOf(country.value.charAt(i),0)!=-1){
            validLetters = true;
        }
    }
if (country.value === '') {
    country.classList.add('Red-border');
    p.innerHTML = 'Country is required';
    countryInput.appendChild(p);
} else if (country.value.length < 3  || validLetters != true ) {
    country.classList.add('Red-border');
    p.innerHTML = 'Country must have 3 characters at least';
    countryInput.appendChild(p);
} else {
    country.classList.add('Green-border');
}
country.onfocus = function () {
    country.classList.remove('border-red');
    countryInput.removeChild(p);
}
}

//Repeat password

repeatPassword.onblur = function() {
    for(i=0; i<repeatPassword.value.length; i++){
        if (numbers.indexOf(repeatPassword.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }
        for(i=0; i<repeatPassword.value.length; i++){
            if (letters.indexOf(repeatPassword.value.charAt(i),0)!=-1){
                validLetters = true;
            }
        }
    if (repeatPassword.value === '') {
        repeatPassword.classList.add('Red-border');
        p.innerHTML = 'Password is required';
        repeatPasswordInput.appendChild(p);
    } else if (repeatPassword.value.length < 8 || validNumber != true || validLetters != true) {
        repeatPassword.classList.add('Red-border');
        p.innerHTML = 'Password must have 8 characters & numbers';
        repeatPasswordInput.appendChild(p);
    } else {
        repeatPassword.classList.add('Green-border');
    }
    }
    repeatPassword.onfocus = function () {
    repeatPassword.classList.remove('border-red');
    repeatPasswordInput.removeChild(p);
}
//button
button2.onclick = function() {
    if (firstName.classList.contains('Green-border') && email.classList.contains('Green-border') && adress.classList.contains('Green-border') 
    && password.classList.contains('Green-border') && lastName.classList.contains('Green-border') && phoneNumber.classList.contains('Green-border') 
    && country.classList.contains('Green-border') && passwordInput.classList.contains('Green-border')){
        alert('Successful Register');
    } else {
        alert('Register Error')
    }
}

}
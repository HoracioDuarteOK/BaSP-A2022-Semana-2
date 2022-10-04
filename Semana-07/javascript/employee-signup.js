window.onload = function(){
//Var
var firstName = document.getElementById("First-name");
var firstNameInput =document.getElementById('firstNameInput')
var email = document.getElementById("Email");
var adress = document.getElementById("Adress");
var password = document.getElementById("Password");
var dni = document.getElementById("DNI");
var lastName = document.getElementById("Last-name");
var phoneNumber = document.getElementById("Phone-number");
var country = document.getElementById("Country");
var dob = document.getElementById("datebirthday");
var dobInput = document.getElementById("dobInput")
var repeatPassword = document.getElementById("Repeat-password");
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var emailvalidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var letters = 'abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
var validLetters = false;
var numbers = "0123456789";
var validNumber = false;
var lastNameInput = document.getElementById('lastNameInput')
var phoneNumberInput = document.getElementById('phoneNumberInput')
var countryInput = document.getElementById('countryInput')
var repeatPasswordInput = document.getElementById('repeatPasswordInput')
var dniInput = document.getElementById('dniInput')
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
    firstNameInput.innerHTML = 'First name is required';
} else if (firstName.value.length < 3  || validLetters != true || firstName.value == numbers ) {
    firstName.classList.add('Red-border');
    firstNameInput.innerHTML = 'First name must have 3 characters at least';
} else {
    firstName.classList.add('Green-border');
    p.innerHTML = ' ';
    
}
firstName.onfocus = function () {
    firstName.classList.remove('Red-border');
}
}

//Email

email.onblur = function() {
    if (email.value === '') {
        email.classList.add('Red-border');
        emailInput.innerHTML = 'Email is required';
    } else if (!emailvalidation.test(email.value)) {
        email.classList.add('Red-border');
        emailInput.innerHTML = 'Invalid email';
    } else {
        email.classList.add('Green-border');
        p.innerHTML = ' ';
    }
}
email.onfocus = function () {
email.classList.remove('Red-border');
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
    adressInput.innerHTML = 'Adress is required';
}else if (adress.value.length < 5  || validLetters != true ) {
    adress.classList.add('Red-border');
    adressInput.innerHTML = 'Adress name must have 3 characters at least';
} else {
    adress.classList.add('Green-border');
    p.innerHTML = ' '
}
adress.onfocus = function () {
    adress.classList.remove('Red-border');
}
}

// DNI

dni.onblur = function() {
    var numbers = "0123456789";
    var validNumber = false;
    for(i=0; i<dni.value.length; i++){
        if (numbers.indexOf(dni.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }
    if (dni.value === '') {
        dni.classList.add('Red-border');
        dniInput.innerHTML = 'DNI is required';
    } else if (dni.value.length < 8 || validNumber != true ) {
        dni.classList.add('Red-border');
        niInput.innerHTML = 'DNI must have 8 numbers';
    } else {
        dni.classList.add('Green-border');
        p.innerHTML = ' '
    }
    }
phoneNumber.onfocus = function () {
phoneNumber.classList.remove('Red-border');
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
        passwordInput.innerHTML = 'Password is required';
    } else if (password.value.length < 8 || validNumber != true || validLetters != true) {
        password.classList.add('Red-border');
        passwordInput.innerHTML = 'Password must have 8 characters & numbers';
    } else {
        password.classList.add('Green-border');
        p.innerHTML = ' '
    }
    }
password.onfocus = function () {
password.classList.remove('Red-border');

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
    lastNameInput.innerHTML  = 'First name is required';
} else if (lastName.value.length < 3  || validLetters != true  ) {
    lastName.classList.add('Red-border');
    lastNameInput.innerHTML = 'First name must have 3 characters at least';
} else {
    lastName.classList.add('Green-border');
    lastNameInput.innerHTML = ''
}
lastName.onfocus = function () {
    lastName.classList.remove('border-red');
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
        phoneNumberInput.innerHTML = 'Phone Number is required';
    } else if (phoneNumber.value.length != 10 || validNumber != true ) {
        phoneNumber.classList.add('Red-border');
        phoneNumberInput.innerHTML = 'Phone Number must have 10 numbers';
    } else {
        phoneNumber.classList.add('Green-border');
        p.innerHTML = ' '
    }
    }
phoneNumber.onfocus = function () {
phoneNumber.classList.remove('Red-border');
}

// Location 

country.onblur = function() {
    for(i=0; i<country.value.length; i++){
        if (letters.indexOf(country.value.charAt(i),0)!=-1){
            validLetters = true;
        }
    }
if (country.value === '') {
    country.classList.add('Red-border');
    countryInput.innerHTML = 'Country is required';
} else if (country.value.length < 5  || validLetters != true ) {
    country.classList.add('Red-border');
    countryInput.innerHTML = 'Country must have 5 characters at least';
} else {
    country.classList.add('Green-border');
    countryInput.innerHTML = ' '
}
country.onfocus = function () {
    country.classList.remove('Red-border');
}
}
// Date of Birdhay
dob.onblur = function() {
    var numbers = "0123456789";
    var validNumber = false;
    for(i=0; i<dob.value.length; i++){
        if (numbers.indexOf(dob.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }
    if (dob.value === '') {
        dob.classList.add('Red-border');
        dobInput.innerHTML = 'Birthday is required';
    } else {
        dob.classList.add('Green-border');
        dobInput.innerHTML = ' '
    }
    }
dobInput.onfocus = function () {
dob.classList.remove('Red-border');
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
        repeatPasswordInput.innerHTML = 'Password is required';
    } else if (repeatPassword.value.length < 8 || validNumber != true || validLetters != true || repeatPassword.value != password.value) {
        repeatPassword.classList.add('Red-border');
        repeatPasswordInput.innerHTML = 'Password must have 8 characters & numbers';
    } else {
        repeatPassword.classList.add('Green-border');
        p.innerHTML = ' '
    }
    }
    repeatPassword.onfocus = function () {
    repeatPassword.classList.remove('Red-border');
    
}
//button
button2.onclick = function() {
    if (firstName.classList.contains('Green-border') && email.classList.contains('Green-border') && adress.classList.contains('Green-border') 
    && password.classList.contains('Green-border') && lastName.classList.contains('Green-border') && phoneNumber.classList.contains('Green-border') 
    && country.classList.contains('Green-border') && repeatPassword.classList.contains('Green-border')){
        alert('Successful Register');
    } else {
        alert('Register Error')
    }
}
// Week 7
var modalConteiner2 = document.getElementById("modalSus")
var modalTitle2 = document.getElementById("modalTitle")
var modalData = document.querySelector("modalContent > li")
var closeBtn2 = document.getElementById("closeBtn2")
//MODAL
function modalSuccessfull2(userInfo){
    var jsonToString = JSON.stringify(userInfo);
    modalConteiner2.style.display = "block"
    modalTitle2.innerHTML = "Successful Access" + "Username"+ userName.value + "Password" + password.value
    modalData.innerHTML = jsonToString;
    localStorage.setItem('firstname', firstName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('adress', adress.value );
    localStorage.setItem('dni', dni.value );
    localStorage.setItem('password', password.value );
    localStorage.setItem('lastname', lastName.value );
    localStorage.setItem('phonenumber', phoneNumber.value );
    localStorage.setItem('country', country.value );
    localStorage.setItem('repeatpassword', repeatPassword.value );
    localStorage.setItem('dob', dob.value );
}
function errorModal2(errorInfo){
    var jsonToString = JSON.stringify(errorInfo);
    modalConteiner2.style.display = "flex";
    modalTitle2.innerHTML = "Error Access"
    modalData.innerHTML =jsonToString; 
}
//FETCH
button2.addEventListener("click" , function (e) {
    modalConteiner2.style.display = 'flex'
    var basUrl2 ='https://basp-m2022-api-rest-server.herokuapp.com/signup?'+
    'name='+firstName.value
    +'&email='+email.value
    +'&address='+adress.value
    +'&dni='+dni.value
    +'&password='+password.value
    +'&lastName='+lastName.value
    +'&phone='+phoneNumber.value
    +'&city='+country.value
    +'&dob='+dob
    

    fetch(basUrl2)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                modalSuccessfull2(data)
        } else {
            var errormsg = data.errors[0].msg
            errorModal2(errormsg)
        }
    })
    .catch(function(error) {
        console.log(error)
    })
    e.preventDefault();
});
closeBtn2.addEventListener("click", function () {
    modalConteiner2.style.display = "none"
})
}
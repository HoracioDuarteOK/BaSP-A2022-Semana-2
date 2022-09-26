window.onload = function(){
//Var
var userName = document.getElementById("username");
var Password = document.getElementById("Password");
var emailvalidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
p = document.createElement('p');


//Email
userName.setAttribute("Value" , "Username");
userName.onblur = function() {
    if (userName.value === '') {
        userName.classList.add('Red-border');
        p.innerHTML = 'Email is required';
        emailInput.appendChild(p);
    } else if (!emailvalidation.test(userName.value)) {
        userName.classList.add('Red-border');
        p.innerHTML = 'Invalid email';
        emailInput.appendChild(p);
    } else {
        userName.classList.add('Green-border');
    }
}
userName.onfocus = function () {
    userName.classList.remove('Red-border');
    emailInput.removeChild(p);
}


// Password
/* PASSWORD VALIDATION */

Password.setAttribute("value", "Password");

Password.onblur = function() {
    var numbers = "0123456789";
    var validNumber = false;

    for(i=0; i<Password.value.length; i++){
        if (numbers.indexOf(Password.value.charAt(i),0)!=-1){
            validNumber = true;
        }
    }

        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validLetters = false;
        for(i=0; i<Password.value.length; i++){
            if (letters.indexOf(Password.value.charAt(i),0)!=-1){
                validLetters = true;
            }
        }

    if (Password.value === '') {
        Password.classList.add('Red-border');
        p.innerHTML = 'Password is required';
        passwordInput.appendChild(p);
    } else if (Password.value.length < 8 || validNumber != true || validLetters != true) {
        Password.classList.add('Red-border');
        p.innerHTML = 'Password must have 8 characters';
        passwordInput.appendChild(p);
    } else {
        Password.classList.add('Green-border');
    }
    }
Password.onfocus = function () {
Password.classList.remove('border-red');
passwordInput.removeChild(p);
}
}




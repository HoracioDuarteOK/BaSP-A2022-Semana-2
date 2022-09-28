window.onload = function(){
    
//Var
var userName = document.getElementById("username");
var password = document.getElementById("Password");
var emailvalidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
p = document.createElement('p');
var button = document.getElementById('button');


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


// password

password.setAttribute("value", "Password");

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
        p.innerHTML = 'Password must have 8 characters';
        passwordInput.appendChild(p);
    } else {
        password.classList.add('Green-border');
    }
    }
password.onfocus = function () {
password.classList.remove('border-red');
passwordInput.removeChild(p);
}

//button
button.onclick = function() {
    if (userName.classList.contains('Green-border') && password.classList.contains('Green-border')){
        alert('Successful Access');
    } else {
        alert('Login Error: wrong username or password')
    }
}
}




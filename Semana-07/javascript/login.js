window.onload = function(){
    
//Var
var userName = document.getElementById("username");
var password = document.getElementById("Password");
var emailvalidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
p = document.createElement('p');
var button = document.getElementById('button');
var usernameP = document.getElementById('usernameP');
var passwordP = document.getElementById('passwordP');

//Email
userName.setAttribute("Value" , "Username");
userName.onblur = function() {
    if (userName.value === '') {
        userName.classList.add('Red-border');
        usernameP.innerHTML = 'Email is required';
    } else if (!emailvalidation.test(userName.value)) {
        userName.classList.add('Red-border');
        usernameP.innerHTML = 'Invalid email';
    } else {
        userName.classList.add('Green-border');
        p.innerHTML = ' '
    }
}
userName.onfocus = function () {
    userName.classList.remove('Red-border');
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
        passwordP.innerHTML = 'Password is required';
    } else if (password.value.length < 8 || validNumber != true || validLetters != true) {
        password.classList.add('Red-border');
        passwordP.innerHTML = 'Password must have 8 characters';
    } else {
        password.classList.add('Green-border');
        p.innerHTML = ' '
    }
    }
password.onfocus = function () {
password.classList.remove('border-red');
}

//button
button.onclick = function() {
    if (userName.classList.contains('Green-border') && password.classList.contains('Green-border')){
        alert('Successful Access');
    } else {
        alert('Login Error: wrong username or password')
    }
}
// Week 7
var modalConteiner = document.getElementById("modalSus")
var modalTitle = document.getElementById("modalTitle")
var modalData = document.querySelector("modalContent > li")
var closeBtn = document.getElementById("closeBtn")
//MODAL
function modalSuccessfull(userInfo){
    var jsonToString = JSON.stringify(userInfo);
    modalConteiner.style.display = "block"
    modalTitle.innerHTML = "Successful Access" + "Username"+ userName.value + "Password" + password.value
    modalData.innerHTML = jsonToString;
    localStorage.setItem('userpassword', password.value);
    localStorage.setItem('username', userName.value );
}
function errorModal(errorInfo){
    var jsonToString = JSON.stringify(errorInfo);
    modalConteiner.style.display = "block";
    modalTitle.innerHTML = "Error Access"
    modalData.innerHTML =jsonToString; 
}
//FETCH
button.addEventListener("click" , function (e) {
    modalConteiner.style.display = 'block'
    var basUrl ='https://basp-m2022-api-rest-server.herokuapp.com/login?email='+userName.value+'&password='+password.value;
    fetch(basUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                modalSuccessfull(data)
        } else {
            var errormsg = data.errors[0].msg
            errorModal(errormsg)
        }
    })
    .catch(function(error) {
        console.log(error)
    })
    e.preventDefault();
});
closeBtn.addEventListener("click", function () {
    modalConteiner.style.display = "none"
})
}


// inputs
var username = document.getElementById("name");
var emailSignUp = document.getElementById("emailSignUp");
var passwordSignUp = document.getElementById("passwordSignUp");
var signUpButton=document.getElementById("signUp-btn");

// 
var signUpUsers = [];
if (localStorage.getItem("users") == null) {
  signUpUsers = [];
} else {
  signUpUsers = JSON.parse(localStorage.getItem("users"));
}

signUpButton.addEventListener('click',function(){
  signUp()
})

function signUp() {
  var signUpObject = {
    name: username.value,
    email: emailSignUp.value,
    password: passwordSignUp.value,
  };
  if (
    username.value == "" ||
    emailSignUp.value == "" ||
    passwordSignUp.value == ""
  ) {
    document.getElementById("failOrSuccessMsg").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  if (signUpUsers.length == 0) {
    signUpUsers.push(signUpObject);
    localStorage.setItem("users", JSON.stringify(signUpUsers));
    document.getElementById("failOrSuccessMsg").innerHTML =
      '<span class="text-success m-3">Success</span>';
    return true;
  }
  if (checkEmail() == false) {
    document.getElementById("failOrSuccessMsg").innerHTML =
      '<span class="text-danger m-3">email already exists</span>';
  } else {
    signUpUsers.push(signUpObject);
    localStorage.setItem("users", JSON.stringify(signUpUsers));
    document.getElementById("failOrSuccessMsg").innerHTML =
      '<span class="text-success m-3">Success</span>';
  }
}

function checkEmail() {
  for (var i = 0; i < signUpUsers.length; i++) {
    if (signUpUsers[i].email.toLowerCase() == emailSignUp.value.toLowerCase()) {
      return false;
    }
  }
}

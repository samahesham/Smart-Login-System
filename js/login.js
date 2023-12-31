var emailSignIn = document.getElementById("emailSignIn");
var passwordSignIn = document.getElementById("passwordSignIn");
var loginButton=document.getElementById("login-btn");

var signUpUsers = [];
if (localStorage.getItem("users") == null) {
  signUpUsers = [];
} else {
  signUpUsers = JSON.parse(localStorage.getItem("users"));
}

loginButton.addEventListener('click',function(){
  login()
})

function login() {
  if (emailSignIn.value == "" || passwordSignIn.value == "") {
    document.getElementById("errorMsg").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  var email = emailSignIn.value;
  var password = passwordSignIn.value;
  for (var i = 0; i < signUpUsers.length; i++) {
    if (
      signUpUsers[i].email.toLowerCase() == email.toLowerCase() &&
      signUpUsers[i].password.toLowerCase() == password.toLowerCase()
    ) {
      localStorage.setItem("sessionName", signUpUsers[i].name);
      window.location = "./home.html";
    } else {
      document.getElementById("errorMsg").innerHTML =
        '<span class="text-danger p-2">incorrect email or password</span>';
    }
  }
}

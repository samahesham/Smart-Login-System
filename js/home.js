var username = localStorage.getItem('sessionName')

if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

function logout() {
    localStorage.removeItem('sessionName')
    window.location = "./index.html";
}

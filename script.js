function login() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    // Implement login logic here
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Send a request to the server (you would use AJAX in a real application)
    // For simplicity, let's assume there's a login.php script
    window.location.href = "login.php?username=" + username + "&password=" + password;
}

function register() {
    var registerForm = document.getElementById("registerForm");
    var registerUsername = document.getElementById("registerUsername").value;
    var registerPassword = document.getElementById("registerPassword").value;

    // Send a request to the server (you would use AJAX in a real application)
    // For simplicity, let's assume there's a register.php script
    window.location.href = "register.php?username=" + registerUsername + "&password=" + registerPassword;
}

function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    // Show the login form
    loginForm.style.display = "block";
    // Hide the register form
    registerForm.style.display = "none";

    // Clear any previous messages
    document.getElementById("message").innerHTML = "";
}

function showRegisterForm() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    // Show the register form
    registerForm.style.display = "block";
    // Hide the login form
    loginForm.style.display = "none";

    // Clear any previous messages
    document.getElementById("message").innerHTML = "";
}
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Auto-advance slides every 3 seconds (adjust as needed)
setInterval(() => {
    changeSlide(1);
}, 3000);

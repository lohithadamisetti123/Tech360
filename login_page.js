// Get references to the main container and toggle buttons
const container = document.querySelector('.container');
const signupToggle = document.querySelector('.signup-toggle');
const signinToggle = document.querySelector('.signin-toggle');

// --- Toggle between Sign In and Sign Up forms ---
signupToggle.addEventListener('click', () => {
    container.classList.add('active');
});

signinToggle.addEventListener('click', () => {
    container.classList.remove('active');
});

// --- Reusable function to toggle password visibility ---
function setupPasswordToggle(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);

    toggleIcon.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon
        toggleIcon.classList.toggle('fa-eye-slash');
    });
}

// --- Setup password toggles for both forms ---
setupPasswordToggle('signin-password', 'toggle-signin-password');
setupPasswordToggle('signup-password', 'toggle-signup-password');

// --- Sign Up Handler ---
document.querySelector('.form-box-register .signup').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists!");
    } else {
        const user = { email, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Account created successfully! Please sign in.");
        container.classList.remove('active');
    }
});

// --- Sign In Handler ---
document.querySelector('.form-box-login .login').addEventListener('click', (e) => {
    e.preventDefault();
    const errorMessageElement = document.getElementById('signin-error');
    errorMessageElement.textContent = '';
    errorMessageElement.style.color = '#D8000C';

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    const userData = localStorage.getItem(username);

    if (!userData) {
        errorMessageElement.textContent = "Incorrect username or password.";
        return;
    }

    const user = JSON.parse(userData);

    if (user.password === password) {
        errorMessageElement.style.color = '#28a745';
        errorMessageElement.textContent = "Login successful! Redirecting...";
        setTimeout(() => { window.location.href = 'home.html'; }, 1500);
    } else {
        errorMessageElement.textContent = "Incorrect username or password.";
    }
});

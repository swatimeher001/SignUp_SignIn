document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const loginFormElement = document.getElementById('login-form-element');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const loginError = document.getElementById('login-error');

    const validUsers = [];

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value.trim();

        if (username === '' || email === '' || password === '') {
            document.getElementById('register-error').textContent = 'Please fill in all fields.';
            return;
        }

        validUsers.push({ username, password });
        alert('Registration successful! Redirecting to login.');
        document.getElementById('register-error').textContent = '';
        registrationForm.reset();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });

    loginFormElement.addEventListener('submit', function(event) {
        event.preventDefault();
        let loginUsername = document.getElementById('login-username').value.trim();
        let loginPassword = document.getElementById('login-password').value.trim();

        if (loginUsername === '' || loginPassword === '') {
            loginError.textContent = 'Please enter username and password.';
            loginError.style.color = 'red'; // Set text color to red
            return;
        }

        let user = validUsers.find(user => user.username === loginUsername && user.password === loginPassword);
        if (user) {
            // Redirect to welcome.html after successful login
            window.location.href = 'welcome.html';
        } else {
            loginError.textContent = 'Incorrect username or password.';
            loginError.style.color = 'red'; // Set text color to red
        }
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Forgot password feature is not implemented in this demo.');
    });
});

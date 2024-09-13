document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous error messages

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent += 'Please enter a valid email address.\n';
        event.preventDefault();
        return;
    }
// Password complexity validation
if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    errorMessage.textContent += 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.\n';
    event.preventDefault();
    return;
    }
});
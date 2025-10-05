document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Clear all previous error messages
    clearErrors();

    // Perform validation
    let isValid = validateForm();

    if (isValid) {
        alert('Registration successful!');
        this.submit(); 
    }
});

function validateForm() {
    let valid = true;

    // 1. Name Validation
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        showError('nameError', 'Name is required.');
        valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
        showError('nameError', 'Name must not contain numbers or special characters.');
        valid = false;
    }

    // 2. Email Validation
    const email = document.getElementById('email');
    if (!email.value.trim()) {
        showError('emailError', 'Email is required.');
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    }

    // 3. Contact Number Validation
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        showError('phoneError', 'Contact number is required.');
        valid = false;
    } else if (!/^\d{10}$/.test(phone.value)) {
        showError('phoneError', 'Contact number must be exactly 10 digits.');
        valid = false;
    }

    // 4. Gender Validation
    const gender = document.getElementById('gender');
    if (gender.value === "") {
        showError('genderError', 'Please select your gender.');
        valid = false;
    }

    // 5. Password Validation
    const password = document.getElementById('password');
    const passValue = password.value;
    if (!passValue) {
        showError('passwordError', 'Password is required.');
        valid = false;
    } else if (passValue.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        valid = false;
    } else if (!/[A-Z]/.test(passValue)) {
        showError('passwordError', 'Password must contain at least one uppercase letter.');
        valid = false;
    } else if (!/[a-z]/.test(passValue)) {
        showError('passwordError', 'Password must contain at least one lowercase letter.');
        valid = false;
    } else if (!/[0-9]/.test(passValue)) {
        showError('passwordError', 'Password must contain at least one number.');
        valid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passValue)) {
        showError('passwordError', 'Password must contain at least one special character.');
        valid = false;
    }

    // 6. Confirm Password Validation
    const cpassword = document.getElementById('cpassword');
    if (!cpassword.value.trim()) {
        showError('cpasswordError', 'Please confirm your password.');
        valid = false;
    } else if (cpassword.value !== password.value) {
        showError('cpasswordError', 'Passwords do not match.');
        valid = false;
    }

    return valid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(p => p.textContent = '');
}

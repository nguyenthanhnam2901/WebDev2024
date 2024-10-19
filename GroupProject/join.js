// Toggle forms visibility
function toggleForms(formToShow) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (formToShow === "register") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }
}

// Event handler for registration
function handleRegistration(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById('full-name').value.trim();
    const newUsernameInput = document.getElementById('new-username').value.trim();
    const newPasswordInput = document.getElementById('new-password').value;
    const newEmailInput = document.getElementById('new-email').value.trim();
    const newTelInput = document.getElementById('phone-number').value.trim();
    const newGenderInput = document.querySelector('input[name="gender"]:checked').value;

    if (fullNameInput && newUsernameInput && newPasswordInput && newGenderInput && newEmailInput && newTelInput) {
        const userInfo = {
            fullName: fullNameInput,
            username: newUsernameInput,
            password: newPasswordInput,
            gender: newGenderInput,
            email: newEmailInput,
            telephone: newTelInput
        };

        // Store user data in localStorage using username and email as keys
        localStorage.setItem(newUsernameInput, JSON.stringify(userInfo));
        localStorage.setItem(newEmailInput, JSON.stringify(userInfo));

        alert('Registration completed! Please log in.');
        toggleForms('login');
    } else {
        alert('Please fill out all fields.');
    }
}

// Event handler for login
function handleLogin(event) {
    event.preventDefault();

    const loginInput = document.getElementById('username').value.trim(); // Can be username or email
    const passwordInput = document.getElementById('password').value;

    // Check if the user exists with either username or email
    let userDetails = localStorage.getItem(loginInput);

    if (userDetails) {
        const parsedUserDetails = JSON.parse(userDetails);

        if (parsedUserDetails.password === passwordInput) {
            // Redirect to tasks page or any other post-login page
            window.location.href = 'index.html';
            alert('login successful');
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('No user found with the provided username or email.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUp-form");

  signUpForm.addEventListener("submit", function (event) {
 
    event.preventDefault();

    
    resetErrors();

  
    const username = document.getElementById("username").value;
     localStorage.setItem("user-name", `${username}`);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("ConfirmPassword").value;

    
    if (!isValidUsername(username)) {
      displayError("nameError", "Invalid username. Only characters are allowed.");
      return;
    }

    if (!isValidEmail(email)) {
      displayError("emailError", "Invalid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      displayError("passwordError", "Password should be at least 8 characters and contain at least one digit.");
      return;
    }

    // Check if confirmPassword matches password
    if (password !== confirmPassword) {
      displayError("confirmPasswordError", "Passwords do not match.");
      return;
    }

    // If all validations pass, you can redirect to another page
    // Replace the following line with the code to redirect
    window.location.href = "home.html";
  });

  function isValidUsername(username) {
    const alphanumericRegex = /^[a-zA-Z ]/;
    return alphanumericRegex.test(username);
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  function displayError(elementId, errorMessage) {
    // Reset errors first
    resetErrors();
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = `* ${errorMessage}`;
    document.getElementById(elementId).style.color = "red";
    document.getElementById(elementId).style.display = "block";
    const inputElement = document.getElementById(elementId.replace("Error", ""));
    inputElement.style.border = "2px solid red";
    // Add an event listener to remove the red border on input change
    inputElement.addEventListener("input", function () {
      inputElement.style.border = "";
    });
  }
  function resetErrors() {
    const errorElements = document.getElementsByClassName("error");
    for (const errorElement of errorElements) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }
});


///////////////////////////////////login///////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Reset previous errors
    resetErrors();

    // Get form inputs
    const username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("user-name", `${username}`);
    const password = document.getElementById("password").value;

    // Validate username (only characters allowed)
    if (!isValidUsername(username)) {
      displayError("usernameError", "Invalid username. Only characters are allowed.");
      return;
    }

    // Validate password
    const passwordValidationResult = isValidPassword(password);
    if (passwordValidationResult !== true) {
      displayError("passwordError", passwordValidationResult);
      return;
    }

    // If all validations pass, you can redirect to another page
    // Replace the following line with the code to redirect
    window.location.href = "home.html";
  });

  function isValidUsername(username) {
    const alphanumericRegex = /^[a-zA-Z ]/;
    return alphanumericRegex.test(username);
  }

  function isValidPassword(password) {
    // Validate password strength (at least 8 characters and contain at least one digit)
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      return "Password should be at least 8 characters and contain at least one digit.";
    }

    return true;
  }

  function displayError(elementId, errorMessage) {
    resetErrors();
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = `* ${errorMessage}`;
    document.getElementById(elementId).style.color = "red";
    document.getElementById(elementId).style.display = "block";
    const inputElement = document.getElementById(elementId.replace("Error", ""));
    inputElement.style.border = "2px solid red";
    inputElement.addEventListener("input", function () {
      inputElement.style.border = "";
    });
  }

  function resetErrors() {
    const errorElements = document.getElementsByClassName("error");
    for (const errorElement of errorElements) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }
});

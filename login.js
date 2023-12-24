document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
      
      event.preventDefault();
  
      resetErrors();
        const username = document.getElementById("username").value;
   
       const password = document.getElementById("password").value;
      if (!isValidUsername(username)) {
        displayError("usernameError", "Invalid username. Only characters are allowed.");
        return;
      }
  
      const passwordValidationResult = isValidPassword(password);
      if (passwordValidationResult !== true) {
        displayError("passwordError", passwordValidationResult);
        return;
      }
  
      // window.location.href = "home.html"
    window.location="home.html"
    });
  
    function isValidUsername(username) {
      const alphanumericRegex = /^[a-zA-Z ]/;
      return alphanumericRegex.test(username);
    }
  
    function isValidPassword(password) {
     
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
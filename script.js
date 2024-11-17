document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const role = document.getElementById('role').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Validation for Daksh Singhal
  if (role === "student" && username === "Daksh Singhal" && password === "daksh@123") {
      errorMessage.style.color = "green";
      errorMessage.textContent = "Welcome, Daksh!";
  } else if (role === "professor") {
      errorMessage.style.color = "red";
      errorMessage.textContent = "Access restricted to students only for now.";
  } else {
      errorMessage.style.color = "red";
      errorMessage.textContent = "Invalid username or password.";
  }
});

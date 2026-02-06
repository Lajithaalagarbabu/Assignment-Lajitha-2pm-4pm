let correctPassword = "admin123";

function login() {
  let userPassword = document.getElementById("password").value;

  if (userPassword === correctPassword) {
    document.getElementById("msg").innerText = "Login Successful";
  } else {
    document.getElementById("msg").innerText = "Wrong Password";
  }
}
//Handle Errors Gracefully (Reliability)

try {
  let data = JSON.parse("invalid json");
} catch (error) {
  console.error(error);
  showError("Something went wrong. Please try again.");
}

//Handle Errors Gracefully (Reliability)
function showError(msg) {
  document.getElementById("error").innerText = msg;
}

//Validate Inputs Before Submission
if (email === "") {
  showError("Email is required");
  return;
}

//Use Loading States (UX Improvement)
loader.style.display = "block";

fetchData().finally(() => {
  loader.style.display = "none";
});

//Handle API Failures Safely
try {
  let res = await fetch(url);
  if (!res.ok) throw new Error();
} catch {
  showError("Server is temporarily unavailable");
}

//Log Errors for Debugging (Developer Reliability)
console.error("Login failed:", error.message);

//Prevent Repeated Actions
button.disabled = true;

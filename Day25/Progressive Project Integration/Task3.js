async function loginUser() {
  console.log("Logging in...");

  const response = await apiRequest("/login");

  console.log("Login completed");
}

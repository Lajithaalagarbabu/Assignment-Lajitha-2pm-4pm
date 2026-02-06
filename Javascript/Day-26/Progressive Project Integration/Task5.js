async function handleLoginClick() {
  try {
    console.log("Please wait...");

    const user = await login();
    console.log("Welcome", user.name);

  } catch {
    console.log("Login failed. Try again.");
  }
}

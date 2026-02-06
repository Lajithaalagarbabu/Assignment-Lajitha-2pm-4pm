async function login() {
  try {
    const userData = await apiRequest("/login");
    userStore.setUser(userData);
    return userData;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

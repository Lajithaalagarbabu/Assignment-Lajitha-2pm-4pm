function createUserStore() {
  let user = null; // 🔒 private (cannot access directly)

  return {
    setUser(data) {
      user = data;
    },
    getUser() {
      return user;
    },
    isLoggedIn() {
      return user !== null;
    }
  };
}

const userStore = createUserStore();

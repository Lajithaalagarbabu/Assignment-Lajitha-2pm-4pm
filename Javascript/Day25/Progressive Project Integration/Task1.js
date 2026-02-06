function createUserStore() {
  let user = null; 

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

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 1500);
  });
}

function loadDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dashboard loaded");
    }, 1000);
  });
}

async function loginFlow() {
  try {
    const loginStatus = await loginUser("admin", "1234");
    console.log(loginStatus);

    const dashboard = await loadDashboard();
    console.log(dashboard);
  } catch (error) {
    console.log(error);
  }
}

loginFlow();

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 2000);
  });
}

function fetchDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dashboard loaded");
    }, 1000);
  });
}

async function loginFlow() {
  try {
    let loginStatus = await loginUser("admin", "1234");
    console.log(loginStatus);

    let dashboard = await fetchDashboard();
    console.log(dashboard);
  } catch (error) {
    console.log(error);
  }
}

loginFlow();

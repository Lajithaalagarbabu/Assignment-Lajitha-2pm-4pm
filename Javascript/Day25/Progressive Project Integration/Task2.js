function apiRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "/login") {
        resolve({ id: 1, name: "Admin", token: "abc123" });
      } else {
        reject("API endpoint not found");
      }
    }, 1500);
  });
}

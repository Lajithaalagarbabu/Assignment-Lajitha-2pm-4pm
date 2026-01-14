async function apiRequest(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "/login") {
        resolve({ name: "Admin", token: "xyz123" });
      } else {
        reject("API not found");
      }
    }, 1500);
  });
}

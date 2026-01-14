function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000);
  });
}

fakeApiCall()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

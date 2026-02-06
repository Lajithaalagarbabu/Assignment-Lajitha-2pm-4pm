function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fake API data loaded");
    }, 1500);
  });
}

fakeApi().then((data) => {
  console.log(data);
});

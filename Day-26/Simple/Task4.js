let promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

promise.then((result) => {
  console.log(result);
});

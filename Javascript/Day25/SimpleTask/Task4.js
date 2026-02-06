let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("successfully");
  } else {
    reject("failed");
  }
});

myPromise.then((result) => {
  console.log(result);
});

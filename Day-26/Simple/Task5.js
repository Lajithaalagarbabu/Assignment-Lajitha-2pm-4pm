//Promise Version

function getData() {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

getData().then((data) => {
  console.log(data);
});


// Async and Await

async function fetchData() {
  let data = await getData();
  console.log(data);
}

fetchData();

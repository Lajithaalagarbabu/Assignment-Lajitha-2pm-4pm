function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Products fetched");
    }, 1500);
  });
}

async function getProducts() {
  let result = await fetchData();
  console.log(result);
}

getProducts();

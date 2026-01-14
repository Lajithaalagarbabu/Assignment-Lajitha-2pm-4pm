function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function getData() {
  console.log("Loading...");
  const result = await loadData();
  console.log(result);
}

getData();

function outer() {
  let name = "Buddy";

  function inner() {
    console.log(name);
  }

  return inner;
}

const showName = outer();
showName();

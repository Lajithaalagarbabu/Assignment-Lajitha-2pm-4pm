let a = 10;   

function test() {
  let b = 20; 
  console.log(a); 
  console.log(b); 
}

test();
console.log(a); 
// console.log(b); 

if (true) {
  let x = 5;
  const y = 10;
  var z = 15;
}

console.log(z); //  works
// console.log(x);  error
// console.log(y);  error

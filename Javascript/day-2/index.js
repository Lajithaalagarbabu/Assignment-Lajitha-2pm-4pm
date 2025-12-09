// Declare variables using var, let, and const.
let a=10;

var b=15;

const c=20;

// Check types of: "Hello", 45, true, null.

let s = "Hello";   // string
let n = 45;        // number
let bo = true;      // boolean
let x = null;      // null

console.log(typeof s);  // "string"
console.log(typeof n);  // "number"
console.log(typeof bo);  // "boolean"
console.log(typeof x);  // "object"

// Use arithmetic operators to calculate sum, product, and remainder.

console.log(a-b);
console.log(a*b);
console.log(a/b);

// Compare values using both == and ===.

if(a==b){
    console.log("A is equal to b");
}
if(b === c){
    console.log("Strightly equal");
}

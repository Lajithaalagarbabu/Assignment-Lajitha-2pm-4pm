// Shopping Cart Total Calculator
// Loop through prices array → calculate total.


let prices = [120, 250, 80, 50];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total Amount: ₹" + total);

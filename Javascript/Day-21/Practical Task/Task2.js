let studentAges = [14, 18, 16, 22, 19, 17, 25];
let adults = studentAges.filter(function (age) {
  return age >= 18;
});
console.log(adults);

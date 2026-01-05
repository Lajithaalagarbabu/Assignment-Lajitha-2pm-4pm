// What is the Use of throw?

// throw is used to create a custom error manually.

// Useful for validation.

let age = -5;

if (age < 0) {
  throw "Age cannot be negative";
}

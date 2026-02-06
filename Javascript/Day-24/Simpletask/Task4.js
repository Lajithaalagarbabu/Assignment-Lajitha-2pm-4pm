//  Explain try, catch, finally

// Used for error handling in JavaScript.

// try

// Code that may cause an error is written here.

// catch

// Executes if an error occurs in try.

// finally

// Executes always, whether error occurs or not.

// Example:

try {
  let x = y + 5; // error
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Execution completed");
}
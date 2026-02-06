//Basic Error Logging Using console.log

try {
  let x = y + 10; // y is not defined
} catch (error) {
  console.log(error);
}

//Better Logging Using console.error
try {
  let result = 10 / 0;
} catch (error) {
  console.error("Error occurred:", error);
}

//Log Error Details (Message + Stack Trace)
try {
  JSON.parse("invalid json");
} catch (error) {
  console.error("Message:", error.message);
  console.error("Stack:", error.stack);
}

//Log Errors in Form Validation
function submitForm() {
  try {
    let name = "";

    if (name === "") {
      throw new Error("Name field is empty");
    }
  } catch (err) {
    console.error("Form Error:", err.message);
  }
}

//Log API Errors for Debugging
async function fetchData() {
  try {
    let res = await fetch("https://wrongurl.com/data");
    if (!res.ok) throw new Error("API Failed");
  } catch (err) {
    console.error("API Error:", err.message);
  }
}

import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>

      <p>This is a correct JSX example</p>

      <img src="logo.png" alt="React Logo" />

      <button onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;

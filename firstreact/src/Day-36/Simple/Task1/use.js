import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted");

    // runs only once
  }, []); // empty dependency array

  return (
    <div>
      <h2>useEffect Example</h2>
    </div>
  );
}

export default Example;

import React, { useEffect } from "react";

function Example() {
  console.log("Render");

  useEffect(() => {
    console.log("Effect");
  }, []);

  return <h2>Hello</h2>;
}

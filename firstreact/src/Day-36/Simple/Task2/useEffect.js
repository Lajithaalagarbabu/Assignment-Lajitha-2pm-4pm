import React, { useState, useEffect } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // runs when count changes

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default CounterEffect;

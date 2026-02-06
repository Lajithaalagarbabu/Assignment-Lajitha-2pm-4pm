import React, { useState, useEffect } from "react";

function TitleChange() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // runs when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default TitleChange;

import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />

      <p>Input value: {value}</p>
    </div>
  );
}

export default ControlledInput;

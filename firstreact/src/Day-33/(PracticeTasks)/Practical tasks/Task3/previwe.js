import React, { useState } from "react";

function InputPreview() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
  );
}

export default InputPreview;

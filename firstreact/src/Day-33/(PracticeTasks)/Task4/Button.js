import React, { useState } from "react";

function ButtonText() {
  const [text, setText] = useState("Click Me");

  return (
    <button onClick={() => setText("Clicked!")}>
      {text}
    </button>
  );
}

export default ButtonText;

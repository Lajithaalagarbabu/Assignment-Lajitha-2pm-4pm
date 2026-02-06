import React, { useState } from "react";

function ToggleText() {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        Toggle Text
      </button>

      {showText && <p>Hello React</p>}
    </div>
  );
}

export default ToggleText;

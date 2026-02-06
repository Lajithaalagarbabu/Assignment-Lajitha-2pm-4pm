import React, { useState } from "react";

function ShowMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>

      {isVisible && <p>Hello, welcome to React!</p>}
    </div>
  );
}

export default ShowMessage;

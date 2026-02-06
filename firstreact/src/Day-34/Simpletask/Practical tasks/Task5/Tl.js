import React, { useState } from "react";

function ToggleList() {
  const [showList, setShowList] = useState(true);

  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleList;

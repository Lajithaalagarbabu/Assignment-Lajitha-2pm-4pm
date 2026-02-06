import React, { useState } from "react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <p style={{ color: isDark ? "white" : "black",
                  backgroundColor: isDark ? "black" : "white",
                  padding: "10px" }}>
        This is {isDark ? "Dark" : "Light"} Mode Text
      </p>
    </div>
  );
}

export default ToggleTheme;

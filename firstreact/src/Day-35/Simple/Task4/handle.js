import React, { useState } from "react";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Accept Terms
      </label>

      <p>
        {isChecked ? "Checkbox is checked" : "Checkbox is unchecked"}
      </p>
    </div>
  );
}

export default CheckboxExample;

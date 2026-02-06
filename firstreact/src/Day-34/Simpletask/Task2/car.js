import React from "react";

function CityList() {
  const cities = ["Chennai", "Madurai", "Coimbatore", "Trichy", "Salem"];

  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;

import React from "react";

function CityList() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Madurai" },
    { id: 3, name: "Coimbatore" },
    { id: 4, name: "Trichy" },
    { id: 5, name: "Salem" }
  ];

  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;

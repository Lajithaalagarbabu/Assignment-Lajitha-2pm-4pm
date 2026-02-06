import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Ajith", age: 22, city: "Chennai" },
    { id: 2, name: "Suresh", age: 24, city: "Madurai" },
    { id: 3, name: "Ravi", age: 26, city: "Coimbatore" }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.age} – {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

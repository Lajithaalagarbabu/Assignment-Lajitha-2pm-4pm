import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // mock data
    const mockData = [
      { id: 1, name: "Ajith" },
      { id: 2, name: "Suresh" },
      { id: 3, name: "Ravi" }
    ];

    setUsers(mockData);
  }, []); // runs once on page load

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

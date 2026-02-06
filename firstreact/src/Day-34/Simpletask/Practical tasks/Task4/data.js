import React from "react";

function UserList() {
  const users = [];

  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;

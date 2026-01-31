import React from "react";

function ProfileCard({ name, role, email }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;

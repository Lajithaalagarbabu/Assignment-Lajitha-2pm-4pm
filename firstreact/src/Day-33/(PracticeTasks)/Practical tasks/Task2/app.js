import React, { useState } from "react";
import Profile from "./Profile";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && <Profile />}
    </div>
  );
}

export default App;

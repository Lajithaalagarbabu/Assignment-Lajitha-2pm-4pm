import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup
    return () => {
      clearInterval(timerId);
      console.log("Timer cleared");
    };
  }, []); // runs once

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default Timer;

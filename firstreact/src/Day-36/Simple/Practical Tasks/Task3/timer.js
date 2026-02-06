import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(timerId);
    };
  }, []); // run once

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default Timer;

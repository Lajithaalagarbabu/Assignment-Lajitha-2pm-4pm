//  What is an infinite useEffect loop?

// An infinite loop happens when:

// useEffect updates a state

// That state is in the dependency array

// Updating state causes a re-render

// Re-render triggers useEffect again
//  Loop continues forever 

//Use functional update + run once
useEffect(() => {
  setCount((prev) => prev + 1);
}, []);


// Remove unnecessary state update
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);

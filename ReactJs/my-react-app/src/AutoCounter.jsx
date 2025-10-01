import React, { useState, useEffect } from 'react';

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000); // increase every second
    }
    // cleanup (important!)
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Resume"}</button>
    </div>
  );
};

export default AutoCounter;

import React, { useState, useEffect } from "react";

const Timer = () => {
  let [seconds, setSecond] = useState(0);
  let [IsRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval
    if (IsRunning) {
      interval = setInterval(() => {
        setSecond(prev => prev + 1);
      }, 100);
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [IsRunning]);

 const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>🕛STOP WATCH</h1>
      <h1>{formatTime()}</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setSecond(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
};

export default Timer;

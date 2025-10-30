// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   let [seconds, setSecond] = useState(0);
//   let [IsRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval
//     if (IsRunning) {
//       interval = setInterval(() => {
//         setSecond(prev => prev + 1);
//       }, 100);
//     }else{
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval);
//   }, [IsRunning]);

//  const formatTime = () => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//   };

//   return (
//     <div>
//       <h1>🕛STOP WATCH</h1>
//       <h1>{formatTime()}</h1>

//       <button onClick={() => setIsRunning(true)}>Start</button>
//       <button onClick={() => setIsRunning(false)}>Stop</button>
//       <button onClick={() => { setSecond(0); setIsRunning(false); }}>Reset</button>
//     </div>
//   );
// };

// export default Timer;


import React, { useReducer, useEffect, useState } from 'react';

const Timer = () => {
  function reducer(state, action) {
    if (action.type === "start") return { ...state, Running: true };
    if (action.type === "stop") return { ...state, Running: false };
    if (action.type === "reset") return { time: 0, Running: false };
    return state;
  }

  const [state, dispatch] = useReducer(reducer, { time: 0, Running: false });

  useEffect(() => {
    let interval;
    if (state.Running) {
      interval = setInterval(() => {
        state.time += 1; 
        dispatch({ type: "start" });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [state.Running]);

  const formatTime = () => {
    const mins = Math.floor(state.time / 60);
    const secs = state.time % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{formatTime()}</h2>

      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Timer;

import React, { useState } from "react";
  let interval 
const Timer = () => {
  const [time, setTime] = useState(0);
  if(!interval){
  interval = setInterval(() => {
    setTime(prev => prev + 1)
  }, 1000)
}

  function stop(){
    clearInterval(interval)
    interval = null
  }
  function reset(){
    setTime(0)
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer;

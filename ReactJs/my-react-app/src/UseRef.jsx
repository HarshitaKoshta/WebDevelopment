import React, { useState,useRef, useEffect } from 'react'

const UseRef = () => {
    let [count,setCount] = useState(0)
    const a = useRef(0);

    useEffect(()=>{
        a.current ++;
        console.log(`rerendering and the value of a is ${a.current}`);
        
    })
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <p>Component re-rendered: {a.current} times</p>
    </div>
  )
}

export default UseRef
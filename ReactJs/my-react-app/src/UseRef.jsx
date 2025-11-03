// import React, { useState,useRef, useEffect } from 'react'

// const UseRef = () => {
//     let [count,setCount] = useState(0)
//     const a = useRef(0);

//     useEffect(()=>{
//         a.current ++;
//         console.log(`rerendering and the value of a is ${a.current}`);
        
//     },[])
//   return (
//     <div>
//         <h2>Count: {count}</h2>
//         <button onClick={() => setCount(count + 1)}>Increase</button>
//         <p>Component re-rendered: {a.current} times</p>
//     </div>
//   )
// }

// export default UseRef

import React, { useEffect, useState, useRef } from 'react'

const UseRef = () => {
  const [input, setinput] = useState("")
  
  let count = useRef(0)

  useEffect(()=>{
    count.current += 1
  })
  return (
    <div>
      <h1>{count.current}</h1>
      <input type="text" onChange={(e)=>setinput(e.target.value)} />
    </div>
  )
}

export default UseRef
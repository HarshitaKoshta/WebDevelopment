// import React, { useState } from 'react'

// const Practice = () => {
//     let [setname,getName] = useState("Harshita")

//     function name(){
//       if (setname === "Harshita") {
//       getName("pihu")
//     } else {
//       getName("Harshita")
//     }
//     }
//   return (
//     <div>
//     <h2>{setname}</h2>
//     <button onClick={name}>Name</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from 'react'


// const Practice = () => {
//   const [data, setdata] = useState("")
//   const [showData, setShowData] = useState("")

//   function func(e){
//      let name = e.target.value
//      setdata(name)
//   }
//   function show(){
//     setShowData(data)
//   }
//   return (
//     <div>
//         <input type="text" onChange={func} />
//         <button onClick={show}>Click</button>
//          <h3>{showData}</h3> 
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from 'react'

// const Practice = () => {
//   const [color, setcolor] = useState("white")

//   function fun1(){
//     setcolor("red")
//   }

//   return (
//     <div style={{backgroundColor:color}}>
//       <h1>{color}</h1>
//       <button onClick={fun1}>Change</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//   const [Count, setCount] = useState(0)

//   useEffect(()=>{
//     console.log("hellooo");
    
//   },[])
//   return (
//     <div>
//       <h2>{Count}</h2>
//       <button onClick={()=>{setCount(Count+1)}}>click</button>
//     </div>
//   )
// }

// export default Practice

import React, { useReducer } from 'react'

const Practice = () => {
  function reducer(count,action){
        if(action.type=="++"){
          return count+1
        }else if(action.type=="--"){
          return count-1
        }
  }
  
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"++"})}>++</button>
      <button onClick={()=>dispatch({type:"--"})}>--</button>
    </div>
  )
}

export default Practice
import React, { useEffect, useState } from 'react'

// const Time = () => {
    
    
//     let [count,SetCount] = useState()
//     setInterval(()=>{
//         SetCount(new Date().toLocaleTimeString())
//     })
//     // console.log(data)
//   return (
//     <div>
//         <h2>{count}</h2>
//         {/* <Color/> */}
//     </div>
//   )
// }

// import React from 'react'

const Time = () => {
     let [ApiData,SetApiData]=useState([])
     useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{
        return res.json()

      }).then((data)=>{
        console.log(data);
        SetApiData(data)  
      })
     },[])
    
  return (
    <div>

{
  ApiData.map((a)=>{
    return(<>
    <p>{a.id}</p>
    <h2> {a.title}</h2>
    </>)

  })
}
+
  </div>
)}

export default Time
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

import React, { useState } from 'react'


const Practice = () => {
  const [data, setdata] = useState("")
  const [showData, setShowData] = useState("")

  function func(e){
     let name = e.target.value
     setdata(name)
  }
  function show(){
    setShowData(data)
  }
  return (
    <div>
        <input type="text" onChange={func} />
        <button onClick={show}>Click</button>
         <h3>{showData}</h3> 
    </div>
  )
}

export default Practice
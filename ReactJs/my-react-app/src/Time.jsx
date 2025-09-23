import React, { useState } from 'react'

const Time = () => {
    
    let [count,SetCount] = useState()
    setInterval(()=>{
        SetCount(new Date().toLocalTimeString())
    })
    // console.log(data)
  return (
    <div>
        <h2>{count}</h2>
       
    </div>
  )
}

export default Time
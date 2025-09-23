import React, { useState } from 'react'

const Time = () => {
    
    let [count,SetCount] = useState()
    setInterval(()=>{
        SetCount(new Date().toLocaleTimeString())
    })
    // console.log(data)
  return (
    <div>
        <h2>{count}</h2>
        <Color/>
    </div>
  )
}

// import React from 'react'

  function Color(){
    return(
      <div>
         colour
      </div>
    )
  }

export default Time
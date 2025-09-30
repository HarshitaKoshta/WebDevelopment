import React, { useState } from 'react'

const HideShow = () => {

    let [display,setDisplay] = useState(true)

  return (
    <div>
        <h1>Toggle</h1>
        <button onClick={()=>setDisplay(!display)}>TOGGLE</button>
        {
            display? <h1>PiHu</h1>:null
        }
    </div>
  )
}

export default HideShow
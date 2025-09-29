import React, { useState } from 'react'

const Practice = () => {
    let [setname,getName] = useState("Harshita")

    function name(){
      if (setname === "Harshita") {
      getName("pihu")
    } else {
      getName("Harshita")
    }
    }
  return (
    <div>
    <h2>{setname}</h2>
    <button onClick={name}>Name</button>
    </div>
  )
}

export default Practice
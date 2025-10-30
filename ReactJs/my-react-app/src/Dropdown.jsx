import React, { useState } from 'react'

const Dropdown = () => {
    const [selected, setSelected] = useState('')   

  function handleChange(e) {
    setSelected(e.target.value)   
  }

  return (
    <div>
      <select onChange={handleChange} value={selected}>
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
      </select>
    <h2>
      {selected ? `You selected: ${selected}` : "No fruit selected yet"}
    </h2>
    </div>
  )
}


export default Dropdown
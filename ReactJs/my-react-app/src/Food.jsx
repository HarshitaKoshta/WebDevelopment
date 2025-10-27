import React, { useEffect, useState } from 'react'
import './ShowImg.css'

const Food = () => {
  const [Data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.recipes)
        setFilteredData(data.recipes)
      })
  }, [])

  return (
    <div>
      {
        filteredData.map((a) => (
          <div id='card' key={a.id}>
            <img src={a.image}  />
            <p>{a.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Food

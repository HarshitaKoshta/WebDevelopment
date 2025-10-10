import React, { useEffect } from 'react'

const Data = () => {
    let [apiData,SetData] = useState([])
    
    useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res){
        return res.json()
    }).then(()=>{
       console.log(data);
      SetData(data.recipes)
      SetFilteredddData(data.recipes)
    })
    
    })
  return (
    <div></div>
  )
}

export default Data
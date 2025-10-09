import React, { useEffect } from 'react'

const Data = () => {
    let [apiData,SetData] = useState([])
    
    useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res){
        return res.json()
    }).then(()=>{

    })
    
    })
  return (
    <div></div>
  )
}

export default Data
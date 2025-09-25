
import React, { useEffect, useState } from 'react'


const ShowImg = () => {
  let [apiData,SetData] = useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      SetData(data.recipes)
    })
  },[])
  function dlt(idx){
      let ImagesA = apiData.filter((a,b)=>{
            return b!=idx;
         })
         SetData(ImagesA)
     }
  return (
    <div>{
       apiData.map((a,idx)=>{
        return(
          <>
          <div id="card">
            <img src={a.image} />
            <p>{a.name}</p>
            <button  onClick={(()=>{dlt(idx) })}>Delete</button>
            <button>SAVE</button>
          </div>
          </>
        )
       })

      }
    </div>
  )
}

export default ShowImg

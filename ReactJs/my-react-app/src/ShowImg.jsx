
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

  function func1(){
    let data1 = [... apiData].sort((a,b)=>{
      return a.rating - b.rating
    })
    SetData(data1)

  }  
  function func2(){
   let data2 = [... apiData].sort((a,b)=>{
      return b.rating - a.rating
    })
    SetData(data2)
  }    

  function lunch(searchValue){
     let data4=[...apiData].filter((a)=>{
        return a.mealType[0] == searchValue
     })
     SetData(data4)
  }
  return (
    
    <div>
      <div>
      <button class="sort" onClick={func1}>ASC</button>
      <button class="sort" onClick={func2}>DEC</button>
      <button class="sort" onClick={()=>lunch("Lunch")}>LUNCH</button>
      <button class="sort">DINNER</button>
      <button class="sort">BREAKFAST</button>
      </div>
      {
      
       apiData.map((a,idx)=>{
        return(
          <>
          <div id="card">
            <img src={a.image} />
            <p>{a.name}</p>
            <p>Rating : {a.rating}⭐</p>
            <button  onClick={(()=>{dlt(idx) })}>Delete</button>
          </div>
          
          </>
        )
       })
      }
     
    </div>
  )
}

export default ShowImg

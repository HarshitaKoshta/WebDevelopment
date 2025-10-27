import React, { useState } from 'react'

const ToDoList1 = () => {
    let [data, setdata] = useState("")
    let [task, settask] = useState([])
    function dlt(idx){
      let ImagesA = apiData.filter((a,b)=>{
            return b!=idx;
         })
        SetData(ImagesA)
     }
  return (
    <div>
        <input type="text" placeholder='enter'onChange={(e)=>{setdata(e.target.value)}}/>
        <button onClick={(()=>{settask(task.concat(data))})}>ADD</button>
       {
        task.map((a)=>{
           return(<>
           <li>{a}</li>
           </>)
        })
       }
        
    </div>
  )
}

export default ToDoList1
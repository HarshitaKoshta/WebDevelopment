import React, { useState } from 'react'

const ToDoList = () => {
    let [data, setdata] = useState("")
    const [tasks, setTasks] = useState([])
  return (
    <div>
        <h1>TO DO List</h1>
        <input type="text" onChange={(e)=>{setdata(e.target.value)}} />
        <button onClick={(()=>{
            setTasks(tasks.concat(data));
        })}>Add Task</button>
         {tasks.map((t, index) => (
          <h3>{t}</h3>
        ))}
    </div>
  )
}

export default ToDoList
import React from 'react'
import { useState } from 'react'

const ToDoApp = () => {
   let[task,setTask] = useState("")
   const [tasks, setTasks] = useState([]);

  return (
    <div id="toDo">
        <h1>TO DO APP</h1>
        <input type="text" placeholder='Enter Task'  value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={(()=>{
            setTasks(tasks.concat(task));
            // setTask("");  
        })}>Add Task</button>

         <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoApp
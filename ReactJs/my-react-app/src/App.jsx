
import React, {useEffect, useState} from 'react'
import Time from './Time';
import ShowImg from './ShowImg';
import TodoApp from './ToDo';



const App = () => {
  return (
    <div>
       {/* <Time/> */}
       <ShowImg/>
       {/* <TodoApp/> */}
    </div>
  )
}

export default App

// const App = () => { 
  
//   let [state,SetState] = useState(0);
//   let[city,SetCity] = useState("delhi")

//   useEffect(()=>{
//     console.log("hello")
//   },[])

  //  fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
  //         return res.json
  //     }).then((data)=>{
  //       console.log(data)
  //     })

//   function func1(){
//     SetState(state+1)
//   }
//   function func2(){
//     SetState(state-1)
//     if(state<=0){
//       SetState(0)
//     }
//   }
//   function func3(){
//     SetState(0)
//   }

//   return (
//     <div style={{backgroundColor:state}} >
//       <Time/>
//       <h2>{city}</h2>
//       <h2>{count}</h2>
//       <button onClick={func1}>CountInc</button>
//       <button onClick={func2}>CountDec</button>
//       <button onClick={func3}>Reset</button>
//       <button onClick={()=>{SetCity("bhopal")}}>Change</button>
//     </div>
//   )
// }

// const App = () => {
//   let [state,SetState] = useState("red");
    
//   function func1(){
//     if(state="red"){
//       SetState("pink")
//     }else{
//       SetState("blue")
//     }
//   }
  
//   return (
//     <div style={{backgroundColor:state}}>
//       <h2>{state}</h2>
//       <button onClick={func1}>CountInc</button>
//       <button onClick={func2}>CountDec</button>

//     </div>
//   )
// }

// export default App
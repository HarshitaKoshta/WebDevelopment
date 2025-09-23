
import React, {useState} from 'react'
import Time from './Time';
// import Time from 'Time.jsx'

const App = () => {
  let [state,SetState] = useState(0);
  
  function func1(){
    SetState(state+1)
    if(state==5){
      SetState("red")
    }
  }
  function func2(){
    SetState(state-1)
    if(state<=0){
      SetState(0)
    }
  }
  function func3(){
    SetState(0)
  }

  return (
    <div style={{backgroundColor:state}} >
      <Time/>
      <h2>{state}</h2>
      <button onClick={func1}>CountInc</button>
      <button onClick={func2}>CountDec</button>
      <button onClick={func3}>Reset</button>
    </div>
  )
}

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

export default App
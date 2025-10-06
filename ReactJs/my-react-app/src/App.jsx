
import React, {useEffect, useState} from 'react'
// import Time from './Time';
// import ShowImg from './ShowImg';
// import TodoApp from './ToDo';
// import Practice from './Practice';
// import HideShow from './HideShow';
// import AutoCounter from './AutoCounter';
// import ImageSlider from './ImageSlider';
// import UseRef from './useRef';



// const App = () => {
//   return (
//     <div>
       {/* <Time/> */}
       {/* <Practice/> */}
       {/* <AutoCounter/> */}
       {/* <ImageSlider/> */}
      //  <UseRef/>
       {/* <HideShow/> */}
       {/* <ShowImg/> */}
       {/* <TodoApp/> */}
    {/* </div>
  )
} */}

const App = () => {
  let [Input, setInput] = useState("")
  let [data, setData] = useState([])


  function func1(e){
     setInput(e.target.value);
  }
    function done(){
      setData([...data,Input])
  }
  function del(idx){
      let Delete = data.filter((a,b)=>{
            return b!=idx;
         })
      setData(Delete)
  }
  return (
    <div>
      <input onChange={func1} />
      {/* <input placeholder='email' /> */}
      <button onClick={done}>Click</button>
      {
        data.map((a,id)=>{
            return (
              <>
              <div id="task">
                <h2>{a}</h2>
               <button id="dele" onClick={()=>del(id)}>❌</button>
               </div>
              </>
            )
        })
      }
    </div>
  )
}
// import React, {useState} from 'react'

// const App = () => {
//  let [input, setInput] = useState({
//   name:"",
//   email:"",
//   passWord:""
//  })

//  function fun1(e){
//     let {name,value} = e.target
//     setInput({...input,[name]:value})
//     console.log(input);
    
//   }

//   return (
//     <div>
//       <input name='name' value={input.name} type="text" placeholder='name' onChange={fun1} /><br />
//       <input name='email' value={input.email} type="email" placeholder='email' onChange={fun1} /><br />
//     </div>
//   )
// }

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
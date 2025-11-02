
// import React, {useEffect, useState} from 'react'


// import Timer from "./Timer"

// import Time from './Time';
// import ShowImg from './ShowImg';
// import TodoApp from './ToDo';
// import HideShow from './HideShow';
// import AutoCounter from './AutoCounter';
// import ImageSlider from './ImageSlider';
// import UseRef from './useRef';



// import SearchUser from './SearchUser'
// import React,{useState} from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import ShowImg from './ShowImg'
// // import Practice from './Practice'
// import AddCart from './AddCart'


// const App = () => {
//    let [apiData,SetData] = useState([])
//    let [filteredddData,SetFilteredddData] = useState([])

//   let [cart,SetCart]= useState([])
//   console.log(cart,"addddd");
    
//   return (
//     <div>
//       <Routes>
//           <Route   path='/'  element={<ShowImg cart={cart} SetCart={SetCart}  apiData={apiData} SetData={SetData} filteredddData={filteredddData}  SetFilteredddData={SetFilteredddData}  />} />
//         {/* <Route   path='/show'  element={<ShowImg/>} /> */}
//         <Route   path='/signup' element={<SignUp/>}/>
//         <Route   path='/login' element={<Login/>}/>
//         {/* <Route   path='practice' element={<Practice/>}/> */}
//         <Route  path='/cart' element={<AddCart cart={cart}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ApiFetch from './ApiFetch'
// import UseReducer from './UseReducer'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       {/* <UseReducer//> */}
//       <Home data="nameee"/>
//       {/* <ApiFetch/> */}
//     </div>
//   )
// }

// export default App



// const App = () => {
//   let [Input, setInput] = useState("")
//   let [data, setData] = useState([])


//   function func1(e){
//      setInput(e.target.value);
//   }
//     function done(){
//       setData([...data,Input])
//   }
//   function del(idx){
//       let Delete = data.filter((a,b)=>{
//             return b!=idx;
//          })
//       setData(Delete)
//   }
//   return (
//     <div>
//       <input onChange={func1} />
//       {/* <input placeholder='email' /> */}
//       <button onClick={done}>Click</button>
//       {
//         data.map((a,id)=>{
//             return (
//               <>
//               <div id="task">
//                 <h2>{a}</h2>
//                <button id="dele" onClick={()=>del(id)}>❌</button>
//                </div>
//               </>
//             )
//         })
//       }
//     </div>
//   )
// }
// import React, {useState} from 'react'

// const App = () => {
//  let [input, setInput] = useState({
//   name:"",
//   email:"",
//   passWord:""
//  })
//   let [data, setData] = useState({})

//  function fun1(e){
//     let {name,value} = e.target
//     setInput({...input,[name]:value})
//     console.log(input);
//   }
//   function show(){
//      setData({...input})
//   }

//   return (
//     <div>
//       <p>{data.name}</p>
//       <p>{data.email}</p> 
//       <p>{data.passWord}</p>

//       <input name='name' value={input.name} type="text" placeholder='name' onChange={fun1} /><br />
//       <input name='email' value={input.email} type="email" placeholder='email' onChange={fun1} /><br />
//       <input name='passWord' value={input.passWord} type="password" placeholder='password' onChange={fun1} /><br />
//       <button onClick={show}>Show</button>
//     </div>
//   )
// }

// export default App



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




///////// prps context................


// import React from 'react'
// import AddCart from './AddCart'
// import ShowImg from './ShowImg'
// // import OnePage from './OnePage'


// const App = () => {
//   return (
//     <div>
//       <Routes>
//          <Route path='/' element={<ShowImg/>}/>
//          <Route path='/cart' element={<AddCart/>}/>
//          <Route path='/OnePage/:id' element={<OnePage/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Food from './Food'
// import ToDoList1 from './ToDoList1'


// import { Route,Routes } from "react-router-dom"
// import Navbar from "./Navbar"
// import Home from "./Home"
// import About from "./About"
// import Login from "./Login"
// import SignUp from "./SignUp"

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//          <Route path='/' element={<Home/>}/>
//          <Route path='/about' element={<About/>}/>
//          <Route path='/login' element={<Login/>}/>
//          <Route path='/signup' element={<SignUp/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'
import LoginForm from './LoginForm'
// import Dropdown from './Dropdown'
// import BootStrap from './BootStrap'
import  Practice  from './Practice'
// import ApiFetch from './ApiFetch'


const App = () => {
  return (
    <div>
      <Practice/>
      {/* <Dropdown/> */}
      {/* <ApiFetch/> */}
      {/* <BootStrap/> */}
      {/* <LoginForm/> */}
    </div>
  )
}

export default App
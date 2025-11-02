// import React, { useState } from 'react'

// const Practice = () => {
//     let [setname,getName] = useState("Harshita")

//     function name(){
//       if (setname === "Harshita") {
//       getName("pihu")
//     } else {
//       getName("Harshita")
//     }
//     }
//   return (
//     <div>
//     <h2>{setname}</h2>
//     <button onClick={name}>Name</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from 'react'


// const Practice = () => {
//   const [data, setdata] = useState("")
//   const [showData, setShowData] = useState("")

//   function func(e){
//      let name = e.target.value
//      setdata(name)
//   }
//   function show(){
//     setShowData(data)
//   }
//   return (
//     <div>
//         <input type="text" onChange={func} />
//         <button onClick={show}>Click</button>
//          <h3>{showData}</h3> 
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from 'react'

// const Practice = () => {
//   const [color, setcolor] = useState("white")

//   function fun1(){
//     setcolor("red")
//   }

//   return (
//     <div style={{backgroundColor:color}}>
//       <h1>{color}</h1>
//       <button onClick={fun1}>Change</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//   const [Count, setCount] = useState(0)

//   useEffect(()=>{
//     console.log("hellooo");
    
//   },[])
//   return (
//     <div>
//       <h2>{Count}</h2>
//       <button onClick={()=>{setCount(Count+1)}}>click</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useReducer } from 'react'

// const Practice = () => {
//   function reducer(count,action){
//         if(action.type=="++"){
//           return count+1
//         }else if(action.type=="--"){
//           return count-1
//         }
//   }
  
//   const [count, dispatch] = useReducer(reducer, 0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch({type:"++"})}>++</button>
//       <button onClick={()=>dispatch({type:"--"})}>--</button>
//     </div>
//   )
// }

/////////////CARD//////////////// 

// import React from 'react'
// import './Practice.css'
// const Practice = () => {
 
//   return (
//     <div>
//        <Card name="Harshita" age='20' bio="Developer" />
//     </div>
//   )
// }

// const Card = (props) => {
//   return (
//     <div id='card'>
//       <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
//        <p>Hello! I am {props.name}!</p>
//        <p>Age: {props.age}</p>
//        <p>Bio: {props.bio}</p>
//     </div>
//   )
// }

// export default Practice


////////////////input//////////////
// import React, { useState } from 'react'

// const Practice = () => {
// const [inp, setinp] = useState("")
//   function change(e){
//    console.log(e.target.value);
//    setinp(e.target.value)
//   }
//   return (
//     <div>
//       <input onChange={change} type="text" name="" id="" />
//       <h2>{inp}</h2>
//     </div>
//   )
// }

// export default Practice


// import React, { useState } from 'react'

// const Practice = () => {
//   const [inp, setinp] = useState('white')

//   function change() {
//     if (inp === 'white') {
//       setinp('black')
//     } else {
//       setinp('white')
//     }
//   }

//   return (
//     <div style={{ backgroundColor: inp, height: "100vh",color: inp === 'white' ? 'black' : 'white' }}>
//       <h1>{inp === 'white' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</h1>
//       <button onClick={change}>Change Mode</button>
//     </div>
//   )
// }

// export default Practice


// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//   const [data, setdata] = useState([])
//   let [filteredData, setFilteredData] = useState([]);
//   let [search, setSearch] = useState("");

//   useEffect(()=>{
//     fetch(" https://dummyjson.com/products/search?q=phone")
//     .then((res)=>res.json())
//     .then((data)=>{
//       setdata(data.products)
//       console.log(data);
//       setFilteredData(data.products);
//     })
//   },[])

//   function handleChange(e){
//      setSearch(e.target.value)
//   } 

//   function handleSearch(){
//     const result = data.filter((item) =>
//       item.category ===search
//     )
//       setFilteredData(result)
//   }
//   return (
//     <div>
//       <input type="text" placeholder='search product..' value={search} onChange={handleChange} />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {
//           filteredData.map((item)=>(
//             <div>
//             <img src={item.images} alt={item.title} width="180" height="180" />
//             <p>{item.title}</p>
//           </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Practice



////hide show text


// import React, { useState } from 'react'

// const Practice = () => {
//   const [show, setShow] = useState("Hellooo from Harshita");

//   return (
//     <div>
//       <h1>{show}</h1>
//       <button onClick={() => setShow("")}>Hide</button>
//       <button onClick={() => setShow("Hellooo from Harshita")}>Show</button>
//     </div>
//   )
// }

// export default Practice;

// import React from "react";

// const Practice = () => {
//   const users = [
//     { id: 1, name: "Harshita", age: 20 },
//     { id: 2, name: "Aarav", age: 22 },
//     { id: 3, name: "Priya", age: 19 },
//     { id: 4, name: "Rohan", age: 23 }
//   ];

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> — {user.age} years old
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Practice;


import React, { useState } from 'react';

const App = () => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "life is too short.So start early",
    "Don’t dream of success. Work for it.",
    "The key to success is to start before you’re ready.",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Stay humble. Work hard. Be kind.",
    "Make each day your masterpiece. – John Wooden",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Act as if what you do makes a difference. It does. – William James",
    "Do something today that your future self will thank you for."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🌟 AI Quote Generator 🌟</h1>
      <p style={{ fontSize: '24px',color: '#444' }}>{quote}</p>
      <button onClick={newQuote}>Get New Quote</button>
    </div>
  );
};

export default App;

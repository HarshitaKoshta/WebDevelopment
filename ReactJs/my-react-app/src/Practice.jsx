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


import React, { useEffect, useState } from 'react'

const Practice = () => {
  const [data, setdata] = useState([])
  let [filteredData, setFilteredData] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(()=>{
    fetch(" https://dummyjson.com/products/search?q=phone")
    .then((res)=>res.json())
    .then((data)=>{
      setdata(data.products)
      console.log(data);
      setFilteredData(data.products);
    })
  },[])

  function handleChange(e){
     setSearch(e.target.value)
  } 

  function handleSearch(){
    const result = data.filter((item) =>
      item.category ===search
    )
      setFilteredData(result)
  }
  return (
    <div>
      <input type="text" placeholder='search product..' value={search} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {
          filteredData.map((item)=>(
            <div>
            <img src={item.images} alt={item.title} width="180" height="180" />
            <p>{item.title}</p>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Practice
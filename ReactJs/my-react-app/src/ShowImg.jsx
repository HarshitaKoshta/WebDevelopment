
// import React, { useEffect, useState } from 'react'
// import './ShowImg.css'
// import { Link } from 'react-router-dom'

// const ShowImg = ({cart,SetCart, apiData,SetData,filteredddData,SetFilteredddData}) => {
// //   let [apiData,SetData] = useState([])
// //   let [filteredddData,SetFilteredddData]= useState([])

//   useEffect(()=>{
//     fetch("https://dummyjson.com/recipes").then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data);
//       SetData(data.recipes)
//       SetFilteredddData(data.recipes)
//     })
//   },[])

//   function dlt(idx){
//       let ImagesA = apiData.filter((a,b)=>{
//             return b!=idx;
//          })
//          SetData(ImagesA)
//      }

//   function func1(){
//     let data1 = [... apiData].sort((a,b)=>{
//       return a.rating - b.rating
//     })
//     SetData(data1)

//   }  
//   function func2(){
//    let data2 = [... apiData].sort((a,b)=>{
//       return b.rating - a.rating
//     })
//     SetData(data2)
//   }    

//   function lunch(searchValue){
//      let data3=apiData.filter((a)=>{
//         return a.mealType[0] == searchValue
//      })
//      console.log("lunch")
//      SetFilteredddData(data3)
//     }
//   function dinner(value){
//      let data4=apiData.filter((a)=>{
//         return a.mealType[0] == value
//      })
//      console.log("dinner");
     
//      SetFilteredddData(data4)
//     }

//     function breakF(value){
//      let data5=apiData.filter((a)=>{
//         return a.mealType[0] == value
//      })
//      console.log("breakfast");
//      SetFilteredddData(data5)
//     }
  
//     return (
//        <> 
//       <Link  to={'/cart'}>  
//        <button>add to Cart {cart.length}</button>
//       </Link>
//     <div>
//       <div id="ssort">
//       <button class="sort" onClick={func1}>ASC</button>
//       <button class="sort" onClick={func2}>DEC</button>
//       <button class="sort" onClick={()=>lunch("Lunch")}>LUNCH</button>
//       <button class="sort" onClick={()=>dinner("Dinner")}>DINNER</button>
//       <button class="sort" onClick={()=>breakF("BreakFast")}>BREAKFAST</button>
//       </div>
//       {
      
//        filteredddData.map((a,idx)=>{
//         return(
//           <>
//           <div id="card">
//             <img src={a.image} />
//             <p>{a.name}</p>
//             <p>Rating : {a.rating}⭐</p>
//             {/* <button  onClick={(()=>{dlt(idx) })}>Delete</button> */}
//             <button onClick={()=> SetCart([...cart,a])}>ADD</button>
//           </div>
//           </>
//         )
//        })
//       }
     
//     </div>
//      </>
//   )
// }

// export default ShowImg

import React, { useContext } from 'react'
import Context from './Context'
import './ShowImg.css';

const ShowImg = () => {

 let {dispatch,state}= useContext(Context)

   return (
      <>
      <button>CART</button>
   {
        state.apiData.map((a,index)=>{
           return(<>
           <div id='card'>
          <img  src={a.image}/>
             <p>{a.name}</p>
             <p> Rating: {a.rating}</p> 
             <button  onClick={()=> SetCart([...cart,a])}>add </button>
          </div>
          </>)
         })
      } 
   </>
  )
}

export default ShowImg
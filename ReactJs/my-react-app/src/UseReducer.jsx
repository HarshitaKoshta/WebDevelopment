import React, { useReducer } from 'react'

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, "red")

    // function reducer(count,action){
    //     if(action.type=="inc"){
    //         return count+1
    //     }else if(action.type=="dec"){
    //         return count-1
    //     }
    //     else
    //         return count
    // }
    function reducer(count,action){
        if(action.type=="red"){
            return "red"
        }else if(action.type=="blue"){
            return 'blue'
        }else if(action.type=="pink"){
            return 'pink'
        }else if(action.type=="aqua"){
            return 'aqua'
        }
    }
   

  return (
    <div style={{backgroundColor:count}}>
        <h2>{count}</h2>
        {/* <button onClick={()=>dispatch({type:"inc"})}>++</button>
        <button onClick={()=>dispatch({type:"dec"})}>--</button> */}
        <button onClick={()=>dispatch({type:"red"})}>Red</button>
        <button onClick={()=>dispatch({type:"blue"})}>Blue</button>
        <button onClick={()=>dispatch({type:"pink"})}>pink</button>
        <button onClick={()=>dispatch({type:"aqua"})}>Aqua</button>



    </div>
  )
}

export default UseReducer
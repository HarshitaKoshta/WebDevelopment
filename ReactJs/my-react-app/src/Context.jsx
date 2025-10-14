import { createContext, useEffect, useReducer } from 'react';
let Context = createContext()

export default Context

const ContextP = ((Children)=>{
    let data = {
        apiData:[],
        cart:[]
    }
    function reduser(apiData,action){
       if(action.type=="Fetch_Data"){
        return{
            apiData:action.payload
        }
       }
    }
    useEffect(()=>{
      fetch().then((res)=>{
          return res.json
      }).then((data)=>{
          data.payload
      })
    },[])
    
    
    let [val, dispatch] = useReducer(reduser, data)
       return(
        <div>
            <Context.Provider>
             {Children}
            </Context.Provider>
        </div>
       )
}) 

export {ContextP};

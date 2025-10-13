import React from 'react'

const AddCart = ({cart}) => {
    function dlt(idx){
      let ImagesA = apiData.filter((a,b)=>{
            return b!=idx;
         })
         SetData(ImagesA)
     }
  return (
    <div>
         <div>
        {
            cart.map((a)=>{
                return (<>
                <div id='card'> 
                    <img  src={a.image}/>
                    <p>{a.name}</p>
                    <p> Rating: {a.rating}</p>
                    <button  onClick={()=> SetCart([...cart,a])}>add </button>
                    <button onClick={(()=>{dlt(idx)})}>Remove</button>
                </div>
            </>)
            })
        }
        </div>
    </div>
  )
}

export default AddCart
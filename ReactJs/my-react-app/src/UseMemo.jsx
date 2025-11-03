// import React, { useMemo, useState } from 'react'

// const UseMemo = () => {
//     const [data, setdata] = useState(0)
//     let result = useMemo(()=>{
//     let res =0 
//         for(let i=0;i<1000000000;i++){
//         res+=i;
//     }
//     return res;
//     },[])
//   return (
//     <div>
//       <h2>{result}</h2>
//       <h2>{data}</h2>
//       <button onClick={()=>setdata(data+1)}>click</button>
//     </div>
//   )
// }

// export default UseMemo

import React, { memo, useState } from 'react'

const UseMemo = () => {
    const [data, setdata] = useState(0)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>setdata(data+1)}>click</button>
    <Home/>

    </div>
  )
}

export default UseMemo



const Home = memo(()=>{
   return (
    <div>home</div>
  )

})

export { Home}
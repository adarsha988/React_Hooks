import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [count, setCount]=useState(0);
    useEffect(()=>{
    console.log("Component Mounted");
    document.title=`count ${count}`;
    })
  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
    <button onClick={()=>setCount(count+1)}> value {count}</button>
    </div>
  )
}

export default UseEffectHooks
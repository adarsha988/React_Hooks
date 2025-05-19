import React, { useEffect } from 'react'

function FunctionalComponentEffect() {
    const [count,setCount]= React.useState(0);
    const[query,setQuery]=React.useState("");

useEffect(()=>{
    console.log("Component Mounted");
    document.title=`count ${count}`;
  
},[count])
  return (
    <div>
        <label style={{textAlign:"center", marginTop:"20px"}}>Count: {count}</label>
        <input type='text' style={{textAlign:"center"}} value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default FunctionalComponentEffect
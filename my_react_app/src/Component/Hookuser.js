import React, { useState } from 'react'
import useCustomhook from './Customhook/Customhook';

export default function Hookuser() {
   const[count,setCount]=useState(0);
   useCustomhook(count);
  return (
    <div>
        <div>count:{count}</div>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

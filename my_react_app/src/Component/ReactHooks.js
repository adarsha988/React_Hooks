import React, { use, useEffect } from 'react'

function ReactHooks() {
    const [count, setCount] = React.useState(0);
const functional=()=>{
    setCount(prev => prev + 1);
}
    useEffect(()=>{
       const time=setInterval(functional,1000);

       return ()=>{
        clearInterval(time)
       }
    
    }, [count]);

  return (
    <div>{count}</div>
  )
}

export default ReactHooks
import {React,useState }from 'react'

function FunctionalComponent() {
    const [count, setCount] = useState(0);
    const Increment = () => {
        for(let i=0; i<5; i++){
            setCount(count=>count+1)
    }}

  return (
    <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button> 
        <button onClick={() => setCount(count - 1)}>Decrement</button> 
        <button onClick={Increment}>Increment 5</button> 
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default FunctionalComponent
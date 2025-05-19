import React from 'react'
import UseCounterReducer from '../CounterReducer'

function ComponentA() {
   const {dispatch,count}=UseCounterReducer()
   console.log(count)

  return (
    <div>
        <label>Count: {count}</label>
        <hr/>
     <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
     <br/>
    </div>
  )
}

export default ComponentA
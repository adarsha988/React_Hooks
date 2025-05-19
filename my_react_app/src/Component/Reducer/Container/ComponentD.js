import React from 'react'
import UseCounterReducer from '../CounterReducer'

function ComponentD() {
     const {dispatch}=UseCounterReducer();
  
    return (
      <div>
          
       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      </div>
    )
}

export default ComponentD
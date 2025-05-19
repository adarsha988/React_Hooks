import React from 'react'
import UseCounterReducer from '../CounterReducer'

function ComponentF() {
    const {dispatch}=UseCounterReducer()
 
   return (
     <div>
        <br/>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
     </div>
   )
}

export default ComponentF
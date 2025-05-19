import{ React,useReducer }from 'react'

const initialState={
    firstCounter:0,
    secondCounter:0
}

const reducer=(state,action)=>{

    switch(action.type){
        case "increment":
        return {...state,firstCounter:state.firstCounter +  action.value}
        case "decrement":
        return {...state,firstCounter:state.firstCounter-action.value}
        case "increment2":
        return {...state,secondCounter:state.secondCounter+action.value}
        case "decrement2":
        return {...state,secondCounter:state.secondCounter-action.value}
        case "reset":
        return {...state,secondCounter:initialState.secondCounter ,firstCounter:initialState.firstCounter}
        default:
        return state;
    }

}

function CounterTwo() {
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
          <label>firstCounter</label><h1>{count.firstCounter}</h1>  <hr/>
          <label>firstCounter</label> <h1>{count.secondCounter}</h1>
        
         
        <br/>
        <button onClick={()=>dispatch({type:"increment",value:1})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
        <br/>
        <button onClick={()=>dispatch({type:"increment2",value:1})}>increment2</button>
        <button onClick={()=>dispatch({type:"decrement2",value:1})}>decrement2</button>
        <button  onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default CounterTwo
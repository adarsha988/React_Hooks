import React, { Children, createContext, useContext, useReducer } from 'react'



export const ContextUse= createContext(null);
const initialState=0;
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        default :
            return state
    }
}

export const ContextProvider=({children})=>{
    const [count,dispatch]=useReducer(reducer,initialState)
    const result="hello"

    return(
        <ContextUse.Provider value={{count,result,dispatch}}>
        {children}
        </ContextUse.Provider>
    )

}




function UseCounterReducer() {

const context= useContext(ContextUse);
if(!context){
    throw new Error("The Component is not wrap  with Provider")
}

 return context
}

export default UseCounterReducer;
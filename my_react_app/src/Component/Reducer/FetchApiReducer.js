import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const initialState={
    loading:true,
    data:[],
    error:""
}
const reducer =(state,action)=>{
    
    
    switch(action.type){
        case "FECTH_API_SUCCESS":
            return {
                
                loading:false,
                data:action.payload,
                error:""
            }
        case "FECTH_API_FAILED":
            return{
                
                loading:false,
                data:[],
                error:"something went wrong"
            }
        default :
            return state

    }

}
function FetchApiReducer() {
 
    const [state,dispatch]= React.useReducer(reducer,initialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
           
             dispatch({type:"FECTH_API_SUCCESS",payload:response.data})
        })
        .catch((error)=>{
            dispatch({type:"FECTH_API_FAILED"})
            
        })
    },[])
  return (
    <div>
{
    state.loading ? "...loading": state.data.title
}
    </div>
  )
}

export default FetchApiReducer
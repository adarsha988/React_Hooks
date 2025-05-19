import React, { Children, useContext } from 'react'
import './Style.css'

 const usContext=React.createContext(null);
export function Contextuse({children}) {

   

  return (
   <usContext.Provider value={{name:"hello"}}>
   {children}
   </usContext.Provider>
  )
}



export const useFormContext=()=>{

  const context = useContext(usContext);
return context;
}
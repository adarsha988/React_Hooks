import React, { createContext,useContext,useState } from 'react'


const themeContext=createContext(null);



export function ThemeChange() {
    const[theme,setTheme]=useState("dark")
  return (
    <themeContext.Provider value={theme}>
      <Form/>
      <label>
        <button
        onClick={()=>setTheme(theme==="dark"? "light":"dark")}>Toggle</button>
         <br/>
        Toogle theme
      </label>
    </themeContext.Provider>
  )
}

const Form=({children})=>{

    return(
<Panel title="Welcome">
    <Button>login</Button>
    <Button>signup</Button>
</Panel>
    )
}
const Panel=({children,title})=>{
    const theme= useContext(themeContext)
    const className= 'panel-'+theme
    return (
        <section className={className}>
             <h1>{title}</h1>
        {children}
        </section>
   
      
    )

}
const Button=({children})=>{
const theme=useContext(themeContext);
const className='button-'+theme;
    return (
        <button className={className}>{children}</button>
    )

}
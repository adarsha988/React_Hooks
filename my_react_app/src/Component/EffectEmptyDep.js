import React, { useEffect,useState } from 'react'

function EffectEmptyDep() {
  const [X,setX]= useState(0);
  const [Y,setY]= useState(0);
const handleMouseMove=(e)=>{
    setX(e.clientX);
    setY(e.clientY);}

  useEffect(()=>{
    console.log("Component Mounted");
    window.addEventListener("mousemove",handleMouseMove);
    return(()=>{
      window.removeEventListener("mousemove",handleMouseMove);
      console.log("Component Unmounted");
    })
  },[])

  return (
    <div>
<h1 style={{textAlign:"center", marginTop:"20px"}}>X: {X} Y: {Y}</h1>
    </div>
  )
}

export default EffectEmptyDep
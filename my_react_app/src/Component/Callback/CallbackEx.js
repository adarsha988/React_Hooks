import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function CallbackEx() {
const [age,setAge]=useState(20);
const [salary,setSalary]=useState(2000)

const incrementAge= useCallback(()=>{
setAge(prev=>prev+1)
},[age])
const incrementSalary=useCallback(()=>{
 setSalary(prev=>prev+1000)
},[salary])
  return (
    <div>
<Title  title={"Welcome"}/>
<Count text={age}> person age :</Count>
<Button handleClick={incrementAge}> incrementAge</Button>
<Count  text={salary}>person salary:</Count>
<Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default CallbackEx
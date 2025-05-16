import React from 'react'

export default function UseStateArray() {
const [array, setArray] = React.useState([]);
const updateArray = (newArray) => {{
    const newValue= Math.floor(Math.random()*10)+1
    setArray([...array, {value:newValue,id:array.length}])
}}
  return (
    <div>
        <button onClick={updateArray}>Add Random Number</button>
        <ul>
            {
                array.map((item)=>(
                    <li key={item.id}>{item.value}</li>
                ))
            }

        </ul>
        
    </div>
  )
}

import axios from "axios";
import { useEffect,useState } from "react";

function ButtonClickApi() {
    const [data,setData]=useState({})
    const [id,setId]=useState(0);
    const [buttonClickId,setButtonClickId]=useState(1);

    const handleChange=()=>{
        setButtonClickId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)})
        },[buttonClickId])
   
  return (
    <div>
    <input type="number" onChange={(event)=>setId(Number(event.target.value))}/>
    <button onClick={handleChange}>Click Me</button>
    <br/>
    <ul>
       
           <li key={data.id}>
                <h1>{data.title}</h1>
            </li>
    
    </ul>
    </div>
  )
}

export default ButtonClickApi
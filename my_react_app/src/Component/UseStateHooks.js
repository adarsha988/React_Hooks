import{ useState,React }from 'react'

function UseStateHooks() {
    const [count, setCount] = useState({firstName:"", lastName:""});

  return (
    <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>First Name: {count.firstName}</h1>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>lastName: {count.lastName}</h1>
        <input type="text" style={{textAlign:"center", marginTop:"20px", marginLeft:"500px"}} value={count.firstName} onChange={(e) => setCount({...count, firstName:e.target.value})} />
        <input type="text"style={{textAlign:"center", marginTop:"20px"}}value={count.lastName} onChange={(e) => setCount({...count, lastName:e.target.value})} />
    </div>
  )
}

export default UseStateHooks
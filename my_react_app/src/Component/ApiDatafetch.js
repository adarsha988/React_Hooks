import React, { useEffect} from 'react'
import axios from 'axios';

function ApiDatafetch() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        setData(response.data);
      })
      .catch((error)=>{
        console.error("Error fetching data: ", error);
      })
        

    })
  return (
    <div>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ApiDatafetch
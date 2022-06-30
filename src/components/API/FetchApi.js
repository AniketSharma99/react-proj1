import React from 'react'
import { useState } from 'react';
 function FetchAPI() {
    const [data,setData] = useState([])
    const apiGet=()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((response)=> {
    console.log(response);
    setData(response)
})

    }
  return (
    <div>FetchApi <br/>
    <button onClick={apiGet}>Fetch API</button>
    {
        data.map((value) => {
            return <h1>{value.title}</h1>
        })
    }
    </div>
  )
}
export default FetchAPI;
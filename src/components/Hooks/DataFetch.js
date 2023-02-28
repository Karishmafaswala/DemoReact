import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetch() {

    const[post, setPosts] = useState({})
    const[id, setId] =useState(1)
    const[buttonclick ,setButtonclick] =useState(1)

    const handleClick = e =>{
        setButtonclick(id)

    } 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclick}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[buttonclick])

  return (
    <div>
      <input type="" value={id} onChange = {e => setId(e.target.value)}/>

      <button onClick={handleClick}>Fetch Data</button>
        <h4>ID : {post.id}</h4>
        <h4>Title : {post.title}</h4>
      {/* <ul>
        {post.map(posts =>  (
            <li key={posts.id}>{posts.title}</li>
        ))}
      </ul> */}

    </div>
  )
}



export default DataFetch

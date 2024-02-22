import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const[post,setpost]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setpost(posts))

  }, [])

  return  <div className="App">

  <h1 className="App-header">Fetch Api data</h1>
  {post.map((post)=>
  <div> 
  <h1 className="text-info"> {post.title} </h1>
  <p1>{post.body}</p1>
  </div>
  )}
    </div>;

 
  
}

export default App

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Create() {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');
  const[author, setAuthor]= useState('Neha');
  const[isPending, setIsPending]= useState(true);
  const navigate = useNavigate();
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title, body, author};
    setIsPending(false);
    
    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }
    ).then(()=>{
    console.log("New Blog Added")
    setIsPending(false);
    navigate('/');
    
  }).catch(err=>{
    console.log("Blog not added" + err);
  })
   
  }
  
  return (
    <div className='create'>
       <h2> Add a New Blog</h2>
       <form onSubmit={handleSubmit}>
        <label>Blog Title:
          <input type ="text" required
          onChange={(e)=> setTitle(e.target.value)}/>
        </label>
        <label> Blog Body: </label>
        <textarea type="text" required
        onChange={(e)=> setBody(e.target.value)}/>
        <label>Blog Author: 
          <select onChange={(e)=> setAuthor(e.target.value)}>
          <option value="Neha">Neha</option>
          <option value="Rahul">Rahul</option>
          <option value="Tina">Tina</option>
          <option value="Vikas">Vikas</option>
          <option value="Jiya">Jiya</option>
          </select>
        </label>
        {isPending && <button>Add Blog</button>}
        {!isPending && <button>Adding Blog</button>}
       </form>
    </div>
  )
}

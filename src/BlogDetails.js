import React from "react";
import { useParams } from "react-router-dom";
import useFetch  from './useFetch';
import { useNavigate } from 'react-router-dom';


export default function BlogDetails()
{
  const { id } = useParams();
  const { error, isPending, data: blog} = useFetch('http://localhost:8000/blogs/' + id);
  console.log(blog);
  const navigate = useNavigate();
 
 

  const handleDelete = ()=>
{
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method: 'DELETE',})
      .then(()=>{
          console.log("Blog Deleted");
          navigate('/');
      })
    }
  return (
    <div className="blog-details">
     { isPending && <div> Loading...</div>}
     { error && <div> {error }</div>}
     { blog &&(
      <article className="spacing">
        <h2>{blog.title}</h2>
        <p><h4>Written by {blog.author}</h4></p>
        <div className="blog-body">{blog.body}</div>
      <button onClick = {handleDelete}>Delete Blog</button>
      </article>
     )}
     
    </div>
  );
}

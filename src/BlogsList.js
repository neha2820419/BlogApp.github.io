import React from "react";
import { Link } from "react-router-dom";


export default function BlogsList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <Link to={`blogs/${blogs.id}`}>
            <h2>{blogs.title}</h2>
            <p><h4>Written by - {blogs.author}</h4></p>
          </Link>
        </div>
      ))}
    </div>
  )
}

 

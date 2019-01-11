import React from 'react'
import * as Markdown from 'react-markdown'
import 'bulma/css/bulma.css'


const BlogPostTeaser = (props) => (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.icon} alt="Image" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
     


        <h1> {props.title} </h1>
       <p> Just the beginning </p>
      </div>
      
    </div>
  </article>
)
export default BlogPostTeaser
import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import '../css/link.css';
import '../css/box.css';
import '../css/title.css';
import { Link } from 'react-router-dom'

const BlogItem = (props) => (
  <div className="box">
    
    <article className="media">

    <div className="media-left">
      <figure className="image is-96x96 icon">
        <img class="is-rounded" src={props.icon} alt="Image" />
      </figure>
    </div>

    <div className="media-content">
      <div className="content">
     
      {/* This is a comment   */}

      <Link
  to={{
    pathname: `/blog/${props.path}`,
    state: { props }
  }}
>
        
<h1 className="articleTitle" > {props.title} </h1>
        <p> {props.subtitle}</p> 

        <figure className="image is-3by1">
        <img src={props.image} alt="Image" />       
      </figure>

      
     </Link>
      </div>
      
    </div>
  </article>


      <center>
    <Link className="level-item button is-link is-outlined link"
  to={{
    pathname: `/blog/${props.path}`,
    state: { props }
  }}
>
  Read Post
</Link>
</center>
  </div>
)
export default BlogItem
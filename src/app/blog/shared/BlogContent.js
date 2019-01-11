import React from 'react'
import * as Markdown from 'react-markdown'
import 'bulma/css/bulma.css'


const BlogContent = (props) => (
  <article className="media">




    <div className="media-left">
      <figure className="image is-96x96">
        <img class="is-rounded" src={props.icon} alt="Image" />
      </figure>
    </div>

    <div className="media-content">
      <div className="content">
     
      <figure className="image is-2by1">
        <img src="https://pixel.nymag.com/imgs/daily/vulture/2018/04/16/16-stephen-colbert.w1200.h630.jpg" alt="Image" />
      </figure>



        <h1> {props.title} </h1>
       <p> {props.body} </p>
      </div>
      
    </div>
  </article>
)
export default BlogContent
import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'i5oq71qolaw0',
    accessToken: '0a69b315b5ae7e3c5cc3ba103f6ae0807282543556bc0f7fdf5e7be66f24f25c'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
   
console.log(this.state.posts[3].fields.title);

  }
  render() {
    return (
      <div>
     
        
      <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Daniel Olivieri's Blog
      </h1>
      <h2 class="subtitle">
        Literature <sup>Raised to the Power of Code</sup>
      </h2>
    </div>
  </div>
</section>


     
      <br/>
      <center>
           { this.state.posts.map(({fields}, i) =>
             <BlogItem
             title={this.state.posts[i].fields.title}
             body={this.state.posts[i].fields.body}
             icon={this.state.posts[i].fields.icon}
             path={this.state.posts[i].fields.slug}
             subtitle={this.state.posts[i].fields.subtitle}  
             image={this.state.posts[i].fields.featuredImage.fields.file.url}                        
             key={i}
             >
            {this.state.posts[i].fields.title}

             </BlogItem>
           )}
           </center>
      </div>
    )
  }
}
export default Blog

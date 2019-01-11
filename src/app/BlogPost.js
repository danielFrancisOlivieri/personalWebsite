import React from 'react'
import PageContent from './components/PageContent'
import BlogNav from './blog/shared/BlogNav'
import BlogContent from './blog/shared/BlogContent'
const BlogPost = ({ location: { state: { props } }}) => (
  <PageContent>
    <BlogNav date={props.date} to="/blog" />
    <BlogContent {...props } />
  </PageContent>
)
export default BlogPost
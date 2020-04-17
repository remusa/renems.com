import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            tags
            language
            type
          }
          timeToRead
          wordCount {
            words
          }
          html
        }
        next {
          frontmatter {
            path
            title
          }
        }
        previous {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const TYPE = 'BLOG'
  const blogEntries = data.allMarkdownRemark.edges.filter(
    post => post.node.frontmatter.type === TYPE,
  )

  return (
    <Layout>
      <SEO title='Blog' keywords={[`blog`]} />

      <h1>Latest Posts</h1>

      {blogEntries.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>

          <small>Posted on {post.node.frontmatter.date}</small>

          <br />

          <Link to={post.node.frontmatter.path}>Read More</Link>

          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage

import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            tags
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

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title='Blog' keywords={[`blog`]} />

    <h1>Latest Posts</h1>

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>

        <small>
          Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>

        <br />

        <Link to={post.node.frontmatter.path}>Read More</Link>

        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export default BlogPage

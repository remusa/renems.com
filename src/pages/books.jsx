import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const bookQuery = graphql`
  query BookIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
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
            book_author
            title_full
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

const BookPage = ({ data }) => {
  const TYPE = 'BOOK'
  const bookEntries = data.allMarkdownRemark.edges.filter(
    post => post.node.frontmatter.type === TYPE,
  )

  return (
    <Layout>
      <SEO title='Books' keywords={[`books`]} />

      <h1>Notes</h1>

      {bookEntries.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>

          <small>Book author: {post.node.frontmatter.book_author}</small>

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

export default BookPage

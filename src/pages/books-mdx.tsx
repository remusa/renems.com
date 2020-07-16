import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import React from 'react'

export const bookQuery = graphql`
  query BookIndexQueryMdx {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          # excerpt
          # html
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
          fields {
            slug
          }
          timeToRead
          wordCount {
            words
          }
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

interface BookEntriesInterface {
  data: any
}

const BookPage: React.FC<BookEntriesInterface> = ({ data }) => {
  const bookEntries = data.allMdx.edges.filter(post => post.node.frontmatter.type === 'BOOK')

  return (
    <Layout>
      <SEO title='Books' keywords={[`books`]} />

      <h1>Notes</h1>

      {bookEntries.map(post => {
        const {
          id,
          frontmatter: { title, date, path, tags, excerpt, book_author },
          fields: { slug },
        } = post.node

        return (
          <div className='post' key={id}>
            <h2>{title}</h2>

            <small>Book author: {book_author}</small>

            <br />

            <Link to={path}>Read More</Link>

            <br />
            <br />
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default BookPage

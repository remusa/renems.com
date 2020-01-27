import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        author
        date
        tags
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
  }
`

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { type } = post.frontmatter
  const { previous, next } = pageContext
  const {
    frontmatter,
    timeToRead,
    wordCount: { words },
    html,
  } = post

  const prevArticle = previous && (
    <Link to={previous.frontmatter.path} style={{ maxWidth: '25%', textAlign: 'left' }}>
      <strong>Previous Article</strong> <br />
      {previous.frontmatter.title}
    </Link>
  )

  const nextArticle = next && (
    <Link to={next.frontmatter.path} style={{ maxWidth: '25%', textAlign: 'right' }}>
      <strong>Next Article</strong> <br />
      {next.frontmatter.title}
    </Link>
  )

  return (
    <div>
      {type === 'BLOG' && <Link to='/blog'>Go Back</Link>}
      {type === 'BOOK' && <Link to='/books'>Go Back</Link>}

      <hr />
      <h1>{frontmatter.title_full ? frontmatter.title_full : frontmatter.title}</h1>
      <h3>
        Time to read: {timeToRead} minutes ({words} words)
      </h3>
      <h4>
        Posted by {frontmatter.author} on {frontmatter.date}
      </h4>
      <ul>{frontmatter.tags && frontmatter.tags.map(tag => <li>{tag}</li>)}</ul>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Buttons>
        <span>{previous && prevArticle}</span>
        <span>{next && nextArticle}</span>
      </Buttons>
    </div>
  )
}

export default Template

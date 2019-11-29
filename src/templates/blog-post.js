import { graphql, Link } from 'gatsby'
import React from 'react'

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        author
        date
        tags
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
  const {
    frontmatter,
    timeToRead,
    wordCount: { words },
    html,
  } = post
  const { next, previous } = pageContext
  const nextArticle = next && (
    <Link to={next.frontmatter.path} style={{ maxWidth: '25%' }}>
      <strong>Next Article</strong> <br />
      {next.frontmatter.title}
    </Link>
  )

  const prevArticle = previous && (
    <Link to={previous.frontmatter.path} style={{ maxWidth: '25%' }}>
      <strong>Previous Article</strong> <br />
      {previous.frontmatter.title}
    </Link>
  )

  return (
    <div>
      <Link to='/blog'>Go Back</Link>
      <hr />
      <h1>{frontmatter.title}</h1>
      <h3>
        Time to read: {timeToRead} minutes ({words} words)
      </h3>
      <h4>
        Posted by {frontmatter.author} on {frontmatter.date}
      </h4>
      <ul>
        {frontmatter.tags &&
          frontmatter.tags.map(tag => {
            return <li>{tag}</li>
          })}
      </ul>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      {prevArticle}
      {nextArticle}
    </div>
  )
}

export default Template

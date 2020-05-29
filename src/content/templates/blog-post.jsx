import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'

const StyledArticle = styled.article`
  --yellow: #ffc600;
  /* font-size: 20px; */
  max-width: 960px;

  p {
    font-size: 1.6rem;
    line-height: 1.8;
  }

  img {
    max-width: 100%;
  }

  a {
    color: black;
    text-decoration: underline wavy var(--yellow);
  }

  h1,
  h2 {
    /* font-size: 3rem; */
    font-style: bold;
    /* margin: 0; */
  }

  .post {
    display: grid;
    max-width: 960px;
    margin: 200px auto;
    grid-gap: 10px 50px;
    grid-template-columns: 3fr 12fr 5fr;
  }

  .post > * {
    grid-column: 2 / -2;
  }

  .post > figure {
    margin: 0;
    grid-column: 1 / -1;
  }

  figcaption {
    font-size: 10px;
  }

  .post > blockquote {
    grid-column: 1 / -1;
    font-size: 60px;
    font-style: italic;
    text-align: center;
    margin: 0;
  }

  .tip {
    background: #fafafa;
    padding: 10px;
    grid-row: span 5;
    align-self: start;
  }

  .tip-left {
    grid-column: 1 / span 1;
    text-align: right;
    border-right: 2px solid var(--yellow);
  }

  .tip-right {
    grid-column: span 1 / -1;
    border-left: 2px solid var(--yellow);
  }

  .time {
    font-style: italic;
  }

  ul.tags {
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      display: inline-block;
      padding: 4px 8px;
      margin-right: 4px;
      border-radius: 3px;
      border: 1px solid var(--color-primary);
    }
  }
`

const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  color: white;
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
        # title_full
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
    <Link
      to={previous.frontmatter.path}
      style={{ maxWidth: '25%', textAlign: 'left' }}
    >
      <strong>Previous Article</strong> <br />
      {previous.frontmatter.title}
    </Link>
  )

  const nextArticle = next && (
    <Link
      to={next.frontmatter.path}
      style={{ maxWidth: '25%', textAlign: 'right' }}
    >
      <strong>Next Article</strong> <br />
      {next.frontmatter.title}
    </Link>
  )

  const goBack = () => {
    if (type === 'BLOG') return <Link to='/blog'>Go Back</Link>
    if (type === 'BOOK') return <Link to='/books'>Go Back</Link>
    console.log('type', type)
  }

  return (
    <Layout>
      <StyledArticle className='post'>
        {goBack}

        <h1>
          {/* {frontmatter.title_full ? frontmatter.title_full : frontmatter.title} */}
          {frontmatter.title}
        </h1>

        <ul className='tags'>
          {frontmatter.tags && frontmatter.tags.map(tag => <li>{tag}</li>)}
        </ul>

        <p className='info'>
          Posted by {frontmatter.author} on {frontmatter.date}
        </p>

        <p className='time'>
          Time to read: {timeToRead} minutes ({words} words)
        </p>

        <hr />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Buttons>
          <span>{previous && prevArticle}</span>
          <span>{next && nextArticle}</span>
        </Buttons>
      </StyledArticle>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export default Template
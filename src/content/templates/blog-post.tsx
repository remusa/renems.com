import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const StyledArticle = styled.article`
  max-width: 760px;

  ul.tags {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0.5rem 0.75rem;
      margin-right: 4px;
      border-radius: 3px;
      border: 1px solid var(--primary);
      color: var(--white);
      font-size: 1.5rem;

      &:hover {
        background: var(--primary);
      }
    }
  }

  .post {
    display: grid;
    max-width: 960px;
    margin: 200px auto;
    grid-gap: 10px 50px;
    grid-template-columns: 3fr 12fr 5fr;

    .content::before {
      content: '';
      display: block;
      width: 100%;
      padding: 2rem 0 0 0;
      border-bottom: 1px solid var(--primary);
    }

    & > a {
      color: var(--primary);
      text-decoration: underline wavy var(--primary);

      &:hover {
        color: var(--coral);
        text-decoration: underline wavy var(--coral);
      }
    }

    img {
      max-width: 100%;
    }

    a,
    p,
    ul > li {
      line-height: 1.75;
      font-size: 2rem;
    }

    & > * {
      grid-column: 2 / -2;
    }

    figure {
      margin: 0;
      grid-column: 1 / -1;
    }

    figcaption {
      font-size: 10px;
    }

    blockquote {
      grid-column: 1 / -1;
      font-size: 60px;
      font-style: italic;
      text-align: center;
      margin: 0;
    }

    .time {
      font-style: italic;
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

    a.back-btn {
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.15;
      border: 1px solid var(--primary);
      transition: var(--transitionThreeMs);
      cursor: pointer;

      &:hover {
        background-color: var(--primary);
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  a {
    color: white;
    text-decoration: none;
    width: 200px;
    height: 35px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    border: 1px solid var(--primary);
    border-radius: 3px;
    padding: 8px 12px;
    transition: var(--transitionThreeMs);

    &:hover {
      color: var(--white);
      background-color: var(--primary);
    }
  }
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

const Template: React.FC<{
  data: any
  pageContext: any
}> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { type } = post.frontmatter
  const { previous, next } = pageContext
  const {
    frontmatter,
    timeToRead,
    wordCount: { words },
    html,
  } = post

  const prevArticle = previous ? (
    <Link to={previous.frontmatter.path} className='previous'>
      <strong>Previous</strong>
      <br />
      {previous.frontmatter.title}
    </Link>
  ) : null

  const nextArticle = next ? (
    <Link to={next.frontmatter.path} className='next'>
      <strong>Next</strong>
      <br />
      {next.frontmatter.title}
    </Link>
  ) : null

  const goBackBtn = () => {
    if (type === 'BLOG')
      return (
        <Link className='back-btn' to='/blog'>
          Go Back
        </Link>
      )
    if (type === 'BOOK')
      return (
        <Link className='back-btn' to='/books'>
          Go Back
        </Link>
      )
  }

  const title = frontmatter.title_full ? frontmatter.title_full : frontmatter.title

  return (
    <Layout>
      <StyledArticle className='post'>
        {goBackBtn()}

        <h1>{title}</h1>
        <ul className='tags'>{frontmatter.tags && frontmatter.tags.map(tag => <li>{tag}</li>)}</ul>
        <p className='info'>
          {frontmatter.date}, by {frontmatter.author}
        </p>
        <p className='time'>
          Time to read: {timeToRead} minutes ({words} words)
        </p>

        <div className='content' dangerouslySetInnerHTML={{ __html: html }} />

        <Buttons>
          {prevArticle}
          {nextArticle}
        </Buttons>
      </StyledArticle>
    </Layout>
  )
}

export default Template

import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const Article = styled.article`
  max-width: 760px;

  .post-info {
    ul.tags {
      font-size: 1.5rem;
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

        &:hover {
          background: var(--primary);
        }
      }
    }

    .info-time-container {
      display: flex;
      justify-content: space-between;
      padding: 1.5rem 0 0 0;
      font-size: 1.5rem;
      font-style: italic;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      padding: 1.5rem 0 0 0;
      border-bottom: 3px solid var(--primary);
    }
  }
`

const BackButton = styled.a`
  padding: 0.5rem 0;
  color: var(--primary);
  font-size: 1.75rem;
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
  transition: var(--transitionThreeMs);

  &:hover {
    color: var(--coral);
    border-color: var(--coral);
  }
`

const PostContent = styled.div`
  width: auto;
  max-width: 960px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 1rem 1rem; */

  /* & > * {
    grid-column: 2 / -2;
  } */

  a {
    color: var(--primary);
    text-decoration: underline var(--primary);
    transition: var(--transitionThreeMs);

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
  li {
    /* font-size: 1.8rem; */
    /* line-height: 1.35; */
  }
`

const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  a {
    position: relative;
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
    <Link to={previous.frontmatter.path} tool-tips={previous.frontmatter.title}>
      <strong>Previous</strong>
      <br />
      {previous.frontmatter.title}
    </Link>
  ) : null

  const nextArticle = next ? (
    <Link to={next.frontmatter.path} tool-tips={next.frontmatter.title}>
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
      <Article>
        <BackButton>{goBackBtn()}</BackButton>

        <div className='post-info'>
          <h1>{title}</h1>
          <ul className='tags'>
            {frontmatter.tags && frontmatter.tags.map(tag => <li>{tag}</li>)}
          </ul>
          <div className='info-time-container'>
            <span className='author'>by {frontmatter.author}</span>
            <span className='date'>{frontmatter.date}</span>
            <span className='time'>
              {timeToRead} minute{timeToRead > 1 ? 's' : ''} ({words} words)
            </span>
          </div>
        </div>

        <PostContent className='content' dangerouslySetInnerHTML={{ __html: html }} />

        <Buttons>
          {prevArticle}
          {nextArticle}
        </Buttons>
      </Article>
    </Layout>
  )
}

export default Template

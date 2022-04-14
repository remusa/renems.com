import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const shortcodes = { Link } // Provide common components here

const Article = styled.article`
  max-width: 767px;

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

export const BackButton = styled.a`
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

const TemplateMdx: React.FC<{
  data: any
  pageContext: any
}> = ({ data: { mdx }, pageContext }) => {
  const { type } = mdx.frontmatter
  const { previous, next } = pageContext
  const {
    frontmatter,
    timeToRead,
    wordCount: { words },
    body,
  } = mdx
  const title = frontmatter.title_full ? frontmatter.title_full : frontmatter.title

  const prevArticle =
    previous && previous.frontmatter.published === true ? (
      <Link to={previous.frontmatter.path} tool-tips={previous.frontmatter.title}>
        <strong>Previous</strong>
        <br />
        {previous.frontmatter.title}
      </Link>
    ) : (
      <span />
    )

  const nextArticle =
    next && next.frontmatter.published === true ? (
      <Link to={next.frontmatter.path} tool-tips={next.frontmatter.title}>
        <strong>Next</strong>
        <br />
        {next.frontmatter.title}
      </Link>
    ) : (
      <span />
    )

  const goBackBtn = () => {
    let returnLink = '/'

    if (type.toLowerCase() === 'blog') {
      returnLink = '/blog'
    } else if (type.toLowerCase() === 'book') {
      returnLink = '/books'
    }

    return (
      <Link className="back-btn" to={returnLink}>
        Go Back
      </Link>
    )
  }

  return (
    <Layout>
      <Article>
        <BackButton>{goBackBtn()}</BackButton>

        <div className="post-info">
          <h1>{title}</h1>
          <ul className="tags">
            {frontmatter.tags && frontmatter.tags.map((tag) => <li>{tag}</li>)}
          </ul>
          <div className="info-time-container">
            <span className="author">by {frontmatter.author}</span>
            <span className="date">{frontmatter.date}</span>
            <span className="time">
              {timeToRead} minute{timeToRead > 1 ? 's' : ''} ({words} words)
            </span>
          </div>
        </div>

        <PostContent className="content">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </PostContent>

        <Buttons>
          {prevArticle}
          {nextArticle}
        </Buttons>
      </Article>
    </Layout>
  )
}

export default TemplateMdx

export const postQueryMdx = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      # query BlogPostByPath($path: String!) {
      # markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      body
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
        type
        book_author
        # title_full
        published
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`

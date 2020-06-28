import styled from '@emotion/styled'
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

const PostsLists = styled.div`
  margin-top: 4rem;
  transform: all 0.3s linear;

  .post {
    margin-bottom: 3rem;

    a:hover {
      color: var(--primary);
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      padding: 2.5rem 0 0 0;
      border-bottom: 1px solid var(--primary);
    }

    .date {
      font-style: italic;
    }

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
        font-size: 1.5rem;

        &:hover {
          background: var(--primary);
          color: var(--white);
        }
      }
    }
  }
`

const BlogPage: React.FC<{ data: any }> = ({ data }) => {
  const blogEntries = data.allMarkdownRemark.edges.filter(
    post => post.node.frontmatter.type === 'BLOG',
  )

  return (
    <Layout>
      <SEO title='Blog' keywords={[`blog`]} />

      <h1>Posts</h1>

      <PostsLists>
        {blogEntries.map(post => {
          console.log('post', post)
          const {
            id,
            frontmatter: { title, date, path, tags },
          } = post.node

          return (
            <div className='post' key={id}>
              <Link to={path}>
                <h2>{title}</h2>
              </Link>
              <p className='date'>Date: {date}</p>
              <ul className='tags'>
                {tags.map(tag => (
                  <li id='tag'>{tag}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </PostsLists>
    </Layout>
  )
}

export default BlogPage

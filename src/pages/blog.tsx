import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import kebabCase from 'lodash/kebabCase'

const PostsLists = styled.div`
  width: 80vw;
  max-width: 767px;
  margin-top: 4rem;
  transform: all 0.3s linear;

  ul.tags {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    li {
      padding: 0.35rem 0.65rem;
      margin-right: 4px;
      margin-bottom: 4px;
      border-radius: 5px;
      border: 1px solid var(--primary);
      font-size: 1.5rem;

      &:hover {
        background: var(--primary);
        color: var(--white);
      }
    }
  }

  .post {
    margin-bottom: 3rem;

    &::after {
      content: '';
      display: block;
      width: 100%;
      padding: 2.1rem 0 0 0;
      border-bottom: 1px solid var(--primary);
    }

    a:hover {
      color: var(--primary);
    }

    ul.post-tags {
      li {
        padding: 0.15rem 0.5rem;

        a {
          font-size: 1.35rem;

          &:hover {
            color: white;
          }
        }
      }
    }

    .date {
      font-style: italic;
    }

    .excerpt {
    }
  }
`

const BlogPage: React.FC<{ data: any }> = ({ data }) => {
  const blogEntries = data.postsData.edges.filter(
    post => post.node.frontmatter.type === 'BLOG' && post.node.frontmatter.published === true,
  )
  const { group } = data.tagsData

  return (
    <Layout>
      <SEO title='Blog' keywords={[`blog`]} />

      <h1>Posts</h1>

      <PostsLists>
        <ul className='tags'>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>

        {blogEntries.map(post => {
          const {
            id,
            excerpt,
            frontmatter: { title, date, path, tags },
            fields: { slug },
          } = post.node

          return (
            <div className='post' key={id}>
              <Link to={path}>
                <h2>{title}</h2>
              </Link>

              <p className='date'>Date: {date}</p>

              <p className='excerpt'>{excerpt}</p>

              <ul className='tags post-tags'>
                {tags.map(tag => (
                  <li id='tag'>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
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

export const pageQuery = graphql`
  query BlogIndexQuery {
    postsData: allMdx(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date
            author
            tags
            language
            type
            published
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
            published
          }
        }
        previous {
          frontmatter {
            path
            title
            published
          }
        }
      }
    }

    tagsData: allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

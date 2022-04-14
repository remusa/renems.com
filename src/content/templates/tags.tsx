import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'

const TagsStyles = styled.div`
  ul.posts-list {
    li {
      line-height: 1.5;

      a {
        font-size: 1.75rem;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .all-tags {
    display: block;
    margin: 0 auto;
    text-align: center;

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
  }
`

const TagsTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>

      <TagsStyles>
        <ul className="posts-list">
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>

        <Link className="all-tags" to="/tags">
          All tags
        </Link>
      </TagsStyles>
    </Layout>
  )
}

TagsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagsTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

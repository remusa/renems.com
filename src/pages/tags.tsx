import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const TagsList = styled.div`
  width: 80vw;
  max-width: 767px;
  margin-top: 4rem;
  transform: all 0.3s linear;

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
`

const TagsPage: React.FC<{ data: any }> = ({
  data: {
    allMdx: { group },
  },
}) => {
  return (
    <Layout>
      <SEO title='Tags' keywords={[`tags`]} />

      <h1>Tags</h1>

      <TagsList>
        <ul className='tags'>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </TagsList>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

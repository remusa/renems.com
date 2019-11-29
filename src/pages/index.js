import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import '../static/css/styles.scss'
import Featured from '../components/Featured'
import Contact from '../components/Contact'
import BasicInfo from '../components/BasicInfo'

const ArticleStyles = styled.article`
  text-align: center;
`

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs
  const { edges: featuredImgData } = data.FeaturedProjectImgs

  return (
    <Layout>
      <SEO
        title='index'
        description={data.description}
        keywords={[`blog`, `technology`, `react`]}
      />

      <ArticleStyles>
        <BasicInfo />
        <Featured projectImgs={featuredImgData} />
        <Projects projectImgs={projectImgData} />
        <Contact href='#contact' />
      </ArticleStyles>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allDataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    FeaturedProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import '../static/css/styles.scss'
import Featured from '../components/featured'
import Contact from '../components/contact'
import BasicInfo from '../components/basic-info'

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

      <article>
        <section id="basic-info" >
          <BasicInfo />
        </section>

        <section id="featured" >
        <Featured projectImgs={featuredImgData} />
        </section>

        <section id="projects" >
        <Projects projectImgs={projectImgData} />
        </section>

        <section id="contact" >
        <Contact />
        </section>
      </article>
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

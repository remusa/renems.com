import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'

export const PROJECTS_QUERY = graphql`
  query allProjectsQuery {
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
  }
`

const ProjectsPage = () => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const { edges: projectImgData } = data.ProjectImgs

  return (
    <Layout>
      <SEO title='Projects' keywords={[`projects`, `react`]} />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <Projects projectImgs={projectImgData} />
    </Layout>
  )
}

export default ProjectsPage

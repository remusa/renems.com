import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'

const ProjectsPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs

  return (
    <Layout>
      <SEO title='Projects' keywords={[`projects`, `react`]} />

      <h1>Projects</h1>

      <Projects projectImgs={projectImgData} />
    </Layout>
  )
}

export default ProjectsPage

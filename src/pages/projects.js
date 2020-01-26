import React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import useProjects from '../hooks/useProjects'

const ProjectsPage = () => {
  const projectImgs = useProjects()

  return (
    <Layout>
      <SEO title='Projects' keywords={[`projects`, `react`]} />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <Projects projectImgs={projectImgs} />
    </Layout>
  )
}

export default ProjectsPage

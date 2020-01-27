import { graphql, useStaticQuery } from 'gatsby'
import projectList from '../data/projects.json'

const PROJECTS_QUERY = graphql`
  query featuredProjectsImagesQuery {
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`

const useProjects = () => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const allProjects = projectList
  const featuredProjects = allProjects.filter(project => project.featured)

  const { edges: projectImgs } = data.ProjectImgs

  return { projectImgs, allProjects, featuredProjects }
}

export default useProjects

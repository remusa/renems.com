import { graphql, useStaticQuery } from 'gatsby'

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
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
            # sizes(maxWidth: 500) {
            #   ...GatsbyImageSharpSizes
            # }
          }
        }
      }
    }
  }
`

const useProjects = () => {
  const data = useStaticQuery(PROJECTS_QUERY)

  const { edges: projectImgs } = data.ProjectImgs
  return projectImgs
}

export default useProjects

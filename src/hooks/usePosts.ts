import { useStaticQuery, graphql } from 'gatsby'

const POSTS_QUERY = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            date
            path
            author
            title
          }
          timeToRead
          tableOfContents
          exports {
            metadata {
              name
              path
            }
          }
        }
      }
    }
  }
`

const usePosts = (): void => {
  // const data = useStaticQuery(POSTS_QUERY)

  // return data.allMdx.nodes.map(post => ({
  //   title: post.frontmatter.title,
  //   author: post.frontmatter.author,
  //   slug: post.frontmatter.slug,
  //   excerpt: post.excerpt,
  // }))
  return
}

export default usePosts

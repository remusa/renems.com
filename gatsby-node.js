const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/content/templates/blog-post.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
              tags
            }
            timeToRead
            wordCount {
              words
            }
            html
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPost,
        context: {
          next,
          previous,
        },
      })
    })
  })
}

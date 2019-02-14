// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions

//     const blogPost = path.resolve(`./src/templates/blog-post.js`)

//     return graphql(`
//         {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         html
//                         id
//                         frontmatter {
//                             path
//                             title
//                             date
//                             author
//                         }
//                     }
//                 }
//             }
//         }
//     `).then(res => {
//         if (res.errors) {
//             return Promise.reject(res.errors)
//         }

//         res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             createPage({
//                 path: node.frontmatter.path,
//                 component: blogPost,
//             })
//         })
//     })
// }

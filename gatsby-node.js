const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      // value: `/blog${value}`,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/content/templates/blog-post.tsx`)
  const tagTemplate = path.resolve('src/content/templates/tags.tsx')

  const result = await graphql(`
    {
      postsRemark: allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              path
              title
              date
              author
              tags
              type
              book_author
              title_full
              published
            }
            #fields {
            #  slug
            #}
            timeToRead
            wordCount {
              words
            }
          }
          next {
            frontmatter {
              path
              title
              published
            }
          }
          previous {
            frontmatter {
              path
              title
              published
            }
          }
        }
      }

      tagsGroup: allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    // reporter.panicOnBuild(`🚨  Error while running GraphQL query.`)
    // return
    return Promise.reject(result.errors)
  }

  // Create blog post pages.
  const posts = result.data.postsRemark.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node, next, previous }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      // path: node.fields.slug,
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: blogPostTemplate,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, previous },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

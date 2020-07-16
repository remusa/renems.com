module.exports = {
  siteMetadata: {
    title: `_R`,
    author: `René M.S.`,
    description: `Engineer, developer, life-long learner.`,
    siteUrl: 'https://renems.com',
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/content/posts`,
    //   },
    // },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/content/templates/blog-post.tsx'),
        },
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [],
        gatsbyRemarkPlugins: [
          //   'gatsby-remark-embed-gist',
          //   'gatsby-remark-copy-linked-files',
          //   `gatsby-remark-embedder`,
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     //       backgroundColor: '#fafafa',
          //     maxWidth: 1000,
          //     linkImagesToOriginal: false,
          //     //       // showCaptions: true,
          //     disableBgImage: true,
          //   },
          // },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#00bcd4`,
    //     theme_color: `#00bcd4`,
    //     display: `minimal-ui`,
    //     icon: `src/images/logo.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: false,
    //   },
    // },
    //  {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-130227707-1`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'René M.S. | renems.com',
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}

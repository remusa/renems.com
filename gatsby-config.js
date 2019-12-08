module.exports = {
  siteMetadata: {
    title: `_R`,
    author: `RMS`,
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
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00bcd4`,
        theme_color: `#00bcd4`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
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
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             const siteUrl = site.siteMetadata.siteUrl;
    //             const postText = `
    //             <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at overreacted.io. You can read it online by <a href="${siteUrl +
    //               edge.node.fields.slug}">clicking here</a>.)</div>
    //           `;

    //             let html = edge.node.html;
    //             // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
    //             html = html
    //               .replace(/href="\//g, `href="${siteUrl}/`)
    //               .replace(/src="\//g, `src="${siteUrl}/`)
    //               .replace(/"\/static\//g, `"${siteUrl}/static/`)
    //               .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.spoiler,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': html + postText }],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //               filter: {fields: { langKey: {eq: "en"}}}
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   html
    //                   fields {
    //                     slug
    //                   }
    //                   frontmatter {
    //                     title
    //                     date
    //                     spoiler
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Dan Abramov's Overreacted Blog RSS Feed",
    //       },
    //     ],
    //   },
    // },
  ],
}

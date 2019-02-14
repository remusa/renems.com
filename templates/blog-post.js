import { graphql, Link } from 'gatsby-link';
import React from 'react';

class BlogPostTemplate extends React.Component {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
        <Layout location={this.props.location} title={siteTitle}>
            <SEO title={post.frontmatter.title} description={post.excerpt} />

            <Link to='/blog'>Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>
                Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </La>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

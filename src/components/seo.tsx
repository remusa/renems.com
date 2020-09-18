import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const DETAILS_QUERY = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

interface Props {
  description?: string
  lang?: string
  meta?: { name: string; content: any; property?: undefined }
  keywords?: string[]
  title?: string
}

const SEO: React.FC<Props> = ({ description, lang = `en`, meta = [], keywords = [], title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(DETAILS_QUERY)
  const metaDescription = description || siteMetadata.description

  const meta2 = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
    .concat(
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : [],
    )
    .concat(meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={meta2}
    />
  )
}

export default SEO

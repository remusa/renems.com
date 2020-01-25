import AOS from 'aos'
import 'aos/dist/aos.css'
import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import BasicInfo from '../components/basic-info'
import Contact from '../components/contact'
import Featured from '../components/featured'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Tech from '../components/tech'
import '../static/css/styles.scss'

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs
  // const { edges: techImgData } = data.TechImgs

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <Layout>
      <SEO
        title='index'
        description={data.description}
        keywords={[`blog`, `technology`, `react`]}
      />

      <article>
        <section id='basic-info'>
          <BasicInfo />
        </section>

        {/* <section id='tech'>
          <Tech techImgs={techImgData} />
        </section> */}

        <section id='featured'>
          <Featured projectImgs={projectImgData} />
        </section>

        {/* <section id='projects'>
          <Projects projectImgs={projectImgData} />
        </section> */}

        <section id='contact'>
          <Contact />
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allDataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

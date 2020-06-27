import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import BasicInfo from '../components/basic-info'
import Contact from '../components/contact'
import Featured from '../components/featured'
import Layout from '../components/layout'
import SEO from '../components/seo'
import useSiteMetadata from '../hooks/useSiteMetadata'
import '../static/css/styles.css'

const IndexPage: React.FC = () => {
  const { description } = useSiteMetadata()

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <Layout>
      <SEO title='index' description={description} keywords={[`blog`, `technology`, `react`]} />

      <article>
        <section id='basic-info'>
          <BasicInfo />
        </section>

        <section id='featured'>
          <Featured />
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

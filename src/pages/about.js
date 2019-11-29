import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage = () => (
  <Layout>
    <SEO title='About' keywords={[`about`]} />

    <h1>About Me</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tempor quam. Curabitur et
      molestie magna. Mauris nec nisi vehicula, placerat lectus ut, consequat nibh. Nulla viverra
      faucibus ex, vitae condimentum sapien luctus ut. Integer vel ultrices tortor, at consequat
      nulla. Nulla mattis convallis arcu vitae commodo. Aliquam finibus molestie nibh nec interdum.
      Phasellus sit amet est sagittis neque auctor imperdiet. Vivamus at sapien non eros maximus
      convallis. In ultricies, lorem sed fermentum rutrum, erat felis dapibus odio, in rhoncus
      tellus diam vel magna. Vestibulum dictum viverra eleifend. Quisque malesuada consectetur lacus
      elementum ornare.
    </p>
  </Layout>
)

export default AboutPage

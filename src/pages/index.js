import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import Social from '../components/social'
import '../components/styles.scss'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO
            title={data.title}
            description={data.description}
            keywords={[`gatsby`, `application`, `react`]}
        />

        <section>
            <h1>
                Hello, I'm René.
                <br />
                Developer, student, engineer.
            </h1>
            <p>
                Passionate in the creation of meaningful digital experiences
                with a focus on user centric design. Interesting in the design
                of engaging and meaningful products based on users needs and
                data driven research.{' '}
            </p>

            <div
                style={{
                    width: `250px`,
                    textAlign: `center`,
                }}>
                <Social />
            </div>

            <Projects />

            {/* <Footer /> */}
        </section>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query allDataQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

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
            title='index'
            description={data.description}
            keywords={[`gatsby`, `application`, `react`]}
        />

        <section>
            <h1>
                Hello, I'm René Sánchez.
                <br />
                Developer, student, engineer.
            </h1>

            <p>
                I'm a passionate developer that enjoys building useful things
                and learning new technologies.{' '}
            </p>

            <div
                style={{
                    width: `250px`,
                    textAlign: `center`,
                }}>
                <Social />
            </div>

            <Projects />
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

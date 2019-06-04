import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import Social from '../components/social'
import '../components/styles.scss'
import Featured from './../components/featured'

import styled from 'styled-components'

const SocialStyles = styled.div`
    display: flex;
    justify-content: center;
`

const IndexPage = ({ data }) => {
    const { edges: projectImgData } = data.ProjectImgs
    const { edges: featuredImgData } = data.FeaturedProjectImgs

    return (
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
                    I'm a passionate developer that enjoys building useful things and learning new
                    technologies.{' '}
                </p>

                <SocialStyles>
                    <Social />
                </SocialStyles>

                <Featured projectImgs={featuredImgData} />

                <Projects projectImgs={projectImgData} />
            </section>
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

        FeaturedProjectImgs: allFile(
            sort: { order: ASC, fields: [absolutePath] }
            filter: { relativePath: { regex: "/projects/.*.png/" } }
        ) {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        sizes(maxWidth: 600) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`

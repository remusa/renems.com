import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import Social from '../components/social'
import '../components/styles.scss'
import Featured from '../components/featured'
import Tech from '../components/tech'

const SectionStyles = styled.section`
    text-align: center;
`

const IndexPage = ({ data }) => {
    const { edges: projectImgData } = data.ProjectImgs
    const { edges: featuredImgData } = data.FeaturedProjectImgs

    return (
        <Layout>
            <SEO
                title='index'
                description={data.description}
                keywords={[`blog`, `technology`, `react`]}
            />

            <SectionStyles>
                <h1>
                    Hello, I'm René M. Sánchez.
                    <br />
                </h1>

                <h2>Developer, student, software engineer.</h2>

                <p>
                    I'm a passionate developer that enjoys building useful things and learning new
                    technologies.
                </p>

                <p>I enjoy working with React, Node, GraphQL and Python.</p>

                <Social />

                {/* <Tech /> */}

                <Featured projectImgs={featuredImgData} />

                <Projects projectImgs={projectImgData} />
            </SectionStyles>
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

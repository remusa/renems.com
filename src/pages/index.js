import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Projects from '../components/projects'
import SEO from '../components/seo'
import '../components/styles.scss'
import Featured from '../components/featured'
import Contact from '../components/contact'
import BasicInfo from '../components/basic-info'

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
                <BasicInfo />
                {/* <div href='#projects' style={{ height: '100vh' }}> */}
                <Featured projectImgs={featuredImgData} />
                <Projects projectImgs={projectImgData} />
                {/* </div> */}
                <Contact href='#contact' />
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

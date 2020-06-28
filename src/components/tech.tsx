import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import techList from '../data/tech.json'

const TECH_QUERY = graphql`
  query allTechQuery {
    TechImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/tech/.*.*/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            #fluid {
            #  ...GatsbyImageSharpFluid_withWebp
            #}
            #sizes(maxWidth: 200, maxHeight: 200) {
            #  ...GatsbyImageSharpSizes_withWebp
            #}
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

const TechStyles = styled.div`
  margin: 2rem auto;

  .tech-list {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    gap: 2px;
    width: calc((50px * 6) + (2px * 6));

    .logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      overflow: hidden;
    }
  }
`

const TechImage: React.FC<{
  tech: any
  fluid: any
  sizes: any
  fixed: any
}> = ({ tech, fluid, sizes, fixed }) => (
  <Img
    className='logo'
    data-aos='image-enter'
    title={tech.name}
    alt={`${tech.name} icon`}
    // fluid={fluid}
    // sizes={sizes}
    fixed={fixed}
  />
)

TechImage.propTypes = {
  tech: PropTypes.object.isRequired,
  fluid: PropTypes.object,
  sizes: PropTypes.object,
  fixed: PropTypes.object,
}

const Tech: React.FC = () => {
  const data = useStaticQuery(TECH_QUERY)
  const { edges: techImgData } = data.TechImgs

  return (
    <TechStyles>
      <h2>Favourite Technologies</h2>

      <div className='tech-list'>
        {techList.map(tech => {
          const image = techImgData.find(n => n.node.relativePath === `tech/${tech.img}`)

          const fluid = image.node.childImageSharp.fluid || null
          const sizes = image.node.childImageSharp.sizes || null
          const fixed = image.node.childImageSharp.fixed || null

          return <TechImage key={tech.name} tech={tech} fluid={fluid} sizes={sizes} fixed={fixed} />
        })}
      </div>
    </TechStyles>
  )
}

export default Tech

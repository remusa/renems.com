import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
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
            sizes(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpSizes
            }
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const TechStyles = styled.div`
  max-width: 320px;
  padding-top: 8px;
  padding-bottom: 8px;

  .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;

    .logo-container {
      margin-bottom: 8px;

      .logo {
        /* display: inline-block; */
        /* margin: 0 1rem; */
      }
    }
  }
`

const Tech = () => {
  const data = useStaticQuery(TECH_QUERY)
  const { edges: techImgData } = data.TechImgs

  return (
    <TechStyles>
      <div className='list'>
        {techList.map(tech => {
          const image = techImgData.find(
            n => n.node.relativePath === `tech/${tech.img}`
          )
          const { sizes, fixed } = image.node.childImageSharp
          return <TechImage key={tech.name} tech={tech} imageSizes={fixed} />
        })}
      </div>
    </TechStyles>
  )
}

// Tech.propTypes = {
//   techImgs: PropTypes.object.isRequired,
// }

// <div data-aos='image-enter' className='logo-container'>
const TechImage = ({ tech, imageSizes }) => (
  <Img
    title={tech.name}
    alt={`${tech.name} icon`}
    // sizes={imageSizes}
    fixed={imageSizes}
    className='logo'
  />
)
// </div>

TechImage.propTypes = {
  tech: PropTypes.object.isRequired,
  imageSizes: PropTypes.object.isRequired,
}

export default Tech

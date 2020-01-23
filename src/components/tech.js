import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import techList from '../data/tech.json'

const TechStyles = styled.div`
  display: flex;
  justify-content: center;

  .tech-container {
    background: #eee;
    padding: 25px 50px;
  }

  img.tech {
    margin: 0 1rem;
    transition: transform 0.3s;
    display: inline-block;

    &:hover {
      transform: translateZ(0) scale(1.3);
      transition: transform all 0.7s ease;
      opacity: 1;
    }
  }
`

const TechImage = ({ tech, imageSizes }) => (
  <div data-aos='image-enter'>
    <Img
      title={tech.name}
      alt={`${tech.name} screenshot`}
      sizes={imageSizes}
      className='project-list__card__image__src'
    />
  </div>
)

TechImage.propTypes = {
  tech: PropTypes.object.isRequired,
  imageSizes: PropTypes.object.isRequired,
}

const Tech = ({ techImgs }) => (
  <TechStyles className='tech-container'>
    <div className='tech-list'>
      {techList.map(tech => {
        const image = techImgs.find(
          n => n.node.relativePath === `tech/${tech.img}`
        )
        const imageSizes = image.node.childImageSharp.sizes
        return <TechImage key={tech.name} tech={tech} imageSizes={imageSizes} />
      })}
    </div>
  </TechStyles>
)

Tech.propTypes = {
  techImgs: PropTypes.object.isRequired,
}

export default Tech

export const query = graphql`
  query allDataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    TechImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/tech/.*.*/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 50) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

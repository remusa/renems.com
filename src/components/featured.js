import AOS from 'aos'
import 'aos/dist/aos.css'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import styled from 'styled-components'
import useProjects from '../hooks/useProjects.js'

const FeaturedStyles = styled.div`
  margin: 24px 0;
  text-align: center;
  padding: 8px;
  /* min-height: 80vh; */

  .project-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-even;
    align-items: center;
  }

  @media all and (max-width: 768px) {
    justify-content: center;
  }

  @media all and (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`

const CardStyles = styled.div`
  flex: 1 0 500px;
  max-width: 500px;
  height: 550px;
  margin: 8px 16px;
  border-radius: 8;
  border-bottom: 4px solid var(--color-Primary);

  .top {
    height: 65%;
    position: relative;
    overflow: hidden;

    + * {
      margin: 0;
      padding: 0;
    }

    .image {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
      clip-path: inset(0);
    }
  }

  .bottom {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
    height: calc(35% - 16px);

    p {
      text-align: initial;
      padding-left: 16px;
      padding-right: 16px;
    }

    h3 {
      text-align: center;
      color: var(--color-font);
      /* text-decoration: underline var(--color-primary); */
    }

    .icon:hover,
    h3:hover {
      color: var(--coral);
      /* text-decoration: underline var(--coral); */
      transition: all 0.3s ease;
    }
  }

  &:hover {
    transition: all 0.3s ease;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.17);
    border-bottom: var(--coral);

    .image {
      clip-path: inset(0.5rem);
      transition: clip-path 0.5s ease;
    }
  }

  @media all and (max-width: 500px) {
    height: auto;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    .top {
      height: 250px;
    }

    .bottom {
      height: auto;
    }
  }
`

const ProjectCard = ({ project, fluid, sizes }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <CardStyles className='card'>
      <div className='top'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <Img
            title={project.name}
            alt={project.name}
            fluid={fluid}
            // sizes={sizes}
            className='image'
            fadeIn
            data-aos='image-enter'
          />
        </a>
      </div>

      <div className='bottom'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <h3>{project.name}</h3>
        </a>
        <p>{project.description}</p>
        <a href={project.github} target='_blank' rel='noopener noreferrer' className='icon'>
          <FaGithubAlt />
        </a>
      </div>
    </CardStyles>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  fluid: PropTypes.object,
  sizes: PropTypes.object,
}

const Featured = () => {
  const { projectImgs, featuredProjects } = useProjects()

  return (
    <FeaturedStyles>
      <h2>Personal Projects</h2>

      <div className='project-list'>
        {featuredProjects.map(project => {
          const image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)

          const imageFluid = image.node.childImageSharp.fluid || null
          const imageSizes = image.node.childImageSharp.sizes || null

          return (
            <ProjectCard
              key={project.url}
              project={project}
              fluid={imageFluid}
              sizes={imageSizes}
            />
          )
        })}
      </div>
    </FeaturedStyles>
  )
}

export default Featured

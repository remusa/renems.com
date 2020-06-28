import styled from '@emotion/styled'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

const Card = styled.a`
  flex: 1 1 250px;
  height: 350px;
  margin: 32px 16px 0px 16px;

  --boxShadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.17);
  --boxShadowHover: 0px 5px 5px 0px rgba(188, 188, 188, 0.5);

  text-align: center;
  border-width: 0px 0px 0px 0px;
  border-color: rgba(188, 188, 188, 1);
  border-radius: 5;
  border-style: solid;
  box-shadow: var(--boxShadow);
  overflow: hidden;

  &:hover {
    border-style: solid;
    box-shadow: var(--boxShadowHover);
    transition: var(--transitionThreeMs);
  }

  .project-list__card__image {
    height: 50%;
    overflow: hidden;

    &__src {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
      transition: var(--transitionSecond);
    }
  }

  .project-list__card:hover .project-list__card__image__src {
    transform: scale(1.2);
    transition: var(--transitionSecond);
    text-decoration: none;
  }

  .project-list__card__info {
    width: 100%;
    height: 50%;

    & > p {
      font-weight: 300;
      line-height: normal;
      height: 70%;
      overflow-y: hidden;
      position: relative;
    }
  }

  .project-list__card__divider {
    width: 100%;
    height: 6px;
    background-color: var(--primaryLight);
    transition: var(--transitionThreeMs);

    &:hover {
      background-color: var(--coral);
    }
  }
`

const ProjectCard = ({ project, fluid, sizes }) => (
  <Card className='project-list__card' href={project.url} target='_blank' rel='noopener noreferrer'>
    <div className='project-list__card__image' data-aos='image-enter'>
      <Img
        title={project.name}
        alt='project screenshot'
        // fluid={fluid}
        sizes={sizes}
        className='project-list__card__image__src'
      />
    </div>

    <div className='project-list__card__divider' />

    <div className='project-list__card__info'>
      <h4 className='project-list__card__info__name'>{project.name}</h4>
      <h5>Technologies: {project.tech.join(', ')}</h5>
      <a href={project.github} target='_blank' rel='noopener noreferrer'>
        <code>Code</code>
      </a>
    </div>
  </Card>
)

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  fluid: PropTypes.object,
  sizes: PropTypes.object,
}

export default ProjectCard

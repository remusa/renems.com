import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import projectList from '../data/projects.json'

const FeaturedStyles = styled.div`
    text-align: center;
    border-radius: 4px;
    padding: 16px;

    .project-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`

const CardStyles = styled.div`
    .card {
        max-width: 600px;
        max-height: 500px;
        display: block;
        text-align: center;
        margin-top: 8px;
        border-width: 0px 0px 0px 0px;
        border-color: red;
        border-radius: 5;
        border-style: solid;
        box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);

        &:hover {
            border-style: solid;
            box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);
        }
    }

    .card__image {
        height: 50%;
        overflow: hidden;

        &__src {
            width: 100%;
            height: 100%;
            border-radius: 5px 5px 0 0;
            transition: all 1s ease;
        }
    }

    .card__divider {
        width: 100%;
        height: 8px;
        /* background-color: transparent; */
        background-color: var(--color-primary);
    }

    .card:hover .card__image__src {
        transform: scale(1.2);
        transition: all 0.5s ease;
        text-decoration: none;
    }

    .card__info {
        padding: 8px;
        width: 100%;
        /* height: 50%; */

        & > p {
            /* font-size: 1rem; */
            font-weight: 300;
            line-height: normal;
            height: 70%;
            overflow-y: hidden;
            position: relative;
        }

        &__name {
            color: var(--color-primary);
        }
    }
`

const ProjectCard = ({ project, imageSizes }) => (
    <CardStyles>
        <div className='card'>
            <div className='card__image'>
                <a href={project.url} target='_blank' rel='noopener noreferrer'>
                    <Img
                        title={project.name}
                        alt={project.name}
                        sizes={imageSizes}
                        className='card__image__src'
                    />
                </a>
            </div>

            <div className='card__divider' />

            <div className='card__info'>
                <h3 className='card__info__name'>{project.name}</h3>

                <h4>Technologies: {project.tech.join(', ')}</h4>

                <p>{project.description}</p>

                <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    <code>Source code (Github)</code>
                </a>
            </div>
        </div>
    </CardStyles>
)

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    imageSizes: PropTypes.object.isRequired,
}

const Featured = ({ projectImgs }) => (
    <FeaturedStyles>
        <h2>Featured Project</h2>

        <div className='project-list'>
            {projectList
                .filter(project => project.featured)
                .map(project => {
                    const image = projectImgs.find(
                        n => n.node.relativePath === `projects/${project.img}`
                    )
                    const imageSizes = image.node.childImageSharp.sizes

                    return (
                        <ProjectCard key={project.url} project={project} imageSizes={imageSizes} />
                    )
                })}
        </div>
    </FeaturedStyles>
)

Featured.propTypes = {
    projectImgs: PropTypes.array.isRequired,
}

export default Featured

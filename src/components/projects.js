import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import projectList from '../data/projects.json'

const ProjectCard = ({ project, imageSizes }) => (
    <a className='project-list__card' href={project.url} target='_blank' rel='noopener noreferrer'>
        <div className='project-list__card__image'>
            <Img
                title={project.name}
                alt='project screenshot'
                sizes={imageSizes}
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
    </a>
)

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    imageSizes: PropTypes.object.isRequired,
}

class Projects extends React.Component {
    state = {
        selectType: '',
    }

    static propTypes = {
        projectImgs: PropTypes.array.isRequired,
    }

    handleSelectChange = e => {
        e.preventDefault()
        const value = e.target.value
        this.setState({
            selectType: value,
        })
    }

    render() {
        const { selectType } = this.state
        const { projectImgs } = this.props

        const renderProjectList =
            selectType === ''
                ? projectList
                : projectList.filter(project => selectType === project.type)

        return (
            <div className='projects-container'>
                <h2>Projects</h2>

                <p>These are some other projects I've built.</p>

                <fieldset>
                    <form>
                        <label style={{ marginRight: `8px` }} htmlFor='project-select'>
                            Filter projects
                            <select
                                id='project-select'
                                defaultValue={selectType}
                                onChange={this.handleSelectChange}
                            >
                                <option value=''>All</option>
                                <option value='react'>React</option>
                                <option value='fullstack'>Fullstack</option>
                                <option value='front-end'>Front-end</option>
                                <option value='back-end'>Back-end</option>
                            </select>
                        </label>
                    </form>
                </fieldset>

                <div className='project-list'>
                    {renderProjectList.map(project => {
                        const image = projectImgs.find(
                            n => n.node.relativePath === `projects/${project.img}`
                        )
                        const imageSizes = image.node.childImageSharp.sizes

                        return (
                            <ProjectCard
                                key={project.url}
                                project={project}
                                imageSizes={imageSizes}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Projects

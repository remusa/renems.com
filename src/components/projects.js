import Img from 'gatsby-image'
import React from 'react'
import projectList from '../data/projects.json'
import socialLinks from '../data/social.json'

const initialState = {
    projectType: 'react',
}

class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = initialState

        console.log(socialLinks)

        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(e) {
        e.preventDefault()
        this.setState({
            projectType: e.target.value,
        })
    }

    render() {
        const projectImgs = this.props.projectImgs
        const { projectType } = this.state
        let renderProjectList

        if (projectType === '') {
            renderProjectList = projectList
        } else {
            renderProjectList = projectList.filter(
                project => projectType === project.type
            )
        }

        return (
            <div className='projects-container'>
                <h2>Projects</h2>

                <p>
                    These are some projects I've built while learning. Many of
                    them have been made while finishing the{' '}
                    <a
                        className='active'
                        href='https://www.freecodecamp.org/rms'>
                        freeCodeCamp
                    </a>{' '}
                    curriculum
                </p>

                <formset>
                    <form>
                        <label
                            style={{ marginRight: `8px` }}
                            for='project-select'>
                            Filter projects
                        </label>

                        <select
                            id='project-select'
                            defaultValue={projectType}
                            onChange={this.handleSelectChange}>
                            <option value=''>All</option>
                            <option value='react'>React</option>
                            <option value='back-end'>Back-end</option>
                            <option value='front-end'>Front-end</option>
                        </select>
                    </form>
                </formset>

                <div className='project-list'>
                    {renderProjectList.map(project => {
                        const image = projectImgs.find(
                            n =>
                                n.node.relativePath ===
                                `projects/${project.image}`
                        )
                        const imageSizes = image.node.childImageSharp.sizes

                        return (
                            <a
                                className='project-list__card'
                                href={project.url}
                                key={project.url}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <div className='project-list__card__image'>
                                    <Img
                                        title={project.name}
                                        alt='project screenshot'
                                        sizes={imageSizes}
                                        className='project-list__card__image__src'
                                    />
                                </div>

                                <div class='project-list__card__divider' />

                                <div className='project-list__card__info'>
                                    <h4 className='project-list__card__info__name'>
                                        {project.name}
                                    </h4>

                                    <h5>
                                        Technologies: {project.tech.join(', ')}
                                    </h5>

                                    <p>{project.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Projects

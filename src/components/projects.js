import React from 'react'
import projectList from '../data/projects.json'
import socialLinks from '../data/social.json'

const initialState = {
    projectType: 'front-end',
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
        // const projectImages = this.props.projectImages
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
            <div
                style={{
                    border: `1px solid grey`,
                    borderRadius: `4px`,
                    textAlign: `center`,
                    padding: `8px`,
                }}>
                <h2>Projects</h2>

                <formset>
                    <form>
                        <label
                            style={{ marginRight: `8px` }}
                            for='project-select'>
                            Projects
                        </label>
                        <select
                            id='project-select'
                            defaultValue={projectType}
                            onChange={this.handleSelectChange}>
                            <option value=''>All projects</option>
                            <option value='react'>React</option>
                            <option value='front-end'>Front-end</option>
                            <option value='back-end'>Back-end</option>
                        </select>
                    </form>
                </formset>

                <div className='project-list'>
                    {renderProjectList.map(project => {
                        {
                            /* const image = projectImages.find(m => m.node.relativePath === `projects/${projects.image}`) */
                        }
                        {
                            /* const imageSizes = image.node.childImageSharp.sizes */
                        }

                        return (
                            <a
                                className='project-list__card'
                                href={project.url}
                                key={project.url}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <div>
                                    <img
                                        src={project.image}
                                        alt='screenshot of project'
                                        className='project-list__card__image'
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

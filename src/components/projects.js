import Img from 'gatsby-image'
import React from 'react'
import projectList from '../data/projects.json'

const initialState = {
    selectType: '',
}

class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = initialState

        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(e) {
        e.preventDefault()
        this.setState({
            selectType: e.target.value,
        })
    }

    render() {
        const { selectType } = this.state
        const projectImgs = this.props.projectImgs

        let renderProjectList = projectList
        if (selectType !== '') {
            renderProjectList = projectList.filter(
                project => selectType === project.type
            )
        }

        // console.log('renderProjectList: ', renderProjectList)
        // console.log('projectImgs: ', projectImgs)

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

                <fieldset>
                    <form>
                        <label
                            style={{ marginRight: `8px` }}
                            htmlFor='project-select'>
                            Filter projects
                        </label>

                        <select
                            id='project-select'
                            defaultValue={selectType}
                            onChange={this.handleSelectChange}>
                            <option value=''>All</option>
                            <option value='react'>React</option>
                            <option value='back-end'>Back-end</option>
                            <option value='front-end'>Front-end</option>
                        </select>
                    </form>
                </fieldset>

                <div className='project-list'>
                    {renderProjectList.map(project => {
                        const image = projectImgs.find(
                            n =>
                                n.node.relativePath ===
                                `projects/${project.img}`
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

                                <div className='project-list__card__divider' />

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

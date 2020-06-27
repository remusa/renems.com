import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
import projectList from '../data/projects.json'
import ProjectCard from './projectsProjectCard'

// import AOS from "aos"
// import "aos/dist/aos.css";

const ProjectsContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;

  .project-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;

    .project-select {
      
    }
  }
`

class Projects extends React.Component {
  state = {
    selectType: '',
  }

  static propTypes = {
    projectImgs: PropTypes.array.isRequired,
  }

  // componentDidMount() {
  //   AOS.init({
  //     once: true
  //   })
  // }

  handleSelectChange = e => {
    e.preventDefault()
    const { value } = e.target
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
        : projectList.filter(project => project.type.includes(selectType))

    return (
      <ProjectsContainer>
        <p>Filter projects</p>

        <form>
          <label htmlFor='project-select'>
            <select
              id='project-select'
              name='project-select'
              defaultValue={selectType}
              onChange={this.handleSelectChange}
              className="project-select"
            >
              <option value=''>All</option>
              <option value='react'>React</option>
              <option value='fullstack'>Fullstack</option>
              <option value='front-end'>Front-end</option>
              <option value='back-end'>Back-end</option>
              <option value='node'>Node</option>
            </select>
          </label>
        </form>

        <div className='project-list'>
          {renderProjectList.map(project => {
            let image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)
            if (!image) {
              image = projectImgs.find(
                n => n.node.relativePath === `images/projects/${project.img}`,
              )
            }

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
      </ProjectsContainer>
    )
  }
}

export default Projects

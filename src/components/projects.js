import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import projectList from '../data/projects.json'

// import AOS from "aos"
// import "aos/dist/aos.css";

const ProjectCard = ({ project, fluid, sizes }) => (
  <>
    <a
      className='project-list__card'
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
    >
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
    </a>
  </>
)

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  fluid: PropTypes.object,
  sizes: PropTypes.object,
}

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
      <a className='projects-container'>
        <h2>Projects</h2>

        <p>Filter projects</p>

        <form>
          <label htmlFor='project-select'>
            <select
              id='project-select'
              name='project-select'
              defaultValue={selectType}
              onChange={this.handleSelectChange}
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
            let image = projectImgs.find(
              n => n.node.relativePath === `projects/${project.img}`
            )
            if (!image) {
              image = projectImgs.find(
                n => n.node.relativePath === `images/projects/${project.img}`
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
      </a>
    )
  }
}

export default Projects

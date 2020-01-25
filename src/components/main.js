import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainStyles = styled.main`
  grid-area: main;

  margin: 0 auto;
  padding: 2rem;
`

const Main = ({ children }) => <MainStyles>{children}</MainStyles>

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main

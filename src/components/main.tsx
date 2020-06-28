import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'

const MainStyles = styled.main`
  grid-area: main;

  margin: 0 auto;
  padding: 2rem;
`

const Main: React.FC<{ children: ReactElement }> = ({ children }) => (
  <MainStyles>{children}</MainStyles>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main

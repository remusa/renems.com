import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainStyles = styled.main`
    grid-area: main;

    margin: 0 auto;
    max-width: 960;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`

const Main = ({ children }) => <Main>{children}</Main>

Main.propTypes = {
    children: PropTypes.any.isRequired,
}

export default Main

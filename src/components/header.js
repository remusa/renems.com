import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const headerStyle = {
    background: `var(--color-primary)`,
    marginBottom: `8px`,
}

const containerHeader = {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
}

const Header = ({ siteTitle }) => (
    <header style={headerStyle}>
        <div style={containerHeader}>
            <h1 style={{ margin: 0 }}>
                <Link
                    to='/'
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

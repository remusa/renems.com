import React from 'react'
import Social from './social'

const footerStyle = {
    display: `flex`,
    flexAlign: `row`,
    justifyContent: `space-around`,
    alignItems: `center`,
    width: `100%`,
    padding: `8px`,
    textAlign: `center`,
    bottom: `0`,
    left: `0`,
    backgroundColor: `var(--color-primary)`,
}

const Footer = () => (
    <footer style={footerStyle}>
        <Social />© {new Date().getFullYear()} RMS
    </footer>
)

export default Footer

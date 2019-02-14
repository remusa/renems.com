import React from 'react'

const footerStyle = {
    display: `flex`,
    flexAlign: `column`,
    justifyContent: `space-around`,
    alignContent: `center`,
}

const Footer = () => (
    <footer style={footerStyle}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://github.com/remusa'>GitHub</a>
    </footer>
)

export default Footer

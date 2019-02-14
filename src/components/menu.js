import Link from 'gatsby-link'
import React from 'react'

const containerMenu = {
    background: `#f4f4f4`,
    padding: `10px`,
    display: `flex`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    marginBottom: `0`,
}

const Menu = () => (
    <div className='container-menu' style={containerMenu}>
        <Link to='/' activeClassName='active'>
            Home
        </Link>
        <Link
            to='/about'
            getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: 'active' } : null
            }>
            About
        </Link>
        {/* <Link
            to='/blog'
            getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: 'active' } : null
            }>
            Blog
        </Link> */}
        <Link
            to='/projects'
            getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: 'active' } : null
            }>
            Projects
        </Link>
    </div>
)

export default Menu

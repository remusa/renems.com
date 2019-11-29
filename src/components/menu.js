import React from 'react'
import {Link} from 'gatsby'

const containerMenu = {
  padding: `10px`,
  display: `flex`,
  justifyContent: `space-evenly`,
  alignItems: `center`,
  marginBottom: `0`,
}

const Menu = () => (
  <nav className='container-menu' style={containerMenu}>
    <Link to='/' activeClassName='active'>
      Home
    </Link>

    <Link
      to='/about'
      getProps={({ isPartiallyCurrent }) => (isPartiallyCurrent ? { className: 'active' } : null)}
    >
      About
    </Link>

    <Link
      to='/blog'
      getProps={({ isPartiallyCurrent }) => (isPartiallyCurrent ? { className: 'active' } : null)}
    >
      Blog
    </Link>

    <Link
      to='/projects'
      getProps={({ isPartiallyCurrent }) => (isPartiallyCurrent ? { className: 'active' } : null)}
    >
      Projects
    </Link>
  </nav>
)

export default Menu

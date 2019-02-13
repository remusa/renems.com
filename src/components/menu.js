import Link from 'gatsby-link'
import React from 'react'

const Menu = () => (
    <div
        style={{
            background: '#f4f4f4',
            paddingTop: '10px',
        }}>
        <ul className='menu'>
            <li>
                <Link to='/' activeClassName='active'>
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/about'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }>
                    About
                </Link>
            </li>
            <li>
                <Link
                    to='/blog'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }>
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    to='/projects'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }>
                    Projects
                </Link>
            </li>
        </ul>
    </div>
)

export default Menu

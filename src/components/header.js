import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.header`
    grid-area: header;

    background: var(--color-primary);
    padding-left: 10%;
    padding-right: 10%;

    nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;

        /* margin: 0 auto;
        max-width: 960; */
        /* padding: 1.45rem 1.0875rem; */
        padding: 8px;

        h1 {
            margin: 0;
        }

        a {
            color: var(--color-white);
        }

        .right {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-end;

            a {
                outline: 0;
                margin: 4px;
                flex: 0 1 20px;
                /* color: var(--color-white-dark); */

                border-color: #fff;
                background-color: transparent;
                border: 1px solid transparent;

                color: #fff;
                padding: 8px 10px;
                border-radius: 3px;
                background: transparent;

                text-decoration: none;
                cursor: pointer;
                user-select: none;

                &:hover {
                    background: rgba(40, 28, 77, 0.7);
                }

                &.active {
                    background: rgba(40, 28, 77, 0.7);
                    font-weight: 700;
                }
            }
        }
    }
`

const Header = ({ siteTitle }) => (
    <HeaderStyles>
        <nav>
            <div className='left'>
                <h1>
                    <Link to='/' activeClassName='active'>
                        {/* {siteTitle} */}
                        _R
                    </Link>
                </h1>
            </div>

            <div className='right link'>
                {/* <Link to='#projects'>Projects</Link>

                <Link to='#contact'>Contact</Link> */}

                <Link
                    to='/now'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }
                >
                    Now
                </Link>

                {/* <Link
                    to='/blog'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }
                >
                    Blog
                </Link> */}

                {/* <Link
                    to='/projects'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }
                >
                    Projects
                </Link> */}

                {/* <Link
                    to='/about'
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { className: 'active' } : null
                    }
                >
                    About
                </Link> */}
            </div>
        </nav>
    </HeaderStyles>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: '',
}

export default Header

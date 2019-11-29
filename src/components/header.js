import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const HeaderStyles = styled.header`
  grid-area: header;
  padding: 1rem;

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
    }

    a {
      color: var(--color-font);
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

        &:hover,
        &.active {
          /* background-color: rgba(0, 0, 0, 0.3); */
          background-color: var(--color-primary);
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles id='header'>
    <nav id='nav'>
      <div className='left'>
        <h1>
          <AniLink fade to='/' activeClassName='active'>
            {siteTitle}
          </AniLink>
        </h1>
      </div>

      <div className='right link'>
        {/* <Link to='#projects'>Projects</Link> */}

        {/* <Link to='/#contact'>Contact</Link> */}

        {/* {
          location.pathname === '/' ?
          <AnchorLink href='#contact'>Contact</AnchorLink> :
          null
        } */}

        <AniLink
          fade
          to='/blog'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Blog
        </AniLink>

        {/* <AniLink
          fade
          to='/notes'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Notes
        </AniLink> */}

        <AniLink
          fade
          to='/now'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Now
        </AniLink>

        {/* <Link
            to='/projects'
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent ? { className: 'active' } : null
            }
          >
            Projects
          </Link>
        */}

        {/* <Link
            to='/about'
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent ? { className: 'active' } : null
            }
          >
            About
          </Link>
        */}
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

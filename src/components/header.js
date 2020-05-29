// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  grid-area: header;
  padding: 1.5rem 2rem;

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

        transition: all 0.3s ease-in-out;

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

      <div className='right'>
        <AniLink
          fade
          to='/projects'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Projects
        </AniLink>

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
          to='/books'
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

// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import TransitionLink from 'gatsby-plugin-transition-link'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderStyles = styled.header`
  grid-area: header;
  padding: 1.5rem 2rem;

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--fontColor);
      size: 1.8rem;
    }

    .left {
      & > a {
        font-size: 3.25rem;
      }
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

        transition: var(--transitionThreeMs);

        &:hover,
        &.active {
          /* background-color: rgba(0, 0, 0, 0.3); */
          background-color: var(--primary);
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles id='header'>
    <nav id='nav'>
      <div className='left'>
        <AniLink fade to='/' activeClassName='active'>
          {siteTitle}
        </AniLink>
      </div>

      <div className='right'>
        <AniLink
          fade
          to='/blog'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Blog
        </AniLink>

        <AniLink
          fade
          to='/projects'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Projects
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

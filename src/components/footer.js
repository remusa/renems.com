import React from 'react'
import styled from 'styled-components'
import Social from './social'
import { Link } from 'gatsby'

const FooterStyles = styled.footer`
  grid-area: footer;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
  text-align: center;

  .border-bottom {
    border-bottom: 3px solid transparent;
    padding-bottom: 4px;

    &:hover {
      transition: all 0.2s ease;
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <Social />
    <Link className='border-bottom' href='/' to='/'>
      Back top
    </Link>
    <span>© {new Date().getFullYear()} RMS</span>
  </FooterStyles>
)

export default Footer

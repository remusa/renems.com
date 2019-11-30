import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  // faYoutube,
  // faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import socialLinks from '../data/social.json'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SocialStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .social-container {
    background: #eee;
    padding: 1.5rem 2.5rem;
  }

  a.social {
    color: var(--color-primary-light);
    margin: 0 1rem;
    transition: transform 0.3s;
    display: inline-block;
    size: 25px;

    &:hover {
      /* transform: translateY(-2px); */
      transform: translateZ(0) scale(0.85);
      color: var(--color-primary);
      opacity: 1;
    }
  }

  /* a.youtube {
    color: #eb3223;
  }

  a.github {
    color: #24292e;
  }

  a.twitter {
    color: #49a1eb;
  }

  a.linkedin {
    color: #0073b0;
  }

  a.email {
    color: #333333;
  } */
`

const Social = () => {
  const iconSize = '1x'

  return (
    <SocialStyles className='social-container'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/remusa'
        className='social github'
      >
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/remusa'
        className='social linkedin'
      >
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>

      {/* <AnchorLink href="#contact" className='social email'>
        <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
      </AnchorLink> */}

      <a href='#contact' className='social email'>
        <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
      </a>

      {/* <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/remusa_'
        className='social twitter'
      >
        <FontAwesomeIcon icon={faTwitter} size={iconSize} />
      </a> */}
    </SocialStyles>
  )
}

export default Social

import React from 'react'
// import socialLinks from '../data/social.json'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

const SocialStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .social-link {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-primary-light);
    padding: 0 0.5rem;
    transition: transform 0.3s;
    display: inline-block;
    text-align: center;

    .icon-title {
      line-height: 0;
      opacity: 0;
      font-weight: bold;
      font-size: 1rem;
    }

    &:hover {
      /* transform: translateY(-2px); */
      transform: translateZ(0) scale(0.85);
      color: var(--color-primary);

      .icon-title {
        opacity: 1;
        transform: 0.3s translate3d(0, 0.5rem, 0);
        transition: 0.3s cubic-bezier(0.75, 0, 0.08, 1);
      }
    }
  }
`

const Social = () => (
  <SocialStyles>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/remusa'
      // href='https://renems.com/github'
      className='social-link github'
    >
      <FaGithubAlt />
      <p className='icon-title'>Github</p>
    </a>

    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/remusa'
      // href='https://renems.com/linkedin'
      className='social-link linkedin'
    >
      <FaLinkedin />
      <p className='icon-title'>LinkedIn</p>
    </a>

    <a href='#contact' className='social-link email'>
      <FaEnvelope />
      <p className='icon-title'>Email</p>
    </a>

    {/* <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://twitter.com/remusa_'
      className='social-link twitter'
    >
      <FaTwitter />
      <p className='icon-title'>Twitter</p>
    </a> */}

    {/* <a
      target='_blank'
      rel='noopener noreferrer'
      href='https:/youtube.com/remusa_'
      className='social-link twitter'
    >
      <FaYoutube />
      <p className='icon-title'>YouTube</p>
    </a> */}
  </SocialStyles>
)

export default Social

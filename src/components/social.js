import React from 'react'
import styled from 'styled-components'
import socialLinks from '../data/social.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SocialStyles = styled.div`
    display: flex;
    justify-content: center;

    .social-container {
        /* width: 100px; */
        /* align-items: center; */
        /* padding: 4px; */
        /* display: flex; */
        /* justify-content: space-evenly; */
        background: #eee;
        padding: 25px 50px;
    }

    a.social {
        margin: 0 1rem;
        transition: transform 0.3s;
        display: inline-block;

        &:hover {
            /* transform: translateY(-2px); */
            transform: translateZ(0) scale(1.3);
            transition: transform all 0.7s ease;
            opacity: 1;
        }
    }

    a.youtube {
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

    /* .social-icon {
        border-radius: 5px;
        opacity: 0.8;
        margin-right: 1rem;
        padding: 0.5rem;
        width: 2rem;
        height: 2rem;

        &:hover {
            transition: transform all 0.7s ease;
            transform: translateZ(0) scale(1.3);
            opacity: 1;
        }
    } */
`

const Social = () => (
    <SocialStyles className='social-container'>
        <a target='_blank' href='https://github.com/remusa' className='social github'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>

        <a target='_blank' href='https://www.linkedin.com/in/remusa' className='social linkedin'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>

        {/* <a target='_blank' href='https://twitter.com/remusa_' className='social twitter'>
            <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a> */}
    </SocialStyles>
)

export default Social

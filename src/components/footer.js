import React from 'react'
import styled from 'styled-components'
import Social from './social'

const FooterStyles = styled.footer`
    grid-area: footer;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    backgroundcolor: var(--color-white);
    text-align: center;
    padding: 8px;
    /* width: 100%; */
    /* bottom: 0;
    left: 0; */
`

const Footer = () => (
    <FooterStyles>
        <Social />© {new Date().getFullYear()} RMS
    </FooterStyles>
)

export default Footer

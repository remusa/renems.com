import React from 'react'
import styled from 'styled-components'
import Social from './social'

const BasicInfoStyles = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const BasicInfo = () => (
    <BasicInfoStyles>
        <h1>
            Hello, I'm René M. Sánchez.
            <br />
        </h1>
        <h2>Developer, student, software engineer.</h2>
        <p>
            I'm a passionate developer that enjoys building useful things and learning new
            technologies.
        </p>
        <p>I enjoy working with React, Node, GraphQL and Python.</p>
        <Social />
        {/* <Tech /> */}
    </BasicInfoStyles>
)

export default BasicInfo

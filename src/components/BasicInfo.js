import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const BasicInfoStyles = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  text-align: left;

  h1 > span {
    border-bottom: 4px solid var(--color-primary);
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--coral);
    }
  }

  p {
    max-width: 50rem;
  }
`

const BasicInfo = () => (
  <BasicInfoStyles>
    <h1>
      Hello, I'm <span>René Sánchez</span>.
    </h1>
    <h2>Software engineer.</h2>
    <p>
      I'm a passionate developer that enjoys building useful things and learning new technologies. I
      enjoy working with React, Node, GraphQL and Python.
    </p>
    <Social />
    {/* <Tech /> */}
  </BasicInfoStyles>
)

export default BasicInfo

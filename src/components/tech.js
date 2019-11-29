import React from 'react'
import styled from 'styled-components'

const TechStyles = styled.div`
  display: flex;
  justify-content: center;

  .tech-container {
    background: #eee;
    padding: 25px 50px;
  }

  img.tech {
    margin: 0 1rem;
    transition: transform 0.3s;
    display: inline-block;

    &:hover {
      transform: translateZ(0) scale(1.3);
      transition: transform all 0.7s ease;
      opacity: 1;
    }
  }
`

const Tech = () => (
  <TechStyles className='tech-container'>
    {/* <img src='' alt='icon' className='tech' /> */}
    <h3>Favorite Tech</h3>
  </TechStyles>
)

export default Tech

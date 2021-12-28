import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
overflow: hidden;
`

const StyledImg = styled.img`
width: 100%;
`

export default function Icon1({ src, alt, ...props }) {
  return (
    <StyledDiv {...props}>
      <StyledImg
        src={src}
        alt={alt}
      />
    </StyledDiv>
  )
}

Icon1.defaultProps = {
  src: '',
  alt: ''
}

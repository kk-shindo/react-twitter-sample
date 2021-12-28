import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
width: 16px;
height: 16px;
border-radius: 50%;

svg {
  .st1 {
    fill: ${props => props.selected ? '#FFF' : 'rgba(255, 255, 255, 0)'};
    transition: fill .2s ease-in-out;
  }
}

&:hover {
  svg {
    .st1 {
      fill: #FFF
    }
  }
}
`

export default function Button2({ type, selected, children, ...props }) {
  return (
    <StyledButton
      type={type}
      selected={selected}
      {...props}
    >
      {children}
    </StyledButton>
  )
}


Button2.defaultProps = {
  type: 'button',
  text: ''
}

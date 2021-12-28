import React from 'react'
import styled from 'styled-components'

/** theme */
import { theme } from '../../lib/theme'

const StyledButton = styled.button`
padding: 12px;
background-color: ${props => props.theme.dark.colors.color3};
border: 1px solid ${props => props.theme.dark.colors.color3};
border-radius: 32px;
font-size: 1.2rem;
text-align: center;
transition: opacity .2s ease-in-out;

&:hover {
  opacity: 0.7;
}
`

export default function Button1({ type, text, ...props }) {
  return (
    <StyledButton
      type={type}
      theme={theme}
      {...props}
    >
      {text}
    </StyledButton>
  )
}

Button1.defaultProps = {
  type: 'button',
  text: ''
}


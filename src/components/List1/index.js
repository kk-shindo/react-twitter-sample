import React from 'react'
import styled from 'styled-components'

/** theme */
import { theme } from '../../lib/theme'

const StyledList = styled.ul`
width: 100%;
border: 1px solid ${props => props.theme.dark.colors.color3};
border-radius: 8px;
display: flex;
flex-direction: column;
`

/** List1 Component */
export default function List1({ children, ...props }) {
  return (
    <StyledList theme={theme} {...props}>{ children }</StyledList>
  )
}

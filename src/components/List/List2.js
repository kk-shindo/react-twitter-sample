import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
display: flex;
flex-direction: column;
`

/** List1 Component */
export default function List2({ children, ...props }) {
  return (
    <StyledList {...props}>{ children }</StyledList>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: block;
`

/** List1 Component */
export default function ContainerCenter({ children, ...props }) {
  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

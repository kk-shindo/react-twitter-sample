import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
`

/** List1 Component */
export default function ContainerRight({ children, ...props }) {
  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

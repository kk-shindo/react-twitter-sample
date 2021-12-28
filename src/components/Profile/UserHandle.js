import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
display: inline-block;
font-weight: bold;
`

/** Tweet Profile UserHandle Component */
export default function UserHandle ({ userName, ...props }) {
  return (
    <StyledSpan {...props}>{userName}</StyledSpan>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
display: inline-block;
font-size: 1.2rem;
`

/** Tweet Profile UserId Component */
export default function UserId ({ userId, ...props }) {
  return (
    <StyledSpan {...props}>@{userId}</StyledSpan>
  )
}

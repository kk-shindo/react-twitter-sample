import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
margin: 0 auto;
padding-top: 20px;
width: 1280px;
display: grid;
grid-template-columns: 25% 50% 25%;
color: #fff;
font-size: 1.6rem;
`

/** List1 Component */
export default function Container({ children, ...props }) {
  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
width: 100%;
display: flex;
`

export default function Footer({ children, ...props }) {
  return (
    <StyledFooter {...props}>{ children }</StyledFooter>
  )
}

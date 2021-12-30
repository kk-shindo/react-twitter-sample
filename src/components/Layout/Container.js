import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const StyledDiv = styled.div`
margin: 0 auto;
width: 1280px;
min-height: 100vh;
display: grid;
grid-template-columns: 25% 50% 25%;
position: relative;
color: #fff;
font-size: 1.6rem;

${media.between('medium', 'large')`
width: auto;
grid-template-columns: 10% 90% 0;
`}
`

/** List1 Component */
export default function Container({ children, ...props }) {
  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const StyledDiv = styled.div`
margin: 0 auto;
width: 1170px;
min-height: 100vh;
display: grid;
grid-template-columns: 25% 50% 25%;
position: relative;
color: #fff;
font-size: 1.6rem;

${media.between('medium', 'large')`
padding-left: 80px;
width: auto;
display: block;
`}

${media.lessThan('medium')`
width: auto;
display: block;
`}
`

/** List1 Component */
export default function Container({ children, ...props }) {
  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  )
}

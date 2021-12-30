import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const StyledDiv = styled.div`
padding-top: 16px;

${media.lessThan('large')`
padding: 16px;
`}
`

/** List1 Component */
export default function ContainerCenter({ children, ...props }) {
  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

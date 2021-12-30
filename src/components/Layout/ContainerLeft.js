import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

/** theme */
import { theme } from '../../lib/theme'

const StyledDiv = styled.div`
padding-top: 16px;
display: block;

${media.between('medium', 'large')`
border-right: 1px solid ${props => props.theme.dark.colors.color3};
`}
`

/** ContainerLeft Component */
export default function ContainerLeft({ children, ...props }) {
  return (
    <StyledDiv theme={theme} {...props}>{children}</StyledDiv>
  )
}

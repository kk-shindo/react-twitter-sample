import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

/** theme */
import { theme } from '../../lib/theme'

const StyledDiv = styled.div`
padding-top: 16px;
background-color: ${props => props.theme.dark.colors.background};

${media.between('medium', 'large')`
border-right: 1px solid ${props => props.theme.dark.colors.color3};
width: ${props => props.isOpen ? '50%' : '80px'};
position: absolute;
top: 0;
left: 0;
bottom: 0;
`}

${media.lessThan('medium')`
position: absolute;
top: 0;
right: -100%;
`}
`

/** ContainerLeft Component */
export default function ContainerLeft({ isOpen, children, ...props }) {
  return (
    <StyledDiv
      theme={theme}
      isOpen={isOpen}
      {...props}
    >{children}</StyledDiv>
  )
}

ContainerLeft.defaultProps = {
  isOpen: false
}

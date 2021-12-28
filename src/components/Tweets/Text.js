import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
word-wrap: break-word;
`

/** Tweet Profile TweetDate Component */
export default function Text({ tweet, ...props }) {
  return (
    <StyledP {...props}>{tweet}</StyledP>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
display: inline-block;
font-size: 1.2rem;
`

/** Tweet Profile TweetDate Component */
export default function TweetDate ({ date, ...props }) {
  return (
    <StyledSpan {...props}>
      - <time dateTime={date}>{date}</time>
    </StyledSpan>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 100%;
flex: 1 0;
`

const StyledTextarea = styled.textarea`
padding: 10px;
width: 100 %;
display: block;
font-size: 1.8rem;
resize: none;
`

/** Textarea Component */
export default function Textarea({ change, ...props }) {
  return (
    <StyledDiv {...props}>
      <StyledTextarea
        id="tweet"
        className="c-textarea__el"
        name="tweet"
        placeholder="tweet..."
        rows="4"
        onChange={change}
      />
    </StyledDiv>
  )
}

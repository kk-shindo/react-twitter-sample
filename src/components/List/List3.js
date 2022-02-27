import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledList = styled.ul`
display: flex;
align-items: center;
`

const StyledListItem = styled.li`
margin-left: 64px;
display: flex;
align-items: center;
justify-content: center;

&:first-child {
  margin-left: 0;
}
`

export default function List3({ children, ...props }) {
  return (
    <StyledList
      className="c-list3"
      {...props}
    >
      {children && children.map((children, i) => (
        <StyledListItem
          key={i}
          className="c-list3__item"
        >
          {children}
        </StyledListItem>
      ))}
    </StyledList>
  )
}

List3.propTypes = {
  children: PropTypes.array
}

List3.defaultProps = {
  children: []
}

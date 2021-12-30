import React from 'react'
import styled from 'styled-components'
// import media from 'styled-media-query'

const StyledButton = styled.button`
padding: 16px 0;
width: 32px;
height: 32px;
background: 0 0;

img {
  transform: rotate(${props => props.rotate})
}
`

export default function Button3({ direction, type, ...props }) {
  /** 方向から角度を算出(CSS用) */
  const direction2rotate = () => {
    switch (direction) {
      case 'bottom':
        return '90deg'
      case 'left':
        return '180deg'
      case 'top':
        return '360deg'
      default:
        return '0deg'
    }
  }

  return (
    <StyledButton
      rotate={direction2rotate()}
      type={type}
      {...props}
    >
      <img src="/img/icon/arrow1.svg" width="" height="" alt=""/>
    </StyledButton>
  )
}

Button3.defaultProps = {
  direction: 'right',
  type: 'button'
}

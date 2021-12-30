import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

/** components */
import List2 from '../List/List2'

const StyledNav = styled.nav`
display: block;

${media.between('medium', 'large')`
display: flex;
flex-direction: column;
align-items: center;
`}
`

const StyledA1 = styled.a`
width: 32px;
`

const StyledA2 = styled.a`
padding: 16px 0;
display: flex;
transition: opacity .2s ease-in-out;

&:hover {
  opacity: 0.7;
}
`

const StyledSpan = styled.span`
display: flex;
align-items: center;
font-size: 2rem;
font-weight: bold;

${media.between('medium', 'large')`
display: none;
`}
`

const StyledImg = styled.img`
width: 32px;
display: inline-block;

& + ${StyledSpan} {
  margin-left: 16px;
}
`


/** Nav1 Component */
export default function Nav1({ ...props }) {
  return (
    <StyledNav {...props}>
      <StyledA1 href="/" className="c-nav1__logo">
        <img
          src="/img/logo.svg"
          width=""
          height=""
          alt=""
          className="c-nav1__logo__img"
        />
      </StyledA1>
      <List2 style={{marginTop: '32px'}}>
        <li className="c-list2__item">
          <StyledA2 href="/" className="c-list2__link">
            <StyledImg
              src="/img/icon/profile.svg"
              width=""
              height=""
              alt=""
              className="c-list2__link__img"
            />
            <StyledSpan>プロフィール</StyledSpan>
          </StyledA2>
        </li>
        <li className="c-list2__item">
          <StyledA2 href="/" className="c-list2__link">
            <StyledImg
              src="/img/icon/profile.svg"
              width=""
              height=""
              alt=""
              className="c-list2__link__img"
            />
            <StyledSpan>プロフィール</StyledSpan>
          </StyledA2>
        </li>
        <li className="c-list2__item">
          <StyledA2 href="/" className="c-list2__link">
            <StyledImg
              src="/img/icon/profile.svg"
              width=""
              height=""
              alt=""
              className="c-list2__link__img"
            />
            <StyledSpan>プロフィール</StyledSpan>
          </StyledA2>
        </li>
      </List2>
    </StyledNav>
  )
}

import React from 'react'
import styled from 'styled-components'
import Icon1 from '../Icon/Icon1'
import User from '../../json/user.json'
import InlineSvg from '../InlineSvg'

/** theme */
import { theme } from '../../lib/theme'

/** components */
import Profile from '../Profile'
import Text from './Text'
import Button2 from '../Button/Button2'

const StyledDiv1 = styled.div`
padding: 16px;
border-top: 1px solid ${props => props.theme.dark.colors.color3};
display: flex;
transition: opacity .2s ease-in-out;

&:first-child {
  border-top-width: 0;
}
`

const StyledDiv2 = styled.div`
margin-left: 16px;
padding: 8px;
flex: 1 0;
`

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

/** ツイート */
export default function Tweets({ tweet, isFavorite, onClickFavorite, ...props }) {
  const user = User.filter((user) => user.id === tweet.userId)[0]

  return (
    <StyledDiv1 className="c-list1__item" theme={theme} {...props}>
      <Icon1 src={user.icon} />
      <StyledDiv2 className="c-list1__item__inner">
        <Profile
          user={user}
          tweet={tweet}
        />
        <Text tweet={tweet.tweet} style={{marginTop: '8px'}} />
        <StyledList className="c-list3" style={{marginTop: '16px'}}>
          <StyledListItem className="c-list3__item">
            <Button2>
              <img
                src="/img/icon/reply.svg"
                width="16"
                height="16"
                alt="reply"
              />
            </Button2>
          </StyledListItem>
          <StyledListItem className="c-list3__item">
            <Button2>
              <img
                src="/img/icon/retweet.svg"
                width="16"
                height="16"
                alt="retweet"
              />
            </Button2>
          </StyledListItem>
          <StyledListItem className="c-list3__item">
            <Button2
              selected={isFavorite}
              onClick={() => { onClickFavorite(tweet) }}
            >
              <InlineSvg
                path="/img/icon/good.svg"
                alt="favorite"
              />
            </Button2>
          </StyledListItem>
        </StyledList>
      </StyledDiv2>
    </StyledDiv1>
  )
}

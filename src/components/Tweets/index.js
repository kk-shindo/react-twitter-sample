import React from 'react'
import PropTypes from 'prop-types'
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
import List3 from '../List/List3'

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

const StyledList3 = styled(List3)`
margin-top: 16px;
`

const StyledText = styled(Text)`
margin-top: 8px;
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
        <StyledText tweet={tweet.tweet} />
        <StyledList3>
          <Button2>
            <InlineSvg
              path="/img/icon/reply.svg"
              alt="reply"
            />
          </Button2>
          <Button2>
            <InlineSvg
              path="/img/icon/retweet.svg"
              alt="retweet"
            />
          </Button2>
          <Button2
            selected={isFavorite}
            onClick={() => { onClickFavorite(tweet) }}
          >
            <InlineSvg
              path="/img/icon/good.svg"
              alt="favorite"
            />
          </Button2>
        </StyledList3>
      </StyledDiv2>
    </StyledDiv1>
  )
}

Tweets.propTypes = {
  tweet: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.number,
    tweet: PropTypes.string,
    userId: PropTypes.string
  }),
  isFavorite: PropTypes.bool,
  onClickFavorite: PropTypes.func
}

Tweets.defaultProps = {
  tweet: {
    date: '',
    id: null,
    tweet: '',
    userId: ''
  },
  isFavorite: false,
  onClickFavorite: () => {}
}

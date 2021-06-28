import React, { Component } from 'react'
import Icon1 from './Icon1'
import User from '../json/user.json'
import InlineSvg from '../components/InlineSvg'

export default class Tweets extends Component {
  render () {
    const {
      tweet,
      isFavorite,
      onClickFavorite,
      ...props
    } = this.props

    const user = User.filter((user) => user.id === tweet.userId)[0]

    return (
      <div className="c-list1__item" {...props}>
        <Icon1 src={user.icon} />
        <div className="c-list1__item__inner">
          <div className="c-list1__profile">
            <span className="c-list1__profile__handle">{user.name}</span>
            <span className="c-list1__profile__id">@{user.id}</span>
            <span className="c-list1__profile__time">- <time dateTime={tweet.date}>{tweet.date}</time></span>
          </div>
          <div className="c-list1__txt">{tweet.tweet}</div>
          <ul className="c-list3">
            <li className="c-list3__item">
              <button type="button" className="c-btn2">
                <img src="/img/icon/reply.svg" alt="" />
              </button>
            </li>
            <li className="c-list3__item">
              <button type="button" className="c-btn2">
                <img src="/img/icon/retweet.svg" alt="" />
              </button>
            </li>
            <li className="c-list3__item">
              <button
                type="button"
                className={`c-btn2${isFavorite ? '--selected' : ''}`}
                onClick={() => {onClickFavorite(tweet)}}
              >
                <InlineSvg path="/img/icon/good.svg" alt="favorite" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Icon1 from './Icon1'
import User from '../json/user.json'

export default class Tweets extends Component {
  render () {
    const {
      tweet,
      ...props
    } = this.props

    const user = User.filter((user) => user.id === tweet.userId)[0]

    return (
      <div className="c-list1__item" {...props}>
        <Icon1 src={user.icon} />
        <div className="c-list1__item__inner">
          <div className="c-list1__name">
            <span className="c-list1__name__handle">{user.name}</span>
            <span className="c-list1__name__id">@{user.id}</span>
          </div>
          <div className="c-list1__txt">{tweet.tweet}</div>
          <time dateTime={tweet.date} className="c-list1__time">{tweet.date}</time>
        </div>
      </div>
    )
  }
}

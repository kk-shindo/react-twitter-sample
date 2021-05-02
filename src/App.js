import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import Tweets from './components/Tweets'
import Textarea from './components/Textarea'
import Btn1 from './components/Btn1'
import Icon1 from './components/Icon1'

import User from './json/user.json'

/*
* TODO:
* - アカウント機能
* - DB連携
*/

export default class App extends Component {
  constructor() {
    super()
    this.user = User[1]
    this.state = {
      userId: null,
      tweet: '',
      tweetList: JSON.parse(localStorage.getItem('tweetList')) || []
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    this.setState({userId: this.user.id})
  }

  submitHandler(e) {
    const { userId, tweet, tweetList } = this.state
    const date = new Date()

    e.preventDefault()
    if (tweet) {
      this.setState({
        tweet: '',
        tweetList: tweetList.concat({
          userId: userId,
          date: date.toLocaleString(),
          tweet: tweet
        })
      }, () => {
        e.target.elements.tweet.value = ''

        localStorage.setItem('tweetList', JSON.stringify(this.state.tweetList))
      })
    }
  }

  changeHandler(e) {
    const target = e.target

    if (target.value.length < 140) {
      this.setState({[target.name]: target.value})
    } else {
      window.alert('Over 140 characters.')
    }
  }

  clickHandler(todo) {
    const { tweetList } = this.state
    this.setState({
      tweetList: tweetList.filter((x) => x !== todo)
    }, () => {
      localStorage.setItem('tweetList', JSON.stringify(this.state.tweetList))
    })
  }

  render() {
    const { tweetList } = this.state

    tweetList.sort((a, b) => {
      return new Date(a.date) < new Date(b.date) ? 1 : -1
    })

    return (
      <div className="App l-container">
        <div className="l-container__left">
          <nav className="c-nav1">
            <a href="/" className="c-nav1__logo">
              <img src="/img/logo.svg" alt="" className="c-nav1__logo__img" />
            </a>
            <ul className="c-list2">
              <li className="c-list2__item">
                <a href="/" className="c-list2__link">
                  <img src="/img/icon/profile.svg" alt="" className="c-list2__link__img" />
                  <span className="c-list2__link__txt">プロフィール</span>
                </a>
              </li>
              <li className="c-list2__item">
                <a href="/" className="c-list2__link">
                  <img src="/img/icon/profile.svg" alt="" className="c-list2__link__img" />
                  <span className="c-list2__link__txt">プロフィール</span>
                </a>
              </li>
              <li className="c-list2__item">
                <a href="/" className="c-list2__link">
                  <img src="/img/icon/profile.svg" alt="" className="c-list2__link__img" />
                  <span className="c-list2__link__txt">プロフィール</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="l-container__center">
          <form
            className="c-form1"
            onSubmit={this.submitHandler}
          >
            <Icon1 src={this.user.icon} />
            <Textarea
              change={this.changeHandler}
            />
            <footer className="c-form1__footer">
              <Btn1
                text="ツイート"
              />
            </footer>
          </form>
          <div className="c-list1">
          {tweetList.length > 0 && tweetList.map((tweetInfo, i) => (
            <Tweets
              key={i}
              tweet={tweetInfo}
              onClick={() => {this.clickHandler(tweetInfo)}}
            />
          ))}
          </div>
        </div>

        <div className="l-container__left">
          <div className="">

          </div>
        </div>
      </div>
    )
  }
}

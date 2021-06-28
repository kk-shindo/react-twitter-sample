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
      tweetList: JSON.parse(localStorage.getItem('tweetList')) || [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.onClickFavorite = this.onClickFavorite.bind(this)
  }

  componentDidMount() {
    this.setState({userId: this.user.id})
  }

  submitHandler(e) {
    const { userId, tweet, tweetList } = this.state
    const date = new Date()
    const timeStamp = Math.floor(date.getTime() / 1000)

    e.preventDefault()
    if (tweet) {
      this.setState({
        tweet: '',
        tweetList: tweetList.concat({
          id: timeStamp,
          userId: userId,
          date: date.toLocaleString(),
          tweet: tweet
        })
      }, () => {
        e.target.elements.tweet.value = ''

        localStorage.setItem('tweetList', JSON.stringify(this.state.tweetList))
        window.alert('ツイートしました')
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

  /** お気に入りを押したときの挙動 */
  onClickFavorite(tweet) {
    let { favorites } = this.state

    if (favorites.includes(tweet.id)) {
      const index = favorites.indexOf(tweet.id)
      favorites.splice(index, 1)
    } else {
      if (favorites.length > 0) {
        favorites = favorites.concat(tweet.id)
      } else {
        favorites = [tweet.id]
      }
    }

    this.setState({ favorites }, () => {
      localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
    })
  }

  render() {
    const { tweetList, favorites } = this.state

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
          {tweetList.length > 0 && tweetList.map((tweet, i) => (
            <Tweets
              key={i}
              tweet={tweet}
              onClick={() => {/* this.clickHandler(tweet) */}}
              isFavorite={favorites.length ? (favorites).includes(tweet.id) : false}
              onClickFavorite={this.onClickFavorite}
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

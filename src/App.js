import React, { Component } from 'react'
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

    e.preventDefault()
    if (tweet) {
      this.setState({
        tweet: '',
        tweetList: tweetList.concat({
          userId: userId,
          date: 0,
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

    if (target.value.length < 14) {
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

    const date = new Date()

    console.log(date)

    console.log(tweetList)
    // tweetList.filter((a, b) => a.date > b.date)

    return (
      <div className="App">
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
    )
  }
}

import React, { useState, useEffect } from 'react'
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

export default function App () {
  const user = User[1]
  const [tweet, setTweet] = useState('')
  const [tweetList, setTweetList] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setTweetList(JSON.parse(localStorage.getItem('tweetList')) || [])
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('tweetList', JSON.stringify(tweetList))
    // setTweetList((current) => {
    //   return sortTweetList(current)
    // })
  }, [tweetList])

  const submitHandler = (e) => {
    const date = new Date()
    const timeStamp = Math.floor(date.getTime() / 1000)

    e.preventDefault()
    if (tweet) {
      setTweet('')
      setTweetList((current) => {
        return current.concat({
          id: timeStamp,
          userId: user.id,
          date: date.toLocaleString(),
          tweet: tweet
        })
      })

      e.target.elements.tweet.value = ''
      // localStorage.setItem('tweetList', JSON.stringify(tweetList))
      // window.alert('ツイートしました')
    }
  }

  const changeHandler = (e) => {
    const target = e.target

    if (target.value.length < 140) {
      switch (target.name) {
        case 'tweet':
          setTweet(target.value)
          break
        default:
          break
      }
    } else {
      window.alert('Over 140 characters.')
    }
  }

  const clickHandler = (todo) => {
    setTweetList((current) => {
      return current.filter((x) => x !== todo)
    })
    localStorage.setItem('tweetList', JSON.stringify(tweetList))
  }

  /** お気に入りを押したときの挙動 */
  const onClickFavorite = (tweet) => {
    if (favorites.includes(tweet.id)) {
      const index = favorites.indexOf(tweet.id)
      favorites.splice(index, 1)
    } else {
      if (favorites.length > 0) {
        setFavorites((current) => {
          current.concat(tweet.id)
        })
      } else {
        setFavorites([tweet.id])
      }
    }

    setFavorites(favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const sortTweetList = (_tweetList) => {
    return _tweetList.sort((a, b) => {
      return new Date(a.date) < new Date(b.date) ? 1 : -1
    })
  }

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
          onSubmit={submitHandler}
        >
          <Icon1 src={user.icon} />
          <Textarea
            change={changeHandler}
          />
          <footer className="c-form1__footer">
            <Btn1
              text="ツイート"
            />
          </footer>
        </form>
        <div className="c-list1">
          {(tweetList || []).length > 0 && sortTweetList(tweetList).map((tweet, i) => (
            <Tweets
              key={i}
              tweet={tweet}
              onClick={() => { clickHandler(tweet) }}
              isFavorite={favorites.length ? (favorites).includes(tweet.id) : false}
              onClickFavorite={onClickFavorite}
            />
          ))}
        </div>
      </div>

      <div className="l-container__right">
        <div className="">

        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

/** components */
import Container from './components/Layout/Container'
import ContainerCenter from './components/Layout/ContainerCenter'
import ContainerLeft from './components/Layout/ContainerLeft'
import ContainerRight from './components/Layout/ContainerRight'
import Nav1 from './components/Nav/Nav1'
import Tweets from './components/Tweets/index'
import List1 from './components/List/List1'
import Form from './components/Form/'
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
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    /** ローカルストレージからtweetsの取得 */
    setTweetList(JSON.parse(localStorage.getItem('tweetList')) || [])

    /** ローカルストレージからfavoritesの取得 */
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [])

  useEffect(() => {
    /** ローカルストレージにtweetsを登録 */
    localStorage.setItem('tweetList', JSON.stringify(tweetList))
  }, [tweetList])

  useEffect(() => {
    /** ローカルストレージにfavoritesを登録 */
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

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

  /* const removeHandler = (tweet) => {
    setTweetList((current) => {
      return current.filter((x) => x !== tweet)
    })
    localStorage.setItem('tweetList', JSON.stringify(tweetList))
  } */

  /** お気に入りを押したときの挙動 */
  const onClickFavorite = (tweet) => {
    console.log(tweet)
    console.log(favorites.includes(tweet.id))
    if (favorites.includes(tweet.id)) { /** 解除 */
      setFavorites(favorites.filter(favorite => favorite !== tweet.id))
    } else { /** 登録 */
      setFavorites([tweet.id, ...favorites])
    }
  }

  /** 日付順でツイートを並べ替え */
  const sortTweetList = (_tweetList) => {
    return _tweetList.sort((a, b) => {
      return new Date(a.date) < new Date(b.date) ? 1 : -1
    })
  }

  /** ナビ開閉 */
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <Container className="App">
      <ContainerLeft isOpen={isNavOpen}>
        <Nav1
          isOpen={isNavOpen}
          toggleNav={toggleNav}
        />
      </ContainerLeft>

      <ContainerCenter>
        <Form
          user={user}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
        {(tweetList || []).length > 0 &&
          <List1 style={{marginTop: '16px'}}>
            {sortTweetList(tweetList).map((tweet, i) => (
              <Tweets
                key={i}
                tweet={tweet}
                isFavorite={favorites.length ? (favorites).includes(tweet.id) : false}
                onClickFavorite={onClickFavorite}
              />
            ))}
          </List1>
        }
      </ContainerCenter>

      <ContainerRight>
        <div className=""></div>
      </ContainerRight>
    </Container>
  )
}

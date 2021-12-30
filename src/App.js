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

  useEffect(() => {
    setTweetList(JSON.parse(localStorage.getItem('tweetList')) || [])
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('tweetList', JSON.stringify(tweetList))
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

  const removeHandler = (tweet) => {
    setTweetList((current) => {
      return current.filter((x) => x !== tweet)
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
    <Container className="App">
      <ContainerLeft>
        <Nav1 />
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
                onClick={() => { removeHandler(tweet) }}
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

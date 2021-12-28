import React from 'react'

/** components */
import UserHandle from './UserHandle'
import UserId from './UserId'
import TweetDate from './TweetDate'

/** Tweet Profile Component */
export default function Profile ({ user, tweet, ...props }) {
  return (
    <div {...props}>
      <UserHandle userName={user.name} />
      <UserId userId={user.id} style={{marginLeft: '8px'}} />
      <TweetDate date={tweet.date} style={{marginLeft: '4px'}} />
    </div>
  )
}

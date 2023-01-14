import React from 'react'
import './index.css'
function Card({userInfo}) {
    return (
        <div className="card">
            <a href={userInfo.html_url} target="_blank" rel="noreferrer">
                <img src={userInfo.avatar_url} alt="用户头像" />
            </a>
            <div>{userInfo.login}</div>
        </div>
    )
}
function UserList({userInfo}) {
  const cardList = userInfo.map((item,index) => {
    return <Card userInfo={item} key={index}></Card>
  })
  return (
    <div className='user-list'>
        {cardList}
    </div>
  )
}

export default UserList
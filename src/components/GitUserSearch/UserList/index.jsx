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
function UserList({userInfo,searchState}) {
  const cardList = searchState.userInfo.map((item,index) => {
    return <Card userInfo={item} key={index}></Card>
  })
  function resState() {
    if(searchState.firstSearch) {
      return (
        <h1>请输入名字搜索！</h1>
      )
    } else if(searchState.loading) {
      return (
        <h1>加载中...</h1>
      )
    } else if(searchState.error) {
      return (
        <h1>出错啦</h1>
      )
    } else {
      return cardList
    }
  }

  return (
    <div className='user-list'>
        {resState()}
    </div>
  )
}

export default UserList
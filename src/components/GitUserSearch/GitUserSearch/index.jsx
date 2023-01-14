import React,{useState} from 'react';
import Search from '../Search'
import UserList from '../UserList'
import './index.css'
function GitUserSearch() {
  const [userInfo,setUserInfo] = useState([])
  console.log(userInfo)
  return (
    <div className='git-search'>
        <Search getUser={(user)=> setUserInfo(user)}></Search>
        <UserList userInfo={userInfo}></UserList>
    </div>
  )
}

export default GitUserSearch
import React,{useState} from 'react';
import Search from '../Search'
import UserList from '../UserList'
import './index.css'
function GitUserSearch() {
  const [userInfo,setUserInfo] = useState([])
  const [searchState,setSearchState] = useState({
    firstSearch: true,
    loading:false,
    userInfo:[],
    error:false
  })
  return (
    <div className='git-search'>
        <Search getUser={(user)=> setUserInfo(user)} searchState={searchState} 
        setSearchState={setSearchState}></Search>
        <UserList userInfo={userInfo} searchState={searchState}></UserList>
    </div>
  )
}

export default GitUserSearch
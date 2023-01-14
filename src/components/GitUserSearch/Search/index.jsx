import React,{useState} from 'react'
import {getUserListAPI} from '../../../API'
import './index.css'
function Search({getUser}) {
  const [formData,setFormData] = useState('')
  async function search() {
    const {data:res} = await getUserListAPI(formData)
    getUser(res.items.slice(0,12))
  }
  return (

    <div className='search-area'>
        <h1>Search Github Users</h1>
        <div className="search-group">
            <input className='search-bar' 
                   type="text" 
                   placeholder='enter the name you search'
                   value={formData}
                   onChange={(e)=>setFormData(e.target.value)}/>
            <button onClick={search}>Search</button>
        </div>
    </div>
  )
}

export default Search
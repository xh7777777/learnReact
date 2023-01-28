import React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import ProgressBar from '../ProgressBar'
import GitUserSearch from '../GitUserSearch/GitUserSearch'
import HiddenSearch from '../HiddenSearch'
import DarkModeDemo from '../DarkMode'
import Draggle from '../Draggle'
import AwesomeInput from '../AwesomeInput'
import { Button } from 'antd'
import './index.css'
function DemoRouter() {
  return (
    <BrowserRouter>
        <Link to="/"><Button>首页</Button></Link>
        <Link to="/demo"><Button>demo</Button></Link>
        <Routes>
            <Route path='/'></Route>
            <Route path='/demo' element={<DemoList></DemoList>}>
                <Route path='/demo/progressBar' element={<ProgressBar stepNum={4}/>}></Route>
                <Route path='/demo/gitUserSearch' element={<GitUserSearch/>}></Route>
                <Route path='/demo/hiddenSearch' element={<HiddenSearch/>}></Route>
                <Route path='/demo/darkMode' element={<DarkModeDemo/>}></Route>
                <Route path='/demo/draggle' element={<Draggle/>}></Route>
                <Route path='/demo/input' element={<AwesomeInput/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default DemoRouter

function DemoList() {
  return (
    <>
      <ul className='demo-list'>
        <li className='list-item'>
          <Link to='/demo/progressBar'><Button>前进条</Button></Link>
        </li>
        <li className='list-item'>
          <Link to='/demo/gitUserSearch'><Button>git搜索</Button></Link>
        </li>
        <li className='list-item'>
          <Link to='/demo/hiddenSearch'><Button>弹出的搜索框</Button></Link>
        </li>
        <li className='list-item'>
          <Link to='/demo/darkMode'><Button>黑暗模式</Button></Link>
        </li>
        <li className='list-item'>
          <Link to='/demo/draggle'><Button>拖拽案例</Button></Link>
        </li>
        <li className='list-item'>
          <Link to='/demo/input'><Button>输入框</Button></Link>
        </li>
      </ul>
      <div className="demo-area">
        <Outlet></Outlet>
      </div>
    </>
  )
}
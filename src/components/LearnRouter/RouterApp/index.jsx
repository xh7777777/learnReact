import React from 'react'
import Home from '../Home'
import About from '../About'
import { Button } from 'antd'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
function RouterApp() {
  return (
        <BrowserRouter>
            <Link to="/"><Button type='primary'>首页</Button></Link>
            <Link to="/about"><Button type='primary'>关于</Button></Link>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default RouterApp
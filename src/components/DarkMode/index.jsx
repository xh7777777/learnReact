import React,{useState} from 'react'
import './index.css'
function DarkModeDemo() {
  const [mode, setMode] = useState('dark')
  function toggle() {
    if(mode === 'dark')
      setMode('light')
    else 
      setMode('dark')
  }
  return (
    <div className='outer' color-mode={mode}>
      <button onClick={toggle}>toggle</button>
      <div className="container">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
      </div>
    </div>
  )
}

export default DarkModeDemo
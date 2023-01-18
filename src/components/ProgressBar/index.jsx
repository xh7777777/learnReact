import React from 'react'
import { useState } from 'react'
import './index.css'
function ProgressBar({stepNum}) {
    if(!stepNum) {
        stepNum = 3
    }
    const [preDis,setPreDis] = useState(true)
    const [nextDis,setNextDis] = useState(false)
    const [currentWidth,setCurrentWidth] = useState(0)
    const [active,setActive] = useState([true,...Array(stepNum-1).fill(false)])
    function pre() {
        let temp = active.slice()
        temp[currentWidth] = false
        setActive(temp)
        setCurrentWidth(currentWidth-1)
        if(temp[1] === false) setPreDis(true)
        setNextDis(false)
    }
    function next() {
        setCurrentWidth(currentWidth+1)
        let temp = active.slice()
        temp[currentWidth+1] = true;
        setActive(temp)           //state更新是异步的
        if(temp[stepNum-1] === true) {
            setNextDis(true)
        }
        setPreDis(false)
    }
    const stepList = active.map((item,index)=>{
        return <span key={index} className={['circle',active[index]?'active':null].join(' ')}>{index}</span>
    })
  return (
    <div>
        <div className="progress-container">
            <div className="progress" style={{width:currentWidth*(100/(stepNum-1))+'%'}}></div>
            {stepList}
        </div>
        <div className="progress-btn">
            <button className="btn" id='prev' onClick={pre} disabled={preDis}>Prev</button>
            <button className="btn" id='next' onClick={next} disabled={nextDis}>Next</button>
        </div>
    </div>
  )
}

export default ProgressBar
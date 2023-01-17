import React ,{useState,useRef} from 'react'
import './index.css'
function HiddenSearch() {
  const input = useRef(null)
  const [active,setActive] = useState('hidden-search')
  function expand() {
    if(active.includes('active'))
        setActive(active.slice(0,13))
    else{ 
        setActive(active+' active')
        input.current.focus()
    }
  }
  return (
    <div className={active}>
        <input className='input' type="text" 
        placeholder='Search...'
        ref={input}/>
        <button className='btn' onClick={expand}>
            <i className="fas fa-search"></i>
        </button>
    </div>
  )
}

export default HiddenSearch
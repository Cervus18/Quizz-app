import React, { useState } from 'react'

const Sidebar = ({answers,setCurrentQstnIdx,currentQstnIdx}) => {
  
const handleClick = (idx) => {
    setCurrentQstnIdx(idx)
}



  return (
    <div className='sidebar'>
        <div id="navigation"><strong>Navigaton</strong></div>
        <div className="sidebar-body">
                <div className="nav-grid">
                   { answers.map((item,idx) => <div key={idx}  className='grid-item'  onClick={()=>handleClick(idx)}> <span>{idx+1}</span><div style={{"backgroundColor":`${currentQstnIdx===idx ? 'rgb(38, 38, 38)': item.length===0 ?'#cfcfcf':'#028c7f'}`}}><div></div></div></div>)}
                </div>
        </div>
    </div>
  )
}

export default Sidebar
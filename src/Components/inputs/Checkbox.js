import React from 'react'

const Checkbox = ({isChecked}) => {

  return (
    !isChecked ? <div className='checkbox empty'></div> : <div className='checkbox full'><i className="fa-solid fa-check"></i></div> 
  )
  

 
}

export default Checkbox
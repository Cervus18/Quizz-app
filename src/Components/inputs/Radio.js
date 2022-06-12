import React from 'react'

const Radio = ({isChecked}) => {
  return (
    <div className='radio'>{isChecked && <div></div>}</div>
  )
}

export default Radio
import React, { useState } from 'react'
import Radio from './inputs/Radio';


const OResponse = ({p,responseIdx, currentQstnIdx, setAnswers, answers}) => {
  
  const [isChecked] = useState(()=> answers[currentQstnIdx].includes(responseIdx))

  const handleClick = () => {
    let newAnswers = answers.map((item,idx)=> idx === currentQstnIdx ? [responseIdx] : item)
    setAnswers(newAnswers)
  }

  return (
    <li className='proposition' onClick={handleClick}><Radio isChecked={isChecked}/> {p}</li>
  )
}

export default OResponse
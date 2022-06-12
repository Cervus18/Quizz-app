import React from 'react'
import Checkbox from './inputs/Checkbox'
import Radio from './inputs/Radio'

const ResultListItem = ({proposition, propositionIndex, trueAnswers,answer, questionType}) => {

  const isChecked = answer.includes(propositionIndex)

  const isTrue = trueAnswers.includes(propositionIndex)
  const isFalse = isChecked && !isTrue

  return (
    <li style={isTrue ? {"backgroundColor":"#ecf4f2"}:(isFalse ? {"backgroundColor":"#FBECE9"}:{}) }  className='result-list-item'><div style={{"display":"flex"}}>{questionType==="OR"?(<Radio isChecked={isChecked}/>) : (<Checkbox isChecked={isChecked}/>)} {proposition}</div> {isTrue? <span className='correct'>(Correct)</span>: isFalse && <span className='incorrect'>(Incorrect)</span>} </li>
  )
}

export default ResultListItem
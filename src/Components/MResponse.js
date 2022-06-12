import React, { useState } from 'react'
import Checkbox from './inputs/Checkbox'



const OResponse = ({p,responseIdx, currentQstnIdx, setAnswers, answers}) => {
  
  const [isChecked] = useState(()=> answers[currentQstnIdx].includes(responseIdx))

  const handleClick = () => {
      if(isChecked){
            
            let l = answers[currentQstnIdx].filter(item => item!= responseIdx)
            let newAnswers = answers.map((item,idx)=> idx === currentQstnIdx? l :item)
            setAnswers(newAnswers)
      }else{
        let newAnswers = answers.map((item,idx)=> idx === currentQstnIdx? [...item, responseIdx] : item)
        setAnswers(newAnswers)
      }
  }


  return (
    <li className='proposition' onClick={handleClick}> <Checkbox isChecked={isChecked}/> {p}</li>
  )
}

export default OResponse
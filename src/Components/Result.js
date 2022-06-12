import React, {useEffect, useState} from 'react'
import ResultListItem from './ResultListItem'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'


const Result = ({questionItem,answer,questionIdx,checkLaterArray}) => {
  
  const questionType = questionItem.type
  const trueAnswers = questionItem.answers

  const toBeVerified = checkLaterArray.includes(questionIdx)

  const [isCorrect,setIsCorrect] = useState()

  useEffect(()=> {
    if(questionType=="OR"){

            if(JSON.stringify(answer)===JSON.stringify(trueAnswers)){
                setIsCorrect(true)
               
            }else{
                setIsCorrect(false)
              
            }
            
        }else{
                let sortedAnswer = [...answer].sort((a,b)=> a-b )
                let sortedTrueAnswers = [...trueAnswers].sort((a,b)=> a-b )

                if(JSON.stringify(sortedAnswer)===JSON.stringify(sortedTrueAnswers)){
                    setIsCorrect(true)
           

                }else{
                    setIsCorrect(false)
            

                }
        }
  },[])

   

  return (
    <div className="result" >
        <div style={{"marginBottom":".7rem", "position":"relative"}}><strong>Question {questionIdx + 1} :</strong> {isCorrect? <strong style={{"color":"#2D907F", "fontWeight":"800"}}>Correct </strong>:<strong style={{"color":"#E25D3F", "fontWeight":"800"}}>Incorrect</strong>} {toBeVerified && <Tippy content="Checked for verification" ><i style={{"color":"#B4690E"}} className="for-verification fa-solid fa-star"></i></Tippy>}</div>
        <div style={{"marginBottom":".8rem"}}>
            {questionItem.question}
        </div>
        <ul>
            {questionItem.propositions.map((proposition,idx) =><ResultListItem key={idx} questionType={questionType} propositionIndex={idx} answer={answer} trueAnswers={trueAnswers} proposition={proposition} />)}
        </ul>
    </div>
  )
}

export default Result
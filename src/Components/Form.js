import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import OResponse from './OResponse';
import MResponse from './MResponse';
import Sidebar from './Sidebar';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

const Form = ({QandA, answers, setAnswers, checkLaterArray, setChecklaterArray,setIsSubmited}) => {
 
    const [currentQstnIdx,setCurrentQstnIdx] = useState(0)


    const [checkLater,setChecklater] = useState(()=>checkLaterArray.includes(currentQstnIdx))

    const [isAnswered,setIsAnswered] = useState(()=>answers[currentQstnIdx].length > 0)

    useEffect(()=>{
        setChecklater(checkLaterArray.includes(currentQstnIdx))
    },[checkLaterArray,currentQstnIdx])

    useEffect(()=>{
        setIsAnswered(answers[currentQstnIdx].length > 0)
    },[answers,currentQstnIdx])

    const handleCheckLaterArray = () => {
        if(checkLater){
            let newCheckLaterArray = checkLaterArray.filter(item => item !== currentQstnIdx)
            setChecklaterArray(newCheckLaterArray)
        }else{
            let newCheckLaterArray =[ ...checkLaterArray,currentQstnIdx]
            setChecklaterArray(newCheckLaterArray)
        }

       
     
    }


   

  return (
     <>
     <Sidebar answers={answers} currentQstnIdx={currentQstnIdx} setCurrentQstnIdx={setCurrentQstnIdx}/>
     <div className="form">
        <div className="progressbar" >
            <div id="qstn-pagination"><strong>Question: {currentQstnIdx+1}/{QandA.length}</strong></div>
            <div id="bar-contain">
                <div className="bar-container">
                    <div className="bar" style={{"width":`${(currentQstnIdx+1)/QandA.length*100}%`}}></div>
                 </div>
            </div>
            <div className="star" onClick={handleCheckLaterArray}>{!checkLater?<Tippy content="Check for verification" ><i style={{"color":"#D1D7DC"}} className="fa-solid  fa-star"></i></Tippy>: <Tippy content="Uncheck from verification"><i style={{"color":"#B4690E"}} className="fa-solid fa-star"></i></Tippy> }</div>

        </div>

        <div className="form-container">
            <div className="question">
               <strong>{QandA[currentQstnIdx].question}</strong> 
            </div>

            <div className="propositions">
             
                {
                 QandA[currentQstnIdx].type == "OR" ?
                 <ul>
                  { QandA[currentQstnIdx].propositions.map((p,i) => <OResponse   responseIdx={i} answers={answers} currentQstnIdx={currentQstnIdx}  setAnswers={setAnswers}  key={uuidv4()} p={p}/> )}
                 </ul>:
                 <ul>
                 { QandA[currentQstnIdx].propositions.map((p,i) => <MResponse   responseIdx={i} answers={answers} currentQstnIdx={currentQstnIdx}  setAnswers={setAnswers}  key={uuidv4()} p={p}/> )}
                </ul>

            
                  
                

               
                }
               
              
            </div>
         
            <div className="footer">
                {currentQstnIdx>0 && <button id="prev" onClick={ ()=>  setCurrentQstnIdx(prev=> prev - 1)}><strong>Go back</strong></button>}
                {currentQstnIdx==QandA.length-1 ? <button onClick={()=>setIsSubmited(true)}>Submit</button>:(!isAnswered? <button id="skip" onClick={ ()=> setCurrentQstnIdx(prev=> prev + 1)}>Skip question <i className="fa-solid fa-chevron-right"></i></button> :<button onClick={ ()=> setCurrentQstnIdx(prev=> prev + 1)}>Next question</button>) }
       
            </div>
        </div>
    </div>
     </> 
   
    
  )
}

export default Form
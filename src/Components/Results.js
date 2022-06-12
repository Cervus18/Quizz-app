import React, { useEffect, useState } from 'react'
import Result from '../Components/Result'

const Results = ({QandA,answers,checkLaterArray}) => {
  
  




  return (
    <div id="results-container" >
        <div className="results-top">Results</div>
        <div className="results-body">
            {QandA.map((question,idx) => <Result key={idx} checkLaterArray={checkLaterArray} questionItem={question} questionIdx={idx} answer={answers[idx]} />)}
        </div>

    </div>
  )
}

export default Results
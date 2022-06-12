import React, {useState} from 'react'
import Form from './Components/Form'
import "./App.css"
import Results from './Components/Results'


const App = () => {
  const QandA = [
        {
            question: "What is the colour of sky?",
            propositions: ["red","blue","green"],
            type: "OR",
            answers: [1]
        },
        {
            question: "Select numbers bigger than 2?",
            propositions: ["1","3","5"],
            type: "MR",
            answers: [1,2]
        },  
        {
            question: "Select the scientist?",
            propositions: ["Rihanna","Isaac Newton","James Lebron"],
            type: "OR",
            answers: [1]
        }, 
        {
            question: "Select the fruit?",
            propositions: ["pear",'milk',"cheese"],
            type: "OR",
            answers: [0]
        },  
        {
          question: "Select the african countries?",
          propositions: ["Botswana",'Albania',"Honduras","Kenya"],
          type: "MR",
          answers: [0,3]
      }, 
      {
        question: "Select the asian countries",
        propositions: ["Italy","Cuba","Laos","Nepal"],
        type: "MR",
        answers: [2,3]
    }, 
    {
        question: "Who is Neron?",
        propositions: ["A singer","An Emperor","A dancer","An inventor"],
        type: "OR",
        answers: [1]
    },
    {
        question: "Select planets bigger than sun",
        propositions: ["Jupiter","Rigel","All of the above"],
        type: "OR",
        answers: [1,2]
    },
    {
        question: "What is the fruit associated to Isacc Newton",
        propositions: ["Bannana","Ananas","Apple","Watermelon"],
        type: "OR",
        answers: [2]
    },
    {
        question: "Select the longest living animal amongst the following propositions",
        propositions: ["Grey whale","Ant","Elephant","Camel"],
        type: "OR",
        answers: [0]
    },
    {
        question: "Select the correct ascendent order in term of country size",
        propositions: ["Russia-Canada-France","France-China-Russia","China-France-Russia"],
        type: "OR",
        answers: [1]
    },
    {
        question: "Select the correct statements",
        propositions: ["Tanjirkistan is a country","Alaska belonged formerly to Russia","Burundi is the name of a country","Almaty is the name of a city"],
        type: "MR",
        answers: [1,2,3]
    },


  ]


  
  const [answers,setAnswers] = useState(()=> {return new Array(QandA.length).fill([])})
  const [checkLaterArray,setChecklaterArray] = useState([])
  const [isSubmited,setIsSubmited] = useState(false)



  return (
   !isSubmited?
    <Form setIsSubmited={setIsSubmited} QandA={QandA} answers={answers} setAnswers={setAnswers} checkLaterArray={checkLaterArray} setChecklaterArray={setChecklaterArray} />:
    <Results  QandA={QandA} answers={answers} checkLaterArray={checkLaterArray}/>
  )
}

export default App
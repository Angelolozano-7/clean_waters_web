// WrappedQuiz.jsx
import React, { useState } from 'react';
import Quiz from './Quiz';
import Banner from './Banner';
import "./WrappedQuiz.css";

const WrappedQuiz = () => {
  const [answersQuiz, setAnswersQuiz] = useState([]); // Arreglo para almacenar las respuestas de los quizzes
  const [number, setNumber] = useState(0)
  const [sent, setSent] = useState(null)
  const [resetSelection, setResetSelection] = useState(false);
  const [wAnswer, setwAnswer] = useState([]); // Arreglo para almacenar las respuestas de los quizzes


  
  
  const gAnswers =
    {
        0: "Small plastics", 
        1: "Two",
        2: "All the above",
        3: "250g",
        4: "No"
    }
  ;

  const questions = [
    
    {
      question: "What are the microplastics?",
      options: [
        { description: "Small plastics" },
        { description: "Big plastics" },
        { description: "Small metals" },
        { description: "Big metals" }
      ]
    },
    {
      question: "How many types of microplastics are there?",
      options: [
        { description: "One" },
        { description: "Two" },
        { description: "Ten" },
        { description: "One hundred" }
      ]
    },
    {
      question: "Who are affected by microplastics?",
      options: [
        { description: "Humans" },
        { description: "Animals" },
        { description: "Plants" },
        { description: "All the above" }
      ]
    },
    {
      question: "How many microplastics we are eating per year?",
      options: [
        { description: "No eat" },
        { description: "50g" },
        { description: "10g" },
        { description: "250g" }
      ]
    }
    ,
    {
      question: "Can we see easily the microplastics in our water?",
      options: [
        { description: "Yes" },
        { description: "No" }
      ]
    }
    // Agrega más preguntas según sea necesario
  ];



  const handleAnswer = (answer) => {
    // Esta función se ejecutará cada vez que se seleccione una respuesta en un Quiz
    console.log(answer);
    setAnswersQuiz(prevAnswers => [...prevAnswers, answer]);
    
  };

  const addBad= (index) =>{
    //console.log("", index)
    const badAnswer = {
      question: questions[index].question,
      correct: gAnswers[index]
    };
    setwAnswer(prevAnswers => [...prevAnswers, badAnswer]);
    
  }

  const handleSubmit = () => {
    // Esta función se ejecutará cuando se haga clic en el botón "Enviar" en WrappedQuiz
    // Puedes agregar aquí la lógica para comparar las respuestas con las respuestas correctas
    // Por ejemplo, puedes recorrer answersQuiz y comparar con gAnswers
    
    console.log(answersQuiz.length, questions.length)
    if (answersQuiz.length === questions.length){
      const score = answersQuiz.reduce((acc, answer, index) => {
        if (answer.description === gAnswers[index]) {
          return acc + 1;
        } else {
          addBad(index);
          return acc;
        }
      }, 0);

      console.log(wAnswer)
      console.log("score",score)
      setNumber(score)
      setSent(true)
    }
    setResetSelection(true);
    setAnswersQuiz([])

    // recorrer el arreglo y hacer correspondencia 1 a 1 e ir guardando el score, despues guardar en una variable llamada score, con a cual haremos el banner del result
  };



  return (
    <div className='QuizFrame'>
      {questions.map((question, index) => (
        <Quiz key={index} question={question.question} options={question.options}  onAnswer={handleAnswer} resetSelection={resetSelection}/>
      ))}
      <div className="horizontal-line"></div>
      {answersQuiz.length === 0 ?"":
      <div className="send">
        <button className="send-button" onClick={handleSubmit}>Send</button> 
      </div>}
      { sent === null ?
       "" 
       : 
       <div className="feedback">
        <div className="rectangle">
            <h1>Congratulations!</h1>
            <h2>You got {number} questions right!</h2>
        </div>
        {wAnswer.length===0?
        ""
        :
        <div>
          <h2>Now let's see what did we miss</h2>
        </div>}
        {wAnswer.length===0?
        ""
        :<Banner wAnswers={wAnswer}/>}
      </div>
        }
        
      
      
    </div>
  );
};

export default WrappedQuiz;

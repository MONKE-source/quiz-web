import React, { useState } from 'react';
import './App.css';

export default function App() {
  const questions = [
    {
      questionText: 'Which one is streaming on HBO max',
      answerOptions: [
        { answerText: 'Breaking Bad', isCorrect: false },
        { answerText: 'Better call saul', isCorrect: false },
        { answerText: 'The last of us', isCorrect: true },
        { answerText: 'You', isCorrect: false },
      ],
    },
    {
      questionText: 'Which one is streaming on netflix',
      answerOptions: [
        { answerText: 'Avatar', isCorrect: false },
        { answerText: 'Forrest Gump', isCorrect: true },
        { answerText: 'Avengers Endgame', isCorrect: false },
        { answerText: 'Batman and Robin', isCorrect: false },
      ],
    },
    {
      questionText: 'Which one has the least maps ',
      answerOptions: [
        { answerText: 'Fortnite', isCorrect: false },
        { answerText: 'modern warfare 2019', isCorrect: false },
        { answerText: 'valorant', isCorrect: true },
        { answerText: 'overwatch 2', isCorrect: false },
      ],
    },
    {
      questionText: 'Which one of these characters actors are also in the mandalorian ',
      answerOptions: [
        { answerText: 'Walter Hartwell white', isCorrect: false },
        { answerText: 'Skylar', isCorrect: false },
        { answerText: 'Jimmy McGIll', isCorrect: false },
        { answerText: 'Gustavo but you can call me Gus', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetScore = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <div>You scored {score} out of {questions.length}</div>
          <button onClick={handleResetScore}>Reset Score</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


import React from 'react'

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map(question =>
        <li>{question.question}</li>
      )}
    </div>
  )
}

export default QuestionsList
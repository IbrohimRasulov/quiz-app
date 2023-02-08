import React from 'react'
import SingleQuestion from './atoms/SingleQuestion'
import { nanoid } from 'nanoid'

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map(question =>
        <SingleQuestion key={nanoid()} question={question} />
      )}
    </div>
  )
}

export default QuestionsList
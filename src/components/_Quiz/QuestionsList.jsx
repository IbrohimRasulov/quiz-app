import React from 'react'
import { nanoid } from 'nanoid'
import SingleQuestion from './SingleQuestion.jsx'
import Button from '../../shared/Button'

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map(question =>
        <SingleQuestion key={nanoid()} question={question} />
      )}
      <div className="text-center">
        <Button
          content='Check answers'
          className='bg-bg_primary text-secondary hover:bg-primary rounded-medium m-0'
        />
      </div>
    </div>
  )
}

export default QuestionsList

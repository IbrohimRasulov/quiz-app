import React from 'react'
import SingleQuestion from './SingleQuestion.jsx'
import { nanoid } from 'nanoid'
import Button from '../../shared/atoms/Button'

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

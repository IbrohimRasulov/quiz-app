import React from 'react'
import SingleQuestion from './atoms/SingleQuestion'
import { nanoid } from 'nanoid'
import Button from './atoms/Button'

const QuestionsList = ({ questions }) => {
  return (
    <div>
      {questions.map(question =>
        <SingleQuestion key={nanoid()} question={question} />
      )}

      <Button
        content='Check answers'
        className='absolute m-0 bottom-7 left-1/2 -translate-x-1/2 bg-bg_primary text-secondary hover:bg-primary rounded-medium'
      />
    </div>
  )
}

export default QuestionsList
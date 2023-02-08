import React from 'react'
import { nanoid } from 'nanoid'
import Button from './Button'

const SingleQuestion = ({ question }) => {
  const options = [...question.incorrect_answers, question.correct_answer]

  return (
    <div>
      <p className='text-primary text-medium font-bold'>{question.question}</p>
      <div className='my-2'>
        {options.map(option =>
          <Button key={nanoid()} content={option} className="border-btn_border text-primary text-small px-4 py-2 ml-0 mr-5 my-1" />
        )}
      </div>
      <hr className='border-horizontalLine my-4' />
    </div>
  )
}

export default SingleQuestion
import React from 'react'
import { nanoid } from 'nanoid'
import Button from './Button'
import parse from 'html-react-parser';

const SingleQuestion = ({ question }) => {
  const options = [...question.incorrect_answers, question.correct_answer]

  const shuffledOptions = [...options]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
    <div>
      <p className='text-primary text-medium font-bold'>{parse(question.question)}</p>
      <div className='my-2'>
        {shuffledOptions .map(option =>
          <Button
            key={nanoid()}
            content={parse(option)}
            className="border-btn_border rounded-small text-primary text-small px-4 py-2 ml-0 mr-5 my-1 hover:bg-bg_primary hover:text-secondary"
          />
        )}
      </div>
      <hr className='border-horizontalLine my-4' />
    </div>
  )
}

export default SingleQuestion
import React from 'react'
import Button from './Button'
import shuffle from '../utils/shuffle'
import { nanoid } from 'nanoid'
import parse from 'html-react-parser'

const Options = ({ question }) => {
  const options = [...question.incorrect_answers, question.correct_answer]
  const shuffledOptions = shuffle(options)
  return (
    <div className='my-2'>
      {shuffledOptions.map(option =>
        <Button
          key={nanoid()}
          content={parse(option)}
          className="border-btn_border rounded-small text-primary text-small px-4 py-2 ml-0 mr-4 my-1 hover:bg-bg_primary hover:text-secondary"
        />
      )}
    </div>
  )
}

export default Options

import React from 'react'
import parse from 'html-react-parser'
import Options from '../../shared/atoms/Options'

const SingleQuestion = ({ question }) => {
  return (
    <div>
      <p className='text-primary text-medium font-bold'>{parse(question.question)}</p>
      <Options question={question} />
      <hr className='border-horizontalLine my-4' />
    </div>
  )
}

export default SingleQuestion

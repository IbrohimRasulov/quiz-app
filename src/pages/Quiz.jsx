import React, { useState } from 'react'
import BackgroundImage from '../components/layout/BackgroundImage'
import Container from '../components/layout/Container'
import QuestionsList from '../components/QuestionsList'
import useFetch from '../hooks/useFetch'
import ScreenCenter from '../components/layout/ScreenCenter'
import Button from '../components/atoms/Button'

const Questions = () => {
  const { data: questions, isPending, error } = useFetch('https://opentdb.com/api.php?amount=4&category=9&type=multiple')

  return (
    <BackgroundImage className="bg-test_background">
      <Container>
        <ScreenCenter>
          {isPending && <div className='text-medium'>Loading questions...</div>}
          {error && <div>{error}</div>}
        </ScreenCenter>
        {questions && (
          <>
            <QuestionsList questions={questions.results} />
            <Button
              content='Check answers'
              className='absolute m-0 bottom-7 left-1/2 -translate-x-1/2 bg-bg_primary text-secondary hover:bg-primary rounded-medium'
            />
          </>
        )}
      </Container>
    </BackgroundImage>
  )
}

export default Questions
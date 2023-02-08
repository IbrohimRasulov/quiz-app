import React from 'react'
import BackgroundImage from '../components/layout/BackgroundImage'
import Container from '../components/layout/Container'
import QuestionsList from '../components/QuestionsList'
import useFetch from '../hooks/useFetch'
import ScreenCenter from '../components/layout/ScreenCenter'

const Questions = () => {
  const { data: questions, isPending, error } = useFetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')

  return (
    <BackgroundImage className="bg-test_background">
      <Container>
        <ScreenCenter>
          {isPending && <div className='text-medium'>Loading questions...</div>}
          {error && <div>{error}</div>}
        </ScreenCenter>
        {questions && (
          <QuestionsList questions={questions.results} />
        )}
      </Container>
    </BackgroundImage>
  )
}

export default Questions
import React from 'react'
import BackgroundImage from '../components/layouts/BackgroundImage'
import Container from '../components/layouts/Container'
import QuestionsList from '../components/QuestionsList'
import useFetch from '../hooks/useFetch'
import ApiStatusMsg from '../components/ApiStatusMsg'

const Quiz = () => {
  const { data: questions, isPending, error } = useFetch('https://opentdb.com/api.php?amount=4&category=9&type=multiple')

  return (
    <BackgroundImage className="bg-test_background">
      <Container>
        <ApiStatusMsg isPending={isPending} error={error} />
        {questions && <QuestionsList questions={questions.results} />}
      </Container>
    </BackgroundImage>
  )
}

export default Quiz
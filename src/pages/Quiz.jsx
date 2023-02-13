import React from 'react'
import BackgroundImage from '../components/layouts/BackgroundImage'
import Container from '../components/layouts/Container'
import QuestionsList from '../components/QuestionsList'
import useFetch from '../hooks/useFetch'
import ApiStatusMsg from '../components/ApiStatusMsg'
import { questionsApiUrl as url } from '../utils/urls'

const Quiz = () => {
  const { data: questions, isPending, error } = useFetch(url)

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
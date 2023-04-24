import React from 'react'
import BackgroundImage from '../shared/BackgroundImageLayout'
import Container from '../shared/ContainerLayout'
import QuestionsList from '../components/_Quiz/QuestionsList.jsx'
import useFetch from '../hooks/useFetch'
import ApiStatusMsg from '../components/_Quiz/ApiStatusMsg.jsx'
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

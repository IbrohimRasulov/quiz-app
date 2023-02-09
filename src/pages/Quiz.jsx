import React, { useState } from 'react'
import BackgroundImage from '../components/layout/BackgroundImage'
import Container from '../components/layout/Container'
import QuestionsList from '../components/QuestionsList'
import useFetch from '../hooks/useFetch'
import ScreenCenter from '../components/layout/ScreenCenter'
import Button from '../components/atoms/Button'

const Questions = () => {
  const { data: questions, isPending, error } = useFetch('https://opentdb.com/api.php?amount=4&category=9&type=multiple')
  const [isTestCompleted, setIsTestCompleted] = useState(false)

  return (
    <BackgroundImage className="bg-test_background">
      <Container>
        <ScreenCenter>
          {isPending && <div className='text-medium'>Loading questions...</div>}
          {error && <div>{error}</div>}
        </ScreenCenter>
        {questions && (
          <div>
            <QuestionsList questions={questions.results} />

            {isTestCompleted ?
              <Button
                content='Check answers'
                className='absolute m-0 bottom-7 left-1/2 -translate-x-1/2 bg-bg_primary text-secondary hover:bg-primary rounded-medium'
              /> :
              <Button
                content='Check answers'
                className='fixed m-0 bottom-0 left-1/2 -translate-x-1/2 bg-bg_primary text-secondary rounded-medium'
                isDisabled={true}
              />}
          </div>
        )}
      </Container>
    </BackgroundImage>
  )
}

export default Questions
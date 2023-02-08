import React from 'react'
import SingleQuestion from '../atoms/SingleQuestion'
import BackgroundImage from '../layout/BackgroundImage'
import Container from '../layout/Container'
import useFetch from '../../hooks/useFetch'

const Questions = () => {
  const { data: questions, isPending, error } = useFetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')

  return (
    <BackgroundImage className="bg-test_background">
      <Container>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {questions && (
          <SingleQuestion />
        )}
      </Container>
    </BackgroundImage>
  )
}

export default Questions
import React from "react"
import { NavLink } from "react-router-dom"
import Button from "../components/atoms/Button"
import BackgroundImage from "../components/layout/BackgroundImage"
import Container from "../components/layout/Container"
import ScreenCenter from "../components/layout/ScreenCenter"

const Intro = () => {
  return (
    <BackgroundImage className="bg-intro_background">
      <ScreenCenter className="text-center">
        <Container>
          <h2 className="text-primary text-large">Quizzical</h2>
          <p className="text-primary text-medium">Some description if needed</p>

          <NavLink to="quiz">
            <Button
              content="Start quiz"
              className="text-secondary bg-bg_primary rounded-large px-7 mt-6 mb-0"
            />
          </NavLink>
        </Container>
      </ScreenCenter>
    </BackgroundImage>
  )
}

export default Intro

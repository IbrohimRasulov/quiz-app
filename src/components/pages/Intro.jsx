import React from "react"
import { NavLink } from "react-router-dom"
import Button from "../atoms/Button"
import BackgroundImage from "../layout/BackgroundImage"
import Container from "../layout/Container"
import ScreenCenter from "../layout/ScreenCenter"

const Intro = () => {
  return (
    <BackgroundImage className="bg-intro_background">
      <ScreenCenter className="text-center">
        <Container>
          <h2 className="text-primary text-large">Quizzical</h2>
          <p className="text-primary text-medium">Some description if needed</p>

          <NavLink to="questions">
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

import React from "react"
import { NavLink } from "react-router-dom"
import Button from "../shared/Button"
import BackgroundImage from "../shared/BackgroundImageLayout"
import ScreenCenter from "../shared/ScreenCenterLayout"
import Loader from '../components/_Intro/Loader.jsx'

const Intro = () => {
  return (
    <BackgroundImage className="bg-intro_background">
      <ScreenCenter className="text-center">
        <h2 className="text-primary text-large">Quizzical</h2>
        <p className="text-primary text-medium">Some description if needed</p>
        <NavLink to="quiz">
          <Button content="Start quiz" className="text-secondary bg-bg_primary px-7 mt-6 mb-0 rounded-large hover:bg-primary" />
        </NavLink>
        <Loader />
      </ScreenCenter>
    </BackgroundImage>
  )
}

export default Intro

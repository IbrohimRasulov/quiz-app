import React from "react";
import Button from "../atoms/Button";
import Container from "../layout/Container";
import ScreenCenter from "../layout/ScreenCenter";

function Intro() {
  return (
    <div className="bg-intro_background bg-no-repeat bg-cover bg-center bg-fixed w-100">
      <ScreenCenter className="text-center">
        <Container>
          <h2 className="text-primary text-large">Quizzical</h2>
          <p className="text-primary text-medium">Some description if needed</p>
          <Button
            content="Start quiz"
            className="text-secondary bg-bg_primary rounded-large px-7 mt-6 mb-0"
          />
        </Container>
      </ScreenCenter>
    </div>
  );
}

export default Intro;

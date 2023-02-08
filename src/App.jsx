import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from "./components/pages/Intro"
import Quiz from "./components/pages/Quiz"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

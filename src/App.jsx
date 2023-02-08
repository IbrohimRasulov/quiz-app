import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Intro from "./components/pages/Intro"
import Questions from "./components/pages/Questions"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="questions" element={<Questions />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

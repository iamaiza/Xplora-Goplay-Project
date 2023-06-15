import React from "react"
import { Route, Routes } from "react-router-dom"
import { LandingPage, Login } from "./index"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

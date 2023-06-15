import React from "react"
import { Route, Routes } from "react-router-dom"
import { LandingPage, Login, SignUp } from "./index"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App

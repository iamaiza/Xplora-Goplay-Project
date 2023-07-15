import React from "react"
import { Route, Routes } from "react-router-dom"
import { LandingPage, Login, Dashboard, SignUp, Welcome, Adventures, MarketplacePage, AuctionPage, ArcadePage, WatchFacePage, WatchRingtonesPage } from "./index"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Adventures />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/arcade" element={<ArcadePage />} />
        <Route path="/watch-faces" element={<WatchFacePage />} />
        <Route path="/watch-ringtones" element={<WatchRingtonesPage />} />
      </Routes>

  )
}

export default App

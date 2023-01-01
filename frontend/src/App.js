import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./containers/HomePage"
import Login from "./containers/Login"
// import Register from "./containers/Register"
// import Calendar from "./containers/Calendar"
import AppBar from "./components/AppBar"
// import Login from "./components/Login"
import Register from "./containers/Register"
import Calendar from "./components/Calendar"
import Participant from "./containers/ParticipantPage"
import Host from "./containers/HostPage"

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/participant" element={<Participant />} />
        <Route exact path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

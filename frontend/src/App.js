import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./containers/HomePage"
import Login from "./containers/Login"
import AppBar from "./components/AppBar"
import Register from "./containers/Register"
import Calendar from "./components/Calendar"
import Participant from "./containers/ParticipantPage"
import Host from "./containers/HostPage"

const App = () => {
  const Appbar = (element) => (
    <>
      <AppBar />
      {element}
    </>
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Appbar(<HomePage />)} />
        <Route exact path="/login" element={Appbar(<Login />)} />
        <Route exact path="/register" element={Appbar(<Register />)} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/participant" element={<Participant />} />
        <Route exact path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

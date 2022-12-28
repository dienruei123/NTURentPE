import React from "react"
// import logo from "./logo.svg"
// import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./containers/HomePage"
// import Login from "./containers/Login"
import Login from "./containers/Login"
import Register from "./containers/Register"
import Calendar from "./containers/Calendar"
import AppBar from "./components/AppBar"

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
        <Route exact path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
// import logo from "./logo.svg"
// import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./containers/Home"
import Login from "./containers/Login"
import Register from "./containers/Register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

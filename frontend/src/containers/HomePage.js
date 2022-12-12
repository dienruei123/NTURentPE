import React from "react"
import styled from "styled-components"
import Button from "@mui/material/Button"
import Envelope from "../components/Envelope"
import AppBar from "../components/AppBar"
// import "./w3.css"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  h1 {
    margin: 0;
    margin-right: 20px;
    font-size: 3em;
  }
`

const Homepage = () => {
  return (
    <Wrapper>
      <AppBar />
      <Envelope />
    </Wrapper>
  )
}

export default Homepage

import React, { useState } from "react"
import styled from "styled-components"
import Button from "@mui/material/Button"
import AppBar from "../components/AppBar"
import MyCalendar from "./Calendar"
import { Box } from "@mui/system"
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
  const [signIn, setSignIn] = useState(true)
  return (
    <Wrapper>
      <AppBar signIn={signIn} />
      {/* <Envelope /> */}
      <Box
        sx={{
          top: "100px",
        }}
      >
        {signIn ? <MyCalendar /> : <></>}
      </Box>
    </Wrapper>
  )
}

export default Homepage

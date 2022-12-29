import React, { useState } from "react"
import styled from "styled-components"
import Button from "@mui/material/Button"
import AppBar from "../components/AppBar"
import MyCalendar from "../components/Calendar"
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
  const [signIn, setSignIn] = useState(false)
  return (
    <Wrapper>
      {/* <Envelope /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 12,
          width: "65%",
          // border: "1px solid black",
        }}
      >
        {signIn ? <MyCalendar /> : <></>}
      </Box>
    </Wrapper>
  )
}

export default Homepage

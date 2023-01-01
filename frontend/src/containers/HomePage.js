import React, { useState } from "react"
import styled from "styled-components"
import Button from "@mui/material/Button"
import AppBar from "../components/AppBar"
import MyCalendar from "../components/Calendar"
import { Box } from "@mui/system"
import { useRent } from "./hooks/useRent"

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
  const { signedIn, setSignedIn } = useRent()
  return (
    <Wrapper>
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
        {signedIn ? <MyCalendar /> : <></>}
      </Box>
    </Wrapper>
  )
}

export default Homepage

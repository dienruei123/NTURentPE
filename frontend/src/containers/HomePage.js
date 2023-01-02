import React, { useState } from "react"
import styled from "styled-components"
import { useRent } from "./hooks/useRent"
import Participant from "./ParticipantPage"
import Host from "./HostPage"
import Admin from "./AdminPage"
import { Typography } from "@mui/material"

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
  const useRentContext = useRent()
  const { identity } = useRentContext
  const { signedIn } = useRentContext
  const Welcome = () => {
    return (
      <Typography
        sx={{
          mt: 12,
          ml: 5,
        }}
      >
        Welcome to Event Registration Center! Please first create an account and
        login to activate your own service.
      </Typography>
    )
  }
  const renderPage = () => {
    if (!signedIn) return <Welcome />
    switch (identity) {
      case "Participant": {
        return <Participant />
      }
      case "Host": {
        return <Host />
      }
      case "Admin": {
        return <Admin />
      }
      default: {
        throw new Error("INVALID_IDENTITY_ERROR")
      }
    }
  }
  return <Wrapper>{renderPage()}</Wrapper>
}

export default Homepage

import React, { useState } from "react"
import ButtonAppBar from "../components/AppBar"
import EventList from "../components/EventList"
import styled from "styled-components"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import ComplexGrid from "../components/Grid"
import { useNavigate } from "react-router"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  margin-top: 70px;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: scroll;
`
const AllEventsWrapper = styled.div`
  height: 100%;
  width: 80%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 2em;
  align-items: center;
  justify-content: space-around;
  overflow: scroll;
  z-index: -1;
`

const AllEvent = () => {
  const info = [
    {
      date: "12/31",
      name: "New Year Night",
      subtitle: "time flies",
      property: ["fireworks", "nice"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/1",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/2",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/3",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/4",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/5",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/6",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/7",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/8",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/9",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/10",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
    {
      date: "1/11",
      name: "New Year",
      subtitle: "time flies",
      property: ["popular", "happy"],
      description: "New Year Night",
      host: "oscar",
    },
  ]

  function MultilineTextFields() {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Search"
            multiline
            maxRows={4}
          />
        </div>
      </Box>
    )
  }

  // console.log(info)
  return (
    <Wrapper>
      <ButtonAppBar />
      <BodyWrapper>
        <MultilineTextFields />
        <AllEventsWrapper>
          {info.map((event) => (
            <ComplexGrid
              name={event.name}
              description={event.description}
              host={event.host}
              date={event.date}
              // onClick={handleEvent}
            />
          ))}
        </AllEventsWrapper>
      </BodyWrapper>
    </Wrapper>
  )
}

export default AllEvent

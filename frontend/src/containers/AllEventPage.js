import React, { useState } from "react"
import ButtonAppBar from "../components/AppBar"
import EventList from "../components/EventList"
import styled from "styled-components"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import ComplexGrid from "../components/Grid"
import { useNavigate } from "react-router"
import AllEventQuery from "./AllEventQuery"
import { useQuery } from "@apollo/client"
import { ALLEVENTS_QUERY } from "../graphql"

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
`

const weekDay = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const AllEvent = () => {
    const toDateString = (date) => {
        const newDate = new Date(parseInt(date))
        return weekDay[newDate.getDay()] + ' ' + newDate.toLocaleDateString("en-US", {
            // year: "numeric",
            month: "numeric",
            day: "numeric",
        })
    }

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
    const { data, loading, error } = useQuery(ALLEVENTS_QUERY, { pollInterval: 1, })
    console.log(data, loading, error)

    return (
        <Wrapper>
            <ButtonAppBar />
            <BodyWrapper>
                <MultilineTextFields />
                <AllEventsWrapper>
                    {!data ? <></> : data.allEvents.map((event) => (
                        <ComplexGrid
                            name={event.eventname}
                            description={event.description}
                            host={event.hostname}
                            date={toDateString(event.eventdatefrom)}
                            photo={event.imageURL}
                        />
                    ))}
                </AllEventsWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}

export default AllEvent

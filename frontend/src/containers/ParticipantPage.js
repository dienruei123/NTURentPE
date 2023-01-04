import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Calendar from "../components/Calendar"
import EventList from "../components/EventList"
import { useRent } from "./hooks/useRent"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  margin-top: 100px;
  height: 90%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
`

const CalendarWrapper = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; 
  left: 0;
`

const EventWrapper = styled.div`
  height: 100%;
  width: 30%;
  margin-left: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
  z-index: -1;
`

const Participant = () => {
  const [info, setInfo] = useState([
    {
      date: "12/31",
      name: "New Year",
      property: ["popular", "nice"],
    },
  ])
  const { data } = useRent()
  const [userInfo, setUserInfo] = useState([])

  useEffect(()=>{
    if (data.users.events.length) {
      let newUserInfo = []
      data.users.events.map(e=>{
        let timefrom = new Date(parseInt(e.eventdatefrom))
        let timeto = new Date(parseInt(e.eventdateto))
        const date = `Date From ${timefrom}, Date to ${timeto}`
        newUserInfo.push({name: e.eventname, date: date, property: e.tags})      
      })
    }
  },[data])

  return (
    <Wrapper>
      <BodyWrapper>
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
        <EventWrapper>
          <EventList info={userInfo}></EventList>
        </EventWrapper>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Participant

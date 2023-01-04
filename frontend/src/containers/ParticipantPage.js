import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Calendar from "../components/Calendar"
import EventList from "../components/EventList"
import { useRent } from "./hooks/useRent"
import { EVENT_JOINED_SUBSCRIPTION, EVENT_CANCELED_SUBSCRIPTION } from "../graphql"

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
  const { data, subscribeToMore } = useRent()
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(()=>{
    subscribeToMore({
      document: EVENT_JOINED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const event = subscriptionData.data.eventJoined;
        console.log(event)
        return {
          users: {
            id: prev.users.id,
            username: prev.users.username,
            identity: prev.users.identity,
            events: [event, ...prev.users.events],
            isLoggedIn: prev.users.isLoggedIn,
          },
        };
      },
    });
  },[subscribeToMore])

  useEffect(()=>{
    subscribeToMore({
      document: EVENT_CANCELED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const event = subscriptionData.data.eventCanceled;
        console.log(event)
        return {
          users: {
            id: prev.users.id,
            username: prev.users.username,
            identity: prev.users.identity,
            events: prev.users.events.splice(prev.users.events.findIndex((e) => e.eventname === event.eventname),1),
            isLoggedIn: prev.users.isLoggedIn,
          },
        };
      },
    });
  },[subscribeToMore])

  useEffect(()=>{
    if (data.users.events.length) {
      let newUserInfo = []
      data.users.events.map(e=>{
        let timefrom = new Date(parseInt(e.eventdatefrom))
        let timeto = new Date(parseInt(e.eventdateto))
        const date = `Date From ${timefrom}, Date to ${timeto}`
        newUserInfo.push({name: e.eventname, date: date, property: e.tags})      
      })
      setUserInfo(newUserInfo)
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

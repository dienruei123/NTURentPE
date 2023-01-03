import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Calendar from "../components/Calendar"
import ProposalList from "../components/ProposalList"
import { EVENT_CREATED_SUBSCRIPTION } from "../graphql"
import { useRent } from './hooks/useRent';

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

const EventWrapper = styled.div`
  height: 100%;
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
`

const Host = () => {
  const [info, setInfo] = useState([
    { date: "12/31", name: "New Year", property: "success" },
    { date: "1/6", name: "Music Presentation", property: "progressing" },
  ])
  const { data, subscribeToMore } = useRent()
  let userInfo = []

  useEffect(()=>{
    subscribeToMore({
      document: EVENT_CREATED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const event = subscriptionData.data.eventCreated;
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
    data.users.events.map(e=>{
      const date = `Date From ${e.eventdatefrom}, Date to ${e.eventdateto}`
      userInfo.push({name: e.eventname, date: date, property: "success"})      
    })
  },[data])
  

  return (
    <Wrapper>
      <BodyWrapper>
        <Calendar />
        <EventWrapper>
          <ProposalList info={userInfo}></ProposalList>
        </EventWrapper>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Host

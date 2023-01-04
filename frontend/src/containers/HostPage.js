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
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
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

const Host = () => {
  const [info, setInfo] = useState([
    { date: "12/31", name: "New Year", property: "success" },
    { date: "1/6", name: "Music Presentation", property: "progressing" },
  ])
  const { data, subscribeToMore, loading } = useRent()
  const [userInfo, setUserInfo] = useState([])

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
  },[subscribeToMore, data])

  useEffect(()=>{
    console.log(data.users.events)
    let newUserInfo = []
    console.log(data.users.events)
    data.users.events.map(e=>{
      
      let datefrom = new Date(parseInt(e.eventdatefrom))
      let dateto = new Date(parseInt(e.eventdateto))
      const date = `Date From ${datefrom}, Date to ${dateto}`
      newUserInfo.push({name: e.eventname, date: date, property: "success"})      
    })
    setUserInfo(newUserInfo)
  },[data])
  

  return (
    <Wrapper>
      <BodyWrapper>
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
        
        <EventWrapper>
          <ProposalList info={userInfo}></ProposalList>
        </EventWrapper>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Host

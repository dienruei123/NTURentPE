import React, { useState } from 'react';
import ButtonAppBar from '../components/AppBar';
import EventList from "../components/EventList"
import styled from 'styled-components';

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
  flex-direction: row;
  align-items: space-around;
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

const AllEvent = () => {
    const [info, setInfo] = useState([
        {
            date: "12/31",
            name: "New Year Night",
            subtitle: "time flies",
            property: ["fireworks", "nice"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
        {
            date: "1/1",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "happy"],
        },
    ])
    console.log(info)
    return (
        <Wrapper>
            <ButtonAppBar />
            <BodyWrapper>
                <EventWrapper>
                    <EventList info={info} />
                </EventWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}

export default AllEvent
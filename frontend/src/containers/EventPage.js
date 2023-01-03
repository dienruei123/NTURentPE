import React, { useState } from "react"
import styled from "styled-components"
import ButtonAppBar from "../components/AppBar.js"
import EventList from "../components/EventList"
import BasicModal from "../components/EventModal"
import Comment from "./comment"
import newyearpic from '../eventPictures/2023_NEW-YORK.jpg'
import { useRent } from "./hooks/useRent"
import { useParams } from 'react-router-dom'
import Paper from "@mui/material/Paper";
import Stars from '../components/stars';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './css/eventPage.css'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  margin-top: 65px;
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
const HostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Event = (Host) => {
    const useRentContext = useRent()
    const { username } = useRentContext
    const [info, setInfo] = useState([
        {
            date: "12/31",
            name: "New Year",
            subtitle: "time flies",
            property: ["popular", "nice"],
        },
        
    ])
    const [open, setOpen] = useState(true);
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    let rating = 0;
    for (let i = 0; i < comments.length; i++) {
        rating += comments[i].rating;
    }
    rating = rating / comments.length;
    console.log(Host)
    return (
        <Wrapper>
            <ButtonAppBar />
            <BodyWrapper>
                {/* <BasicModal open={open} handleClose={handleClose}/> */}
                <EventWrapper>
                    <EventList info={info}></EventList>
                    <HostWrapper>
                        <IconWrapper>
                            <PeopleAltIcon color="secondary"/>Host
                        </IconWrapper>
                        {Host.Host.name}
                    </HostWrapper>
                    {(comments.length === 0) ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </EventWrapper>
                <div className='eventPageContainer'>
                    <div className="infoContainer">
                        <img className='photo' src={newyearpic} alt="new year" />
                        <Paper elevation={3}>
                            Description: <br/>
                            {Host.Host.description}
                        </Paper>
                        
                    </div>
                    <div className="commentsContainer">
                        <Comment eventId={id} comments={comments} setComments={setComments} setLoad={setLoading} />
                    </div>
                </div>
            </BodyWrapper>
        </Wrapper>
    )
}

export default Event

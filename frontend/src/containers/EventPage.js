import React, { useState } from "react"
import styled from "styled-components"
import ButtonAppBar from "../components/AppBar.js"
import Comment from "./comment"
import newyearpic from "../eventPictures/2023_NEW-YORK.jpg"
import { useRent } from "./hooks/useRent"
import { useParams } from "react-router-dom"
import Stars from "../components/stars"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import "./css/eventPage.css"
import { IconButton } from "@mui/material"
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"
import DateRangeIcon from "@mui/icons-material/DateRange"
import PlaceIcon from "@mui/icons-material/Place"
import StyleIcon from "@mui/icons-material/Style"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { useQuery } from "@apollo/client"
import { EVENT_QUERY } from "../graphql/queries.js"
import { weekdays } from "moment"

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
  width: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
`
const CommentWrapper = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
const HostWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  min-width: 320px;
  max-width: fit-content;
  font-family: Roboto;
  flex-direction: row;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Event = (Host) => {
  const { id } = useParams()
  console.log(id)
  const useRentContext = useRent()
  const { username, addtoEventlist } = useRentContext
  //   const [info, setInfo] = useState([
  //     {
  //       id: "1",
  //       date: "12/31",
  //       name: "New Year",
  //       subtitle: "time flies",
  //       property: ["popular", "nice"],
  //     },
  //   ])
  const { data, error } = useQuery(EVENT_QUERY, {
    variables: {
      eventname: id,
    },
  })
  console.log(data)
  // const { event } = data
  //   console.log(event)
  const [open, setOpen] = useState(true)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [isjoined, setIsjoined] = useState(false)

  const toDateString = (date) => {
    const newDate = new Date(parseInt(date))
    return (
      weekDay[newDate.getDay()] +
      " " +
      newDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
      })
    )
  }

  let rating = 0
  for (let i = 0; i < comments.length; i++) {
    rating += comments[i].rating
  }
  rating = rating / comments.length
  console.log(Host)
  const AddToEventlist = async () => {
    // try {
    //   const { data } = await addtoEventlist({
    //     variables: {
    //       username: username,
    //       eventname: info[0].name,
    //     },
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Wrapper>
      {!data ? (
        <></>
      ) : (
        <BodyWrapper>
          <EventWrapper>
            <div className="mainpictureContainer">
              <div className="mainpicture">
                <img
                  className="photo"
                  src={data.event.imageURL}
                  alt="new year"
                />
              </div>
              <div className="infoContainer">
                <div className="list">
                  <DateRangeIcon style={{ padding: "0.5em" }} />
                  <p className="info">Sunday, Mar 19th 2023</p>
                </div>
                <div className="list">
                  <PlaceIcon style={{ padding: "0.5em" }} />
                  <p className="info">New York City </p>
                </div>
                <div className="list">
                  <StyleIcon style={{ padding: "0.5em" }} />
                  <div className="info">
                    <Stack direction="row" spacing={1}>
                      <Chip label="primary" color="primary" />
                      <Chip label="success" color="success" />
                    </Stack>
                  </div>
                </div>
                <div className="list">
                  <IconButton
                    onClick={AddToEventlist}
                    style={{ width: "48px", height: "48px", cursor: "pointer" }}
                  >
                    {isjoined ? (
                      <BookmarkAddedIcon style={{ padding: "0.5em" }} />
                    ) : (
                      <BookmarkAddIcon style={{ padding: "0.5em" }} />
                    )}
                  </IconButton>
                  <p className="info">Add to My Event</p>
                </div>
              </div>
            </div>
            <h2 className="description">Description</h2>
            <hr className="line"></hr>
            <div className="paragraph">
              <p>jhsbdcvsyhfvytfvfvjhgb</p>
            </div>
            <HostWrapper>
              <div style={{ padding: "0px 25px 0px 0px" }}>
                <div className="hostIcon">N</div>
              </div>
              <div>
                <strong className="hostedby">HOSTED BY</strong>
                <p className="hostName">
                  NewYork Travel Association International
                </p>
                <h1></h1>
                <button className="buttonstyle" type="button">
                  <span>Contact</span>
                </button>
              </div>
            </HostWrapper>
          </EventWrapper>
          <CommentWrapper>
            {comments.length === 0 ? (
              <div className="centerparagraph">
                <p>No Rating yet ...</p>
              </div>
            ) : (
              <Stars rating={rating} displayScore={true} />
            )}
            <div className="commentsContainer">
              <Comment
                eventId={id}
                comments={comments}
                setComments={setComments}
                setLoad={setLoading}
              />
            </div>
          </CommentWrapper>
          {/* <EventWrapper>
                    <EventList info={info}></EventList>
                    <HostWrapper>
                        <IconWrapper>
                            <PeopleAltIcon color="secondary" />Host
                        </IconWrapper>
                        {Host.Host.name}
                    </HostWrapper>
                    <IconButton onClick={AddToEventlist}>
                        {(isjoined)? <BookmarkAddedIcon />: <BookmarkAddIcon />}
                    </IconButton>
                    {(comments.length === 0) ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </EventWrapper> */}
          {/* <div className='eventPageContainer'>
                    <div className="infoContainer">
                        <img className='photo' src={newyearpic} alt="new year" />
                        <Paper elevation={3} style={{ padding: "8px", margin: "10px 10px 8px 10px", border: "1px solid black" }}>
                            Description: <br />
                            {Host.Host.description}
                        </Paper>

                    </div>
                    <div className="commentsContainer">
                        <Comment eventId={id} comments={comments} setComments={setComments} setLoad={setLoading} />
                    </div>
                </div> */}
        </BodyWrapper>
      )}
    </Wrapper>
  )
}

export default Event

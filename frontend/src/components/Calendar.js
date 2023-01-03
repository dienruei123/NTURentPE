import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import Events from "./events"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useRent } from "../containers/hooks/useRent"
import { useState, useEffect } from "react"

const localizer = momentLocalizer(moment)

const myEventsList = Events
let EventsList = []

const MyCalendar = (props) => {
  const  { data } = useRent()

  useEffect(()=>{
    const { users } = data
    if (users.events) {
      users.events.map((e)=>{
        let timefrom = new Date(e.eventdatefom.valueOf) 
        let timeto = new Date(e.eventdateto.valueOf)
        EventsList.push({"title":e.eventname, "start":timefrom, "end":timeto})
      })
    }
    console.log(users.identity)
  },[data])

  return(
    <div>
    <Calendar
      localizer={localizer}
      events={EventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, minWidth: 650 }}
    />
  </div>
  ) 
}
export default MyCalendar

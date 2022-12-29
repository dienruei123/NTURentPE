import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import Events from "./events"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)
const myEventsList = Events

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, minWidth: 650 }}
    />
  </div>
)
export default MyCalendar

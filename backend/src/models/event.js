import mongoose from "mongoose"

const { Schema } = mongoose

/******  Event Schema  ******/
const EventSchema = new Schema({
  // Event Info
  eventname: { type: String, required: [true, "EventName field is required."] },
  hostname: { type: String, required: [true, "HostName field is required."] },
  eventdatefrom: {
    type: Date,
    required: [true, "EventDate field is required."],
  },
  eventdateto: { type: Date, required: [true, "EventDate field is required."] },
  tags: [{ type: String }],
  // subtitle: { type: String },
  description: { type: String },
  maxparticipants: Number,

  // Event subs
  participants: [{ type: String }],
  rating: Number,
  comments: [{ sender: String, body: String }],
  onclicks: Number,

  // For admin
  verified: Boolean,
  trending: Boolean,
})

const EventModel = mongoose.model("event", EventSchema)

export default EventModel

import { gql } from "@apollo/client"

export const USERS_QUERY = gql`
  query users($token: String!) {
    users(token: $token) {
      username
      identity
      events {
        eventname
        hostname
        eventdatefrom
        eventdateto
        imageURL
        tags
        description
      }
    }
  }
`

export const ALLEVENTS_QUERY = gql`
  query allEvents {
    allEvents {
      eventname
      hostname
      eventdatefrom
      eventdateto
      tags
      description
      imageURL
      maxparticipants
    }
  }
`

export const EVENT_QUERY = gql`
  query event($eventname: String!) {
    event(eventname: $eventname) {
      eventname
      hostname
      eventdatefrom
      eventdateto
      tags
      description
      imageURL
      maxparticipants
    }
  }
`

import { gql } from "@apollo/client"

export const USERS_QUERY = gql`
  query users($token: String!) {
    users(token: $token) {
      username
      identity
      events {
        id
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
      id
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
  query event($id: ID!) {
    event(id: $id) {
      id
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

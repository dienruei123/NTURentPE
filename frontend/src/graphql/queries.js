import { gql } from "@apollo/client"

export const USERS_QUERY = gql`
  query users($token: String!) {
    users(token: $token) {
      username
      identity
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

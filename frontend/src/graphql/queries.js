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

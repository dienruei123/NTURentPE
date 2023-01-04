import { gql } from "@apollo/client"

export const EVENT_CREATED_SUBSCRIPTION = gql`
  subscription EventCreated {
    eventCreated {
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
`

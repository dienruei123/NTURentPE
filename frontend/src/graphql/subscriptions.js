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
`;
export const EVENT_JOINED_SUBSCRIPTION = gql`
  subscription EventJoined {
    eventJoined {
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
`;
export const EVENT_CANCELED_SUBSCRIPTION = gql`
  subscription EventCanceled {
    eventCanceled {
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
`;

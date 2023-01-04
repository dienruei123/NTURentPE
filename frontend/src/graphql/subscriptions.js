import { gql } from '@apollo/client';

export const EVENT_CREATED_SUBSCRIPTION = gql`
  subscription EventCreated {
    eventCreated {
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
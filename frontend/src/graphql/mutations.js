import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $passwd: String!) {
    login(username: $username, passwd: $passwd)
  }
`

export const REGISTER_MUTATION = gql`
  mutation register($username: String!, $passwd: String!, $identity: String!) {
    register(username: $username, passwd: $passwd, identity: $identity) {
      id
      username
      identity
      events {
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
  }
`

export const LOGOUT_MUTATION = gql`
  mutation logout($username: String!) {
    logout(username: $username) {
      id
      username
      isLoggedIn
    }
  }
`

export const EVENT_MUTATION = gql`
  mutation event(
    $eventname: String!
    $hostname: String!
    $eventdatefrom: String!
    $eventdateto: String!
    $tags: [String!]
    $description: String!
  ) {
    event(
      eventname: $eventname
      hostname: $hostname
      eventdatefrom: $eventdatefrom
      eventdateto: $eventdateto
      tags: $tags
      description: $description
    ) {
      eventname
      hostname
      eventdatefrom
      eventdateto
      tags
      description
    }
  }
`
export const ADDTOEVENTLIST_MUTATION = gql`
  mutation addtoEventlist($username: String!, $eventname: String!) {
    addtoEventlist(username: $username, eventname: $eventname)
  }
`

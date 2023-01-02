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

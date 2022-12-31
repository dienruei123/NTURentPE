import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../../graphql"
import { createContext, useContext, useEffect, useState } from "react"

const LOCALSTORAGE_REMEMBER = "remember-me"
const rememberUser = localStorage.getItem(LOCALSTORAGE_REMEMBER)

const RentContext = createContext({
  username: "",
  passwd: "",
  identity: "",
  signedIn: false,
  remUser: false,
})
const RentProvider = (props) => {
  const [username, setUsername] = useState("")
  const [passwd, setPasswd] = useState("")
  const [identity, setIdentity] = useState("")
  const [signedIn, setSignedIn] = useState(false)
  const [remUser, setRemUser] = useState(rememberUser || false)

  const [login] = useMutation(LOGIN_MUTATION)
  const [register] = useMutation(REGISTER_MUTATION)
  //   useEffect(() => {
  //     if (signedIn) {
  //       localStorage.setItem(LOCALSTORAGE_KEY, username)
  //     }
  //   }, [signedIn])
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_REMEMBER, remUser)
  }, [remUser])

  return (
    <RentContext.Provider
      value={{
        username,
        passwd,
        identity,
        signedIn,
        remUser,
        setUsername,
        setPasswd,
        setIdentity,
        setSignedIn,
        setRemUser,
        login,
        register,
      }}
      {...props}
    />
  )
}

const useRent = () => useContext(RentContext)
export { RentProvider, useRent }

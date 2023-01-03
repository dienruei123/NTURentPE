import * as React from "react"
import { BrowserRouter } from 'react-router-dom';
import DefaultBar from "./DefaultBar"
import PersonalBar from "./PersonalBar"
import HostBar from "./HostBar"
import { useRent } from "../containers/hooks/useRent"

const ButtonAppBar = () => {
  const useRentContext = useRent()
  const { identity } = useRentContext
  const { signedIn } = useRentContext

  const renderBar = () => {
    if (!signedIn) return <BrowserRouter><DefaultBar /></BrowserRouter>
    switch (identity) {
      case "Participant":
        return <BrowserRouter><PersonalBar /></BrowserRouter>
      case "Host":
        return <BrowserRouter><HostBar /></BrowserRouter>
      case "Admin":
        return <BrowserRouter><PersonalBar /></BrowserRouter>
      default:
        throw new Error("INVALID_IDENTITY_ERROR")
    }
  }
  return renderBar()
}

export default ButtonAppBar

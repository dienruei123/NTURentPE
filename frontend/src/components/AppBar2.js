import * as React from "react"
import "./w3.css"
import { useNavigate } from "react-router"

export default function ButtonAppBar() {
    const navigate = useNavigate()
    const Navigation = () => {
      return (
        <div className="w3-top">
          <div className="w3-bar w3-white w3-padding w3-card w3-wide">
            <p className="w3-bar-item w3-button">NTURenT</p>
            {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
            <div className="w3-right w3-hide-small">
              <p className="w3-bar-item w3-button" onClick={() => navigate("/login")}>
                Profile
              </p>
              <p href="#about" className="w3-bar-item w3-button">
                Notification
              </p>
              <p href="#contact" className="w3-bar-item w3-button">
                More
              </p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <Navigation />
    )
  }
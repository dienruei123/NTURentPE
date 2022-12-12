import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router"
import "./w3.css"

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const Navigation = () => {
    return (
      <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card w3-wide">
          <p class="w3-bar-item w3-button">Gourmet au Catering</p>
          {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
          <div class="w3-right w3-hide-small">
            <p class="w3-bar-item w3-button" onClick={() => navigate("/login")}>
              Login
            </p>
            <p href="#about" class="w3-bar-item w3-button">
              About
            </p>
            {/* <p href="#menu" class="w3-bar-item w3-button">Menu</p> */}
            <p href="#contact" class="w3-bar-item w3-button">
              Contact
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Event Registration Center
    //       </Typography>
    //       <Button color="inherit" onClick={() => navigate("/login")}>
    //         Login
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Navigation />
  )
}

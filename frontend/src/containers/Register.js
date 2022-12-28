import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  Avatar,
  // FormControlLabel,
  // Checkbox,
} from "@mui/material"
import { useNavigate } from "react-router"
import styled from "styled-components"
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone"

import Copyright from "../components/customCopyright"

const BoxField = styled(Box)({
  mt: 2,
  mb: 2,
})

const Register = (props) => {
  // console.log(
  //   window.innerHeight,
  //   window.innerWidth,
  //   window.outerHeight,
  //   window.outerWidth
  // )
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    })
  }
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        margin: 0,
        height: window.innerHeight,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          pt: 3,
          pl: 5,
          pb: 3,
          pr: 5,
          // border: "2.5px dashed black",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "rgba(100, 100, 100, 0.1)",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "lightgreen", transform: "scale(1.2)" }}>
          <LockTwoToneIcon sx={{ color: "black", opacity: 0.7 }} />
        </Avatar>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mt: 1,
            mb: 1,
          }}
        >
          Create an Account
        </Typography>
        <Typography
          component="p"
          // variant="body1"
          // sx={{
          //   mb: 3,
          // }}
        >
          Already had an account?{" "}
          <Link onClick={() => navigate("/login")} sx={{ cursor: "pointer" }}>
            Sign In
          </Link>
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: 300 }}
        >
          <BoxField
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            <TextField
              type="search"
              label="Username"
              required
              fullWidth
              autoFocus
              size="small"
              // variant="filled"
              // placeholder="Username"
            />
          </BoxField>
          <BoxField
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            <TextField
              type="password"
              label="Password"
              required
              fullWidth
              size="small"
              // variant="filled"
              // placeholder="Username"
            />
          </BoxField>
          <BoxField
            sx={{
              mt: 2,
              mb: 1,
            }}
          >
            <TextField
              type="password"
              label="Confirm Password"
              required
              fullWidth
              size="small"
              // variant="filled"
              // placeholder="Username"
            />
          </BoxField>
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            onClick={() => navigate("/")}
          >
            Confirm
          </Button>
        </Box>
        <Copyright
          sx={{
            mt: 3,
          }}
        />
      </Box>
    </Box>
  )
}

export default Register

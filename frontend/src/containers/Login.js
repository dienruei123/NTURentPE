import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router"
import styled from "styled-components"

import Copyright from "../components/customCopyright"

const theme = createTheme()
const BoxField = styled(Box)({
  mt: 2,
  mb: 2,
})

export default function SignIn() {
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
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
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
            pt: 4,
            pl: 5,
            pb: 3,
            pr: 5,
            // border: "2.5px dashed black",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // bgcolor: "rgba(30, 200 ,240, 0.2)",
            bgcolor: "rgba(100, 100, 100, 0.1)",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "yellowgreen", transform: "scale(1.2)" }}
          >
            <LockTwoToneIcon sx={{ color: "black", opacity: 0.7 }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            Sign In
          </Typography>
          <Typography
            component="p"
            // variant="body1"
            // sx={{
            //   mb: 3,
            // }}
          >
            Don't have an account?{" "}
            <Link
              onClick={() => navigate("/register")}
              sx={{ cursor: "pointer" }}
            >
              Sign Up
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
                autoComplete="username"
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
                autoComplete="current-password"
                size="small"
                // variant="filled"
                // placeholder="Username"
              />
            </BoxField>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate("/")}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={() => navigate("/")}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright
            sx={{
              mt: 5,
            }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

import { Box, Button, InputAdornment, TextField } from "@mui/material"
import { AccountCircle, Lock } from "@mui/icons-material"
import { borderRadius } from "@mui/system"
import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        margin: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box> Login Page</Box>
      <TextField
        // label="Username"
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        // variant="standard"
        placeholder="Username"
      />
      <TextField
        // label="Password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
        autoComplete="current-password"
        // variant="standard"
        placeholder="Password"
      />
      <Button
        sx={{
          border: "1px solid black",
        }}
        onClick={() => navigate("/")}
      >
        Login
      </Button>
      <Button
        sx={{
          border: "1px solid black",
        }}
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </Box>
  )
}

export default Login

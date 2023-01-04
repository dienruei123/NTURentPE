import * as React from "react"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ButtonBase from "@mui/material/ButtonBase"
import newyearpic from "../eventPictures/2023_NEW-YORK.jpg"
import { IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
})

export default function ComplexGrid({
  id,
  name,
  description,
  host,
  date,
  photo,
  isJoined,
}) {
  const navigate = useNavigate()

  const ToEvent = () => {
    navigate("/event/" + id)
  }

  const handleText = (description) => {
    console.log(description.length)
    let briefDescription = description
    if (description.length > 20) {
      briefDescription = briefDescription.substring(0, 20) + "..."
    }
    return briefDescription
  }
  return (
    <ButtonBase sx={{ cursor: "pointer" }} onClick={ToEvent}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          width: 300,
          height: 150,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src={photo ? photo : newyearpic}
                width="128px"
                height="80%"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={10} md={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {handleText(name)}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {handleText(description)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Host: {host}
                </Typography>
              </Grid>
              <Grid item style={{ bottom: "0px" }}>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {isJoined ? "Joined" : "New Event"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle" component="div">
                {date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ButtonBase>
  )
}

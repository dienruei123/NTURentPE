import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function AlignItemsList({ info }) {
  console.log(info[0].property)
  return (
    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      {info ? (
        info.map((data) => (
          <ListItem
            key={data.name}
            alignItems="flex-start"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.name} secondary={data.date} />
            <Stack direction="row" spacing={1}>
              {data.property.map((prop) => (
                <Chip
                  key={prop}
                  label={prop}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </ListItem>
        ))
      ) : (
        <span>No Event!</span>
      )}
    </List>
  )
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import photo from '../eventPictures/2023_NEW-YORK.jpg'
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid({ name, description, host, date }) {
    const navigate = useNavigate()

    const handleEvent = () => {
        navigate("/event/0")
        console.log("in")
    }

    return (
        <ButtonBase sx={{ cursor: 'pointer' }} >
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    width: 300,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }} >
                            <Img alt="complex" src={photo} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Host: {host}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Join
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" component="div">
                                {date}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    );
}
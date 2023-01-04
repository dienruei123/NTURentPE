import React from 'react'
import './css/eventPage.css'
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import Stars from '../components/stars';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import imgLink from '../eventPictures/2023_NEW-YORK.jpg'
const Comment = ({ eventId, comments, setComments, setLoad }) => {
    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const changeRating = (newRating) => {
        setRating(newRating)
    };


    const storeComment = async () => {
        // await instance.post('/createComment', {
        //     eventId: eventId,
        //     name: name,
        //     rating: rating,
        //     content: content
        // })
    }

    const submitComment = () => {
        if (name && content && rating) {
            setComments([...comments, {
                eventId: eventId,
                name: name,
                rating: rating,
                content: content
            }])
            storeComment();
            setName("");
            setContent("");
            setRating(0);
        }
    }
    return (
        <div className='commentContainer'>
            <div className='inputContainer'>
                <div className='title'>
                    <div className='fields'>
                        <input className='name' placeholder='Name' onChange={e => setName(e.target.value)} value={name} />
                        <ReactStars
                            key={`stars_${rating}`}
                            count={5}
                            onChange={changeRating}
                            size={18}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className='submit'>
                        <button onClick={submitComment} disabled={!(name && content && rating)}>Submit</button>
                    </div>
                </div>
                <textarea className='content' placeholder='Type your comment' onChange={e => setContent(e.target.value)} value={content} />
            </div>

            <div className='comments'>
                {
                    comments.map((comment) => (
                        <Paper style={{ padding: "30px 15px" }}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt={comment.name} src={imgLink} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <div style={{ display: "flex", flexWrap: "nowrap" }}>
                                        <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
                                        <Stars rating={comment.rating} displayScore={false} />
                                    </div>
                                    <p style={{ textAlign: "left" }}>
                                        {comment.content}{" "}
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                        posted just now
                                    </p>
                                </Grid>
                            </Grid>
                        </Paper>

                    ))
                }

            </div>

        </div>
    )
}
export default Comment
import React from 'react'
import styled from "styled-components";
import Button from '@mui/material/Button';
import Envelope from './Envelope';
import './w3.css'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    h1{
        margin: 0;
        margin-right: 20px;
        font-size: 3em;
    }
`;

const Navigation = () => {
    return (
        <div class="w3-top">
            <div class="w3-bar w3-white w3-padding w3-card w3-wide">
                <p class="w3-bar-item w3-button">Gourmet au Catering</p>
                {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
                <div class="w3-right w3-hide-small">
                    <p href="#login" class="w3-bar-item w3-button">Login</p>
                    <p href="#about" class="w3-bar-item w3-button">About</p>
                    {/* <p href="#menu" class="w3-bar-item w3-button">Menu</p> */}
                    <p href="#contact" class="w3-bar-item w3-button">Contact</p>
                </div>
            </div>
        </div>
    )
}

const Homepage = () => {
    return (
        <Wrapper>
            <Navigation />
            <Envelope />
        </Wrapper>
    )
}

export default Homepage

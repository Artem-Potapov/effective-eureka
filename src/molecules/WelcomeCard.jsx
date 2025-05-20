import { Button, Container } from "@mui/material";
import React from "react";
import shoeImage from "/shoe.png"
import { useNavigate } from "react-router";

export default function WelcomeCard() {
    const navigate = useNavigate()

    return (
        <Container maxWidth='false' className='welcome-container'>
                    <Container className='welcome-text-container'>
                      <h1 className='welcome-text welcome-h1'>VPS-Store</h1>
                      <h2 className='welcome-text'>Самые лучшие ботинки по самым лучшим ценам</h2>
                      <p className='welcome-p'>У нас самый широкий ассортимент во всей Молоссии*. Быстрая доставка и качество товара - наши главные преимущества.</p>
                      <Button className='welcome-btn' onClick={() => navigate('/products')} variant="outlined"><p id="products-view">Смотреть Товары</p></Button>
                    </Container>
                    <Container className='welcome-image-container'>
                      <img src={shoeImage} className='shoe-image-welcome' alt='welcome to the site!'></img>
                    </Container>
        </Container>
    )
}
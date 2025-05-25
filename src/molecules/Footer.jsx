import React from "react";
import '../styles/App.css'
import '../styles/footer.css'
import { Box, ButtonGroup, TextField } from "@mui/material";
import shoe from '/shoe.png'
import { NavLink } from "react-router";
import Button from '@mui/material/Button';

export default function Footer() {

    function submitreport() {
        console.log("это ничего не делает, нам на вас пофиг :D")
    }

    return (
        <Box className="page-container footer-main">
            <Box className="footer-left">
                <img src={shoe} className="shoe-logo"/>
                <Box className="links">
                    <h2 className="footer-text">VPS-store</h2>
                    <NavLink className="footer-link" to="/home">Главная</NavLink>
                    <NavLink className="footer-link" to="/products">Ассортимент</NavLink>
                    <NavLink className="footer-link" to="/about">О нас</NavLink>
                    <NavLink className="footer-link" to="/advantage">Почему мы?</NavLink>
                    <NavLink className="footer-link" to="/uwu">Зачем ты здесь?</NavLink>
                </Box>
            </Box>
            <Box className="footer-right">
                <h2 className="contact-title">Свяжитесь с нами</h2>
                <Box className="contact-form">
                    <Box className="contact-cred1">
                        <TextField className="contact-field" label="Ваше имя" variant="outlined" />
                        <TextField className="contact-field" label="Ваш email" variant="outlined" />
                        <Button variant="contained" className="submit-btn" onClick={submitreport}>Отправить</Button>
                    </Box>
                    <TextField className="contact-message" label="Ваше сообщение..." variant="outlined" multiline />
                </Box>
            </Box>
        </Box>
    )
}
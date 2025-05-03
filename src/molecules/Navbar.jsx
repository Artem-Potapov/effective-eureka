import * as React from 'react';
import '../styles/navbar.css'
import { Box, Button, Container, Input } from '@mui/material';
import { Search } from '@mui/icons-material';
import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"


const ariaLabel = { 'aria-label': 'description' };

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  return (
    <Container className='navbar' maxWidth="false" onClick={handleClick}>
        <Container className='navbar-left'>
            <img src={reactLogo} className="icon-uwu navbar-item" alt="React logo" />
            <a href="/home" onClick={handleClick} className='navbar-item navbar-link'>Главная</a>
            <a href="/products" onClick={handleClick} className='navbar-item navbar-link'>Товары</a>
            <a href="/locations" onClick={handleClick} className='navbar-item navbar-link'>Магазины</a>
        </Container>
        <Container className='search-bar-navbar'>
          <Box className="search-container">
            <Input className='search-input-navbar' id='nigga' placeholder="Поиск..." inputProps={ariaLabel} />
            <Button className='search-logo-navbar' variant="text" startIcon={<Search/>}>
            </Button>
          </Box>
        </Container>
        <Container className='navbar-right'>
            <img src={viteLogo} className="sales-bin" alt="React logo" />
            <a href="/locations" onClick={handleClick} className='navbar-link navbar-item'>Корзина</a>
            <a href="/locations" onClick={handleClick} className='navbar-link navbar-item'>Избранное</a>
            <a href="/locations" onClick={handleClick} className='navbar-link navbar-item'>О нас</a>
        </Container>
    </Container>
  );
}
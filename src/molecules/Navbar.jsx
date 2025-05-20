import * as React from 'react';
import '../styles/navbar.css'
import { Box, Button, Container, Input } from '@mui/material';
import { Search } from '@mui/icons-material';
import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"
import { NavLink, useLocation } from 'react-router';


const ariaLabel = { 'aria-label': 'description' };

function handleClick(event) {
  console.log(event.nativeEvent.target.className)
  if (event.nativeEvent.target.className.includes("active")) {
    console.log("active")
    event.preventDefault();
  }
  else
  {
    console.log("inactive")
  }
}

export default function NavBar() {

  const uwu = useLocation();
  const { hash, pathname, search } = location;
  console.log(pathname)

  return (
    <Container className='navbar page-container' maxWidth="false" onClick={handleClick}>
        <Container maxWidth='false' className='navbar-uni'>
            <img src={reactLogo} className="icon-uwu navbar-item" alt="React logo" />
            <Box className='search-bar-navbar'>
              <Box className="search-container">
                <Input className='search-input-navbar' id='search-input' placeholder="Поиск..." inputProps={ariaLabel} />
                <Button className='search-logo-navbar' variant="text" startIcon={<Search/>}>
                </Button>
              </Box>
            </Box>
            <NavLink to="/home" onClick={handleClick} className='navbar-item navbar-link'>Главная</NavLink>
            <NavLink to="/products" onClick={handleClick} className='navbar-item navbar-link'>Товары</NavLink>
            <NavLink to="/locations" onClick={handleClick} className='navbar-link navbar-item'>Избранное</NavLink>
            <NavLink to="/locations" onClick={handleClick} className='navbar-link navbar-item'>Корзина(0)</NavLink>
            
            <img src={viteLogo} className="sales-bin" alt="React logo" />
        </Container>
    </Container>
  );
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/home.css'
import App from './App.jsx'
import NavBar from './molecules/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


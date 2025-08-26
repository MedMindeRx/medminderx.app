import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carousel from './components/Carousel.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'
import OpenSource from './components/OpenSource.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Carousel/>
    <Features/>
    <Terms/>
    <Privacy/>
    <OpenSource/>
    <Footer/>
  </StrictMode>,
)

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './login.jsx'
import Dashboard from './Dashboard.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Footer from  './Footer.jsx'
import Signup from './Signup.jsx'
import About from './About.jsx'
import FAQs from './FAQs.jsx'
import HorizontalCards from './Pricing.jsx' 
// import { Button } from "@/components/ui/button"

function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/FAQs" element={<FAQs/>} />
        <Route path="/Pricing" element={<HorizontalCards/>} />
      </Routes>
      
  
  )
}

export default App
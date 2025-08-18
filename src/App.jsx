import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './login.jsx'
import Dashboard from './dashboard.jsx'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div>
      
      <div class="container"> <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> <div class="col-md-3 mb-2 mb-md-0"> <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"> <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> </a> </div> <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> <li><a href="http://localhost:5173/" class="nav-link px-2 link-secondary">Home</a></li> <li><a href="/page" class="nav-link px-2">Dashboard</a></li> <li><a href="#" class="nav-link px-2">Pricing</a></li> <li><a href="#" class="nav-link px-2">FAQs</a></li> <li><a href="#" class="nav-link px-2">About</a></li> </ul> <div class="col-md-3 text-end"> <Link to="/login"><Button type="button" class="btn btn-outline-primary me-2">Login</Button></Link> <button type="button" class="btn btn-primary">Sign-up</button> </div> </header> </div>
      
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      
    </div>
  )
}

export default App
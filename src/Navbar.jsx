import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/icons8-bag-50.svg'; // using the imported logo file

export default function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
        {/* Left Logo + Title */}
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img 
              src={logo} 
              alt="BUYit logo" 
              width="30" 
              height="30" 
              className="me-2" 
            />
            <span className="fs-4 fw-bold">BUYit</span>
          </Link>
        </div>

        {/* Navbar Links */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">HOME</Link></li>
          <li><Link to="/Dashboard" className="nav-link px-2">Dashboard</Link></li>
          <li><Link to="/Pricing" className="nav-link px-2">Pricing</Link></li>
          <li><Link to="/FAQs" className="nav-link px-2">FAQs</Link></li>
          <li><Link to="/About" className="nav-link px-2">About</Link></li>
        </ul>

        {/* Right Auth Buttons */}
        <div className="col-md-3 text-end">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
          </Link>
          <Link to="/Signup">
            <button type="button" className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container">
      {/* Left side - Brand */}
      <div className="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          {/* Bootstrap Bag Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2h2.5A1.5 1.5 0 0 1 14 
                     4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 
                     1-2-2V4.5A1.5 1.5 0 0 1 
                     3.5 3H6a2 2 0 0 1 2-2zm3 
                     5V4a3 3 0 1 0-6 0v2h6z" />
          </svg>
        </Link>
        <span className="mb-3 mb-md-0 text-muted">© 2025 BUYit</span>
      </div>

      {/* Right side - Links */}
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link px-2 text-muted">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link px-2 text-muted">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link px-2 text-muted">About</Link>
        </li>
      </ul>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar2.css';

const TANavbar = () => {
  return (
    <>
      <div className="navbar" style={{ padding: '20px' }}>
        <div className="navbar-left">
          <span className="navbar-brand" style={{ color: 'white' }}>
            FAST-NU SE DEPT
          </span>
        </div>
        <div className="navbar-right">
        <Link to = "/" className = "navbar-link">home</Link>

          <Link to="/marksupload" className="navbar-link">
            Upload Marks
          </Link>
          <Link to = "/applyta" className = "navbar-link">APPLY FOR TA </Link>
          <Link to="/studentlist" className="navbar-link">
            Students
          </Link>

        </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
      </div>
    </>
  );
};

export default TANavbar;

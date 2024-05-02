

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar2.css';

const Navbar2 = () => {
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
        <Link to = "/faculty" className = "navbar-link">Faculty</Link>
        <Link to = "/ta" className = "navbar-link">TA</Link>
        
        </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
      </div>
    </>
  );
};

export default Navbar2;

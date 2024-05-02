import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar2.css';

const FacultyNavbar = () => {
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

          <Link to="/students" className="navbar-link">
            Students
          </Link>
          <Link to="/addstudent" className="navbar-link">
            ADD Students
          </Link>
          <Link to="/applicants" className="navbar-link">
            Applicants
          </Link>
          <Link to="/markslist" className="navbar-link">
            Marks List
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

export default FacultyNavbar;

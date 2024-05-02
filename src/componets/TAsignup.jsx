import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../CSS/Singup.css';
import '../CSS/myStyles.css';
import { Link } from 'react-router-dom';


const TAsignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!email || !password || !username ) {
        alert("Please fill in all fields");
        return;
      }
      await axios.post('http://localhost:3045/ta/signup', { email, password, username });
      navigate('/tapage');
    } catch (error) {
      console.error('Error:', error.response.data.message);
      // Handle error
    }
  };

  return (
    <div className="cont">
      
    <motion.div
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="login-container"
        style={{
          width: '30rem',
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(225,132,211,0.8353466386554622) 35%, rgba(0,212,255,1) 100%)',
          padding: '30px',
          borderRadius: '30px',
          border: '6px solid black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          style={{
            fontSize: '2.8rem',
            lineHeight: '1.2',
            letterSpacing: '-0.018em',
            fontWeight: '600',
            fontStyle: 'italic',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          TA Signup
        </motion.h2>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>
        <motion.button
          className="btn-login"
          onClick={handleSubmit}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Sign Up
        </motion.button>
        <Link to="/talogin" className='links' >Have Account   Login</Link>
      </motion.div>
    </motion.div>
      </div>
  );
};

export default TAsignup;

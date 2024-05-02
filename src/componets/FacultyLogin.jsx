import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { motion } from "framer-motion";
import "../CSS/Singup.css"
import '../CSS/myStyles.css';


const FacultyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password  ) {
        alert("Please fill in all fields");
        return;
      }
      const response = await axios.post("http://localhost:3045/faculty/login", formData);
      if (response.data.success) {
        console.log("Login response:", response.data);
        navigate("/facultypage");
      } else {
        setError("User does not exist");
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
      setError("User does not exist");
    }
  };

  return (
    <div className="cont">

    <div className="container mt-1"
    style={{maxWidth : "40rem",}}
    >
      <motion.div
        className="row justify-content-center"
        style={{
          width: "40rem",
          
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(225,132,211,0.8353466386554622) 35%, rgba(0,212,255,1) 100%)",
          padding: "40px 0px" ,
          borderRadius: "30px",
          border: "6px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center", // Added textAlign to center text horizontally
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2
            style={{
              fontSize: "2.8rem",
              lineHeight: "1.2",
              letterSpacing: "-0.018em",
              fontWeight: "600",
              fontStyle: "italic",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Faculty Login
          </motion.h2>
          {error && (
            <motion.div
              className="alert alert-danger"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {error}
            </motion.div>
          )}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ width: "100%" }} // Added to make form responsive
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%" }} 
                />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: "100%" }} 
                />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
                </div>
  );
};

export default FacultyLogin;

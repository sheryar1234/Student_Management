import React, { useState } from "react";
import { motion } from "framer-motion";

// Import CSS files
import "../CSS/Singup.css";
import "../CSS/myStyles.css";

const TAForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({ username: "", email: "", course: "" });
  };

  return (
    <div className="cont">
      <motion.div
        className="login-container"
        style={{
          width: "30rem",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(225,132,211,0.8353466386554622) 35%, rgba(0,212,255,1) 100%)",

         
          padding: "30px",
          borderRadius: "30px",
          border: "6px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.8rem",
            lineHeight: "1.2",
            letterSpacing: "-0.018em",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Teacher Assistant Application Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
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
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <input
              type="text"
              className="form-control"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Apply
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default TAForm;

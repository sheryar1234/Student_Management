import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "../CSS/Singup.css"; // Import necessary CSS files
import "../CSS/myStyles.css"; // Import necessary CSS files

const MarksUploadForm = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    course: "",
    maxMarks: "",
    minMarks: "",
    avgMarks: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.course || !formData.maxMarks || !formData.minMarks || !formData.avgMarks) {
      alert("Please fill in all fields");
      return;
    }
    onUpload(formData);
    // Reset form data after submission
    setFormData({ course: "", maxMarks: "", minMarks: "", avgMarks: "" });
  };
  

  return (
    <div className="cont">
      {/* Use motion.div instead of div */}
      <motion.div
        className="login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Add motion.div for container */}
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
          <motion.h2
            style={{
              fontSize: "2.8rem",
              lineHeight: "1.2",
              letterSpacing: "-0.018em",
              fontWeight: "600",
              fontStyle: "italic",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Marks Upload Form
          </motion.h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Course Name:</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Maximum Marks:</label>
              <input
                type="number"
                name="maxMarks"
                value={formData.maxMarks}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Minimum Marks:</label>
              <input
                type="number"
                name="minMarks"
                value={formData.minMarks}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Average Marks:</label>
              <input
                type="number"
                name="avgMarks"
                value={formData.avgMarks}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Apply styling to the button */}
            <motion.button
              className="btn-login"
              onClick={handleSubmit}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Upload
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarksUploadForm;

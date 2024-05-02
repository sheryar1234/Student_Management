import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import '../CSS/myStyles.css';


const AddStudent = () => {
  const [formData, setFormData] = useState({
    rollno: "",
    email: "",
    password: "",
    grade: "",
  });

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3045/student/create',
        formData
      );

      console.log(response.data);
      setFormData({
        rollno: "",
        email: "",
        password: "",
        grade: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <div className="cont">

    <div className="container"
     style={{maxWidth : "50rem",}}
    >
      <div className="row justify-content-center" style={{ width: '50rem', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(225,132,211,0.8353466386554622) 35%, rgba(0,212,255,1) 100%)', padding: '20px', borderRadius: '30px', border: '6px solid black' }}>
        <div className="col-md-6">
          <h2>Add Student</h2>
          <form onSubmit={HandleSubmit}>
            <div className="mb-3">
              <label htmlFor="rollno" className="form-label">
                Roll No
              </label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                name="rollno"
                value={formData.rollno}
                onChange={HandleOnChange}
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
                onChange={HandleOnChange}
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
                onChange={HandleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={HandleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
</div>
  );
};

export default AddStudent;

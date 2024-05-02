import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const TeacherAssistantForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    course: "",
  });

  const [applicants, setApplicants] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicants([...applicants, formData]);
    setFormData({ username: "", email: "", course: "" });
  };

  const approveApplicant = async (index) => {
    try {
      const approvedTA = applicants[index];
      await axios.post("http://localhost:3045/ta/create", approvedTA);
      const updatedApplicants = [...applicants];
      updatedApplicants.splice(index, 1);
      setApplicants(updatedApplicants);
    } catch (error) {
      console.error("Error approving applicant:", error);
      // Handle error if needed
    }
  };

  const declineApplicant = (index) => {
    const updatedApplicants = [...applicants];
    updatedApplicants.splice(index, 1);
    setApplicants(updatedApplicants);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Teacher Assistant Application Form</h2>
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

      <hr />

      <h2 className="text-center mb-4">Applicants</h2>
      <ul className="list-group">
        {applicants.map((applicant, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold">{applicant.username}</span> - {applicant.email} - {applicant.course}
            </div>
            <div>
              <button className="btn btn-success me-2" onClick={() => approveApplicant(index)}>Approve</button>
              <button className="btn btn-danger" onClick={() => declineApplicant(index)}>Decline</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherAssistantForm;

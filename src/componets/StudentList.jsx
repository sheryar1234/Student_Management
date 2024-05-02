import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editFormData, setEditFormData] = useState({
    rollno: "",
    email: "",
    grade: "",
  });
  const [editingStudentId, setEditingStudentId] = useState(null);

  // Function to fetch all students from the backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3045/student");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Function to delete a student record
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3045/student//delete/${id}`);
      // Remove the deleted student from the state
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Function to handle input change in the edit form
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Function to load the selected student's data into the edit form
  const loadStudentDataForEdit = (student) => {
    setEditFormData({
      rollno: student.rollno,
      email: student.email,
      grade: student.grade,
    });
    setEditingStudentId(student._id);
  };

  // Function to submit the edited student data
  const submitEditForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3045/student/update/${editingStudentId}`,
        editFormData
      );
      setEditingStudentId(null);
      setEditFormData({
        rollno: "",
        email: "",
        grade: "",
      });
      fetchStudents(); // Reload the student list after editing
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []); // Fetch students when the component mounts

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Email</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.rollno}</td>
              <td>{student.email}</td>
              <td>{student.grade}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => loadStudentDataForEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {editingStudentId && (
        <div className="mt-4">
          <h2>Edit Student</h2>
          <form onSubmit={submitEditForm}>
            <div className="mb-3">
              <label htmlFor="edit-rollno" className="form-label">
                Roll No
              </label>
              <input
                type="text"
                className="form-control"
                id="edit-rollno"
                name="rollno"
                value={editFormData.rollno}
                onChange={handleEditInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edit-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="edit-email"
                name="email"
                value={editFormData.email}
                onChange={handleEditInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edit-grade" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="edit-grade"
                name="grade"
                value={editFormData.grade}
                onChange={handleEditInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentList;

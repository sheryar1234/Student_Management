import React from "react";
import '../CSS/myStyles.css'; // Import necessary CSS files

const MarksList = ({ marksData, onApprove, onDecline }) => {
  return (
    <div className="cont"> {/* Apply container class */}
      <div>
        <h2 className="text-center mb-4">Marks Data List</h2> {/* Apply heading class */}
        <ul className="list-group"> {/* Apply list group class */}
          {marksData.map((data, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span>Course: {data.course}</span><br />
                <span>Max Marks: {data.maxMarks}</span><br />
                <span>Min Marks: {data.minMarks}</span><br />
                <span>Average Marks: {data.avgMarks}</span><br />
              </div>
              <div>
                <button className="btn btn-success me-2" onClick={() => onApprove(index)}>Approve</button> {/* Apply button classes */}
                <button className="btn btn-danger" onClick={() => onDecline(index)}>Decline</button> {/* Apply button classes */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarksList;

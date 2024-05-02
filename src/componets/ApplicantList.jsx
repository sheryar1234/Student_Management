import React from "react";
import '../CSS/myStyles.css';

const ApplicantList = ({ applicants, onApprove, onDecline }) => {
  return (
    <div className="cont">

    <div>
      <h2 className="text-center mb-4">Applicants</h2>
      <ul className="list-group">
        {applicants.map((applicant, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold">{applicant.username}</span> - {applicant.email} - {applicant.course}
            </div>
            <div>
              <button className="btn btn-success me-2" onClick={() => onApprove(index)}>Approve</button>
              <button className="btn btn-danger" onClick={() => onDecline(index)}>Decline</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
</div>
  );
};

export default ApplicantList;

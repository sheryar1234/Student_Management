import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container mt-5" >
      <div className="row justify-content-center" style={{ width:'50rem' }}>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Dashboard</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card bg-info text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Users</h5>
                      <p className="card-text">100</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Orders</h5>
                      <p className="card-text">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="card bg-warning text-white">
                    <div className="card-body">
                      <h5 className="card-title">Revenue</h5>
                      <p className="card-text">$5000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-danger text-white">
                    <div className="card-body">
                      <h5 className="card-title">Products Sold</h5>
                      <p className="card-text">200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

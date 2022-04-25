import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <h2 className='text-success text-center me-1'>SIM Card Dashboard</h2>
      <div className='row g-2 px-md-5 d-flex justify-content-between'>
        <div
          id='allSimCard'
          className='col-12 col-md-5 col-lg-2 rounded bg-white px-2 py-3'
        >
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>All Sim Cards</h6>
            <span>999</span>
          </div>
        </div>
        <div
          id='active'
          className='col-12 col-md-5 col-lg-2 rounded bg-white px-2 py-3 '
        >
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Active</h6>
            <span>100</span>
          </div>
        </div>
        <div
          id='nonActive'
          className='col-12 col-md-5 col-lg-2 rounded bg-white px-2 py-3'
        >
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Non Active</h6>
            <span>899</span>
          </div>
        </div>
        <div
          id='assigned'
          className='col-12 col-md-5 col-lg-2 rounded bg-white px-2 py-3'
        >
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Assigned</h6>
            <span>20</span>
          </div>
        </div>
        <div
          id='nonAssigned'
          className='col-12 col-md-5 col-lg-2 rounded bg-white px-2 py-3'
        >
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Non Assigned</h6>
            <span>80</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <h2 className='text-success text-center me-1'>SIM Card Dashboard</h2>
      <div className='row'>
        <div className='col-1'></div>
        <div id='allSimCard' className='col-2 rounded bg-white px-2 py-3 m-2'>
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>All Sim Cards</h6>
            <span>999</span>
          </div>
        </div>
        <div id='active' className='col-2 rounded bg-white px-2 py-3 m-2'>
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Active</h6>
            <span>100</span>
          </div>
        </div>
        <div id='nonActive' className='col-2 rounded bg-white px-2 py-3 m-2'>
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Non Active</h6>
            <span>899</span>
          </div>
        </div>
        <div id='assigned' className='col-2 rounded bg-white px-2 py-3 m-2'>
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Assigned</h6>
            <span>20</span>
          </div>
        </div>
        <div id='nonAssigned' className='col-2 rounded bg-white px-2 py-3 m-2'>
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h6 className='fw-bold'>Non Assigned</h6>
            <span>80</span>
          </div>
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  );
};

export default Dashboard;

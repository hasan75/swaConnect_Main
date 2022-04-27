import React from 'react';

const Returns = () => {
  return (
    <>
      <div className='simCardContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>ACP Operations</span>
            <button className='btn btn-outline-secondary'>Edit</button>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Distributor</th>
                <th scope='col'>Agent</th>
                <th scope='col'>Application Number</th>
                <th scope='col'>Customer ID</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <td>Swap Next</td>
                <td>Luci Tech</td>
                <td>4545787854</td>
                <td>Kuddus</td>
              </tr>
            </tbody>
            <br />
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Customer FName</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Application Date</th>
                <th scope='col'>Device IMEI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hasan</td>
                <td>Ahmed</td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>2020204788</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Returns;

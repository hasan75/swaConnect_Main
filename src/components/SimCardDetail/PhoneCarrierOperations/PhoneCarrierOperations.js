import React from 'react';

const PhoneCarrierOperations = () => {
  return (
    <>
      <div className='phoneCarrierOpContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>
              Phone Carrier Operations
            </span>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Sim Status</th>
                <th scope='col'>Status Date</th>
                <th scope='col'>Phone Plan</th>
                <th scope='col'>Service Carrier</th>
                <th scope='col'>MDN</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <th scope='row'>Blank</th>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Kora Plan</td>
                <td>PWG</td>
                <td>145897454564854</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PhoneCarrierOperations;

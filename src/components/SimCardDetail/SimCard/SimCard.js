import React from 'react';

const SimCard = ({ simInfo }) => {
  return (
    <>
      <div className='simCardContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>Sim Card</span>
            <button className='btn btn-outline-secondary'>Edit</button>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>SSID</th>
                <th scope='col'>PUK 1</th>
                <th scope='col'>Created-Date</th>
                <th scope='col'>UserName</th>
                <th scope='col'>Vendor</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <th scope='row'>{simInfo?.SSID}</th>
                <td>{simInfo?.PUK1}</td>
                <td>{new Date(simInfo?.createdDate).toLocaleDateString()}</td>
                <td>{simInfo?.userName}</td>
                <td>{simInfo?.vendor ? simInfo.vendor.company : 'NA'}</td>
              </tr>
            </tbody>
            <br />
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Sim Card Compatibility</th>
                <th colSpan={2}>Sim Order Number</th>
                <th scope='col'>Psycial Status</th>
                <th scope='col'>Batch Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{simInfo?.compatibility}</td>
                <td colSpan={2}>
                  {simInfo?.orderNumber ? simInfo.orderNumber : 'NA'}
                </td>
                <td>{simInfo?.physicalStatus}</td>
                <td>{simInfo?.batchNumber ? simInfo.batchNumber : 'None'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SimCard;

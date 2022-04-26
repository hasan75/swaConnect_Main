import React from 'react';

const SimCardDetail = (props) => {
  const { simId } = props;
  return (
    <div className='tables'>
      <div className='simCardContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>Sim Card</span>
            <button className='btn btn-outline-secondary'>Edit</button>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered'>
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
                <th scope='row'>1568454</th>
                <td>4564786787</td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Kuddus</td>
                <td>Najim Telecom</td>
              </tr>
            </tbody>
            <br />
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>SSID</th>
                <th scope='col'>PUK 1</th>
                <th scope='col'>Created-Date</th>
                <th scope='col'>UserName</th>
                <th scope='col'>Vendor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1568454</th>
                <td>4564786787</td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Kuddus</td>
                <td>Najim Telecom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SimCardDetail;

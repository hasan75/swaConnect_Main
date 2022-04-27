import React from 'react';

const SimOperationsLog = () => {
  return (
    <>
      <div className='simOpLogContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>Sim Operations Log</span>
            {/* <div className='d-flex'>
              <button className='btn btn-outline-secondary mx-1'>Add</button>
              <button className='btn btn-outline-secondary'>Edit</button>
            </div> */}
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>User Name</th>
                <th scope='col'>Operation</th>
                <th colSpan={2}>Result</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Name</td>
                <td>Active "Plan One"</td>
                <td colSpan={2}>
                  UserNote Lorem, ipsum dolor sit amet consectetur.
                </td>
              </tr>
              <tr>
                <td>{new Date().toLocaleDateString()}</td>
                <td>Name</td>
                <td>Active "Plan One"</td>
                <td colSpan={2}>
                  UserNote Lorem, ipsum dolor sit amet consectetur.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SimOperationsLog;

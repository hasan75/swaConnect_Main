import React from 'react';
import scOperationStyle from './ServiceCarrierOp.module.css';
import useToken from '../../../hooks/useToken';

const ServiceCarrierOperations = ({ simId }) => {
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/simCard`;
  console.log(url, simId);

  const { token } = useToken();

  const currentDatewithTime = new Date().toLocaleString();

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  console.log(currentDate, currentTime);

  return (
    <section>
      {/* serviceCarrier 1  */}
      <div className={`${scOperationStyle.planContainer}`}>
        <span className='ms-2 my-2'>
          {' '}
          <span className='fw-bold'> Service Carrier #1 </span>321Communications
        </span>
        {/* for the zip code and coverage  */}
        <div className='row py-md-2'>
          <div className=' col-12 col-lg-6'>
            <div className='row'>
              <div className='col-6 col-lg-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Zip Code'
                />
              </div>
              <div className='col-6 col-lg-8'>
                <button className='btn btn-outline-secondary'>
                  Get Coverage2
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* for select plan and zip code  */}
        <div className='row py-md-2'>
          <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
            <select
              // ref={simStatusRef}
              type='text'
              className='form-select'
              id='simPlan'
              placeholder='Sim Plan'
              //   ref={simStatusRef}
              //   onChange={simStatusChange}
            >
              <option hidden disabled selected value>
                Select Plan
              </option>
              <option value='plan 1'>Plan 1</option>
              <option value='plan 2'>Plan 2</option>
              <option value='plan 3'>Plan 3</option>
            </select>
          </div>
          <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
            <input
              type='text'
              className='form-control'
              placeholder='Zip Code'
            />
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
            <button className='btn btn-outline-secondary'>Activate</button>
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
            <button className='btn btn-outline-secondary'>HotLine</button>
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0'>
            <button className='btn btn-outline-secondary'>UnHotline</button>
          </div>
        </div>
        {/* for mdn/esn  */}
        <div className='row py-md-2'>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <select
                  // ref={simStatusRef}
                  type='text'
                  className='form-select me-1'
                  id='simPlan'
                  placeholder='Sim Plan'
                  //   ref={simStatusRef}
                  //   onChange={simStatusChange}
                >
                  <option hidden disabled selected value>
                    Select Plan
                  </option>
                  <option value='plan 1'>Plan 1</option>
                  <option value='plan 2'>Plan 2</option>
                  <option value='plan 3'>Plan 3</option>
                </select>
              </div>
              <div className='col-6 col-lg-6'>
                <button className='btn btn-outline-secondary'>
                  Change Plan
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <input
                  type='text'
                  className='form-control me-1'
                  placeholder='Enter New ESN'
                />
              </div>
              <div className='col-12 col-lg-6'>
                <button className='btn btn-outline-secondary'>SWAP ESN</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='ZIP Code'
                />
              </div>
              <div className='col-6 col-lg-6'>
                <button className='btn btn-outline-secondary'>SWAP MDN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* serviceCarrier 2  */}
      <div className={`${scOperationStyle.planContainer}`}>
        <span className='ms-2 my-2'>
          {' '}
          <span className='fw-bold'> Service Carrier #2 </span>PWG
        </span>
        {/* for the zip code and coverage  */}
        <div className='row py-md-2'>
          <div className=' col-12 col-lg-6'>
            <div className='row'>
              <div className='col-6 col-lg-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Zip Code'
                />
              </div>
              <div className='col-6 col-lg-8'>
                <button className='btn btn-outline-secondary'>
                  Get Coverage2
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* for select plan and zip code  */}
        <div className='row py-md-2'>
          <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
            <select
              // ref={simStatusRef}
              type='text'
              className='form-select'
              id='simPlan'
              placeholder='Sim Plan'
              //   ref={simStatusRef}
              //   onChange={simStatusChange}
            >
              <option hidden disabled selected value>
                Select Plan
              </option>
              <option value='plan 1'>Plan 1</option>
              <option value='plan 2'>Plan 2</option>
              <option value='plan 3'>Plan 3</option>
            </select>
          </div>
          <div className='col-12 col-lg-2 py-sm-1 py-md-0'>
            <input
              type='text'
              className='form-control'
              placeholder='Zip Code'
            />
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
            <button className='btn btn-outline-secondary'>Activate</button>
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0 me-1'>
            <button className='btn btn-outline-secondary'>HotLine</button>
          </div>
          <div className='col-6 col-lg-1 py-sm-1 py-md-0'>
            <button className='btn btn-outline-secondary'>UnHotline</button>
          </div>
        </div>
        {/* for mdn/esn  */}
        <div className='row py-md-2'>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <select
                  // ref={simStatusRef}
                  type='text'
                  className='form-select me-1'
                  id='simPlan'
                  placeholder='Sim Plan'
                  //   ref={simStatusRef}
                  //   onChange={simStatusChange}
                >
                  <option hidden disabled selected value>
                    Select Plan
                  </option>
                  <option value='plan 1'>Plan 1</option>
                  <option value='plan 2'>Plan 2</option>
                  <option value='plan 3'>Plan 3</option>
                </select>
              </div>
              <div className='col-6 col-lg-6'>
                <button className='btn btn-outline-secondary'>
                  Change Plan
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <input
                  type='text'
                  className='form-control me-1'
                  placeholder='Enter New ESN'
                />
              </div>
              <div className='col-12 col-lg-6'>
                <button className='btn btn-outline-secondary'>SWAP ESN</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <div className='row'>
              <div className='col-6 col-lg-6'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='ZIP Code'
                />
              </div>
              <div className='col-6 col-lg-6'>
                <button className='btn btn-outline-secondary'>SWAP MDN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${scOperationStyle.planContainer}`}>
        <div className='mb-2'>
          <span className='fw-bold text-primary'>Sim Operations Log</span>
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
    </section>
  );
};

export default ServiceCarrierOperations;

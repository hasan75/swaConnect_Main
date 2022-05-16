import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';
import ppStyle from './Styles/PhonePlan.module.css';

const PhonePlans = () => {
  const { token } = useToken();

  //hook form things
  const { register, handleSubmit, reset } = useForm();

  //url for work
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/phonePlan`;

  // adding phone plans
  const onSubmit = (data) => {
    console.log(data);
    const phonePlanData = {
      phonePlan: data,
    };
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...phonePlanData }),
    })
      .then((res) => {
        res.json();
        console.log(res);
        if (res.status === 201) {
          Swal.fire('Phone Plan Added SuccessFully', '', 'success');
        }
      })
      .then((data) => {
        console.log(data);
        reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: `${err.message}`,
        });
      });
  };

  return (
    <div className={`${ppStyle.ppContainer} py-md-3`}>
      <div className={ppStyle.phoneData} class='my-1 mx-1 my-lg-3 mx-lg-3'>
        <div class='d-flex justify-content-between px-lg-4'>
          <h3>Phone Plan</h3>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#phoneModal'
          >
            Add New Phone Plan
          </button>
        </div>
        <div className={ppStyle.TableData}>
          <table className={ppStyle.Table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Plane Code</th>
                <th>Service Carrier</th>
                <th>Status</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SWA Connncect</td>
                <td>321</td>
                <td>SWA Connncect</td>
                <td>Active</td>
                <td>
                  <ul>
                    <button
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#viewPhoneModal'
                    >
                      View
                    </button>
                    <button>Edit</button>
                    <button>Delete </button>
                    <button>Active</button>
                    <button>Deactive</button>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class='modal fade w-100'
        id='phoneModal'
        tabindex='-1'
        aria-labelledby='phoneModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title ms-5' id='phoneModalLabel'>
                Add Phone Plan
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ fontFamily: 'sans-serif' }}>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          Name
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Name'
                          {...register('name', { required: true })}
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Plan Code
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Phone Plan'
                          {...register('planCode', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          Service Carrier
                        </label>
                        <select
                          class='form-select'
                          aria-label='Default select example'
                          {...register('serviceCarrier', { required: true })}
                        >
                          <option selected>Select Option</option>
                          <option value='625389531749f041cdc3f3dc'>PWG</option>
                          <option value='625389531749f041cdc3f3dc'>
                            321 Communication
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Status
                        </label>
                        <select
                          class='form-select'
                          aria-label='Default select example'
                        >
                          <option selected>Select Option</option>
                          <option value='1'>Active</option>
                          <option value='2'>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class='px-5'>
                    <div class='col-12 col-md-12 col-lg-12'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>Description</label>
                        <textarea
                          class='form-control'
                          placeholder='Leave a description here'
                          id='floatingTextarea'
                          {...register('description', { required: true })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/* END  */}
                  <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                    <button class='btn btn-primary' type='submit'>
                      Add Phone Plan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* start  */}
      <div
        class='modal fade w-100'
        id='viewPhoneModal'
        tabindex='-1'
        aria-labelledby='viewModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='viewModalLabel'>
                Phone Plan Data
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div style={{ width: '100%' }} className={ppStyle.serviceView}>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                  General Information
                </h1>
                <table class='table table-striped '>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>321 Communication</td>
                    </tr>
                    <tr>
                      <td> Service Carrier</td>
                      <td>We Provide best service</td>
                    </tr>
                    <tr>
                      <td>Plan Code</td>
                      <td>12343</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>Supporting affordable communications</td>
                    </tr>
                  </tbody>
                </table>
                <div className={ppStyle.button}>
                  <button className={ppStyle.downloadBtn}>
                    <i class='fa fa-download' download></i> Download
                  </button>
                  <button className={ppStyle.printBtn}>
                    <i class='fa fa-print' download></i> Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end  */}
    </div>
  );
};

export default PhonePlans;

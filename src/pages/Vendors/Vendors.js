import React, { useEffect, useRef, useState } from 'react';
import vendorStyle from './Styles/PhonePlan.module.css';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import tableIcons from '../../components/IconProvider/IconProvider';
import { useForm } from 'react-hook-form';

const Vendors = () => {
  //hook form things
  const { register, handleSubmit, reset } = useForm();
  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/vendor`;

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors();
  }, []);

  const getVendors = () => {
    fetch(`${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setVendors(data.data))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'error on device data fetching',
        });
      });
  };

  const onSubmit = (data) => {
    const vendorData = {
      vendor: data,
    };
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...vendorData }),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) {
          Swal.fire('Vendor Added Successfully', '', 'success');
        }
      })
      .then((data) => {
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

  console.log(vendors);

  return (
    <div className={`${vendorStyle.ppContainer} py-md-3`}>
      <div className={vendorStyle.phoneData} class='my-1 mx-1 my-lg-3 mx-lg-3'>
        <div class='d-flex justify-content-between px-lg-4'>
          <h3>Vendors</h3>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#vendorModal'
          >
            Add New Vendor
          </button>
        </div>
        <div className={vendorStyle.TableData}>
          <table className={vendorStyle.Table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {vendors?.map((vendor) => (
                <>
                  <tr key={vendor?._id}>
                    <td>{vendor?.company}</td>
                    <td>{vendor?.phone}</td>
                    <td>{vendor?.email}</td>
                    <td>
                      <ul>
                        <button
                          type='button'
                          data-bs-toggle='modal'
                          data-bs-target='#viewVendors'
                        >
                          View
                        </button>
                        <button>Edit</button>
                        <button>Delete </button>
                      </ul>
                    </td>
                  </tr>
                  {/* view vendor modal  code starts*/}
                  <div
                    class='modal fade w-100'
                    id='viewVendors'
                    tabindex='-1'
                    aria-labelledby='viewModalLabel'
                    aria-hidden='true'
                  >
                    <div class='modal-dialog modal-xl'>
                      <div class='modal-content'>
                        <div class='modal-header'>
                          <h5 class='modal-title' id='viewModalLabel'>
                            Vendor Data
                          </h5>
                          <button
                            type='button'
                            class='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div class='modal-body'>
                          <div
                            style={{ width: '100%' }}
                            className={vendorStyle.serviceView}
                          >
                            <h1
                              style={{ textAlign: 'start', fontSize: '20px' }}
                            >
                              General Information
                            </h1>
                            <table className='table table-striped'>
                              <tbody>
                                <tr>
                                  <td className='ps-1 ps-md-2'>ID</td>
                                  <td className='ps-1 ps-md-2'>{vendor?.id}</td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'> Company</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.company}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Phone</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.phone}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Email</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.email}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Address 1</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.address1}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Address 2</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.address2}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>City</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.city}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>State</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.state}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Zip Code</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.zipCode}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>First Name</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.firstName}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Last Name</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor?.lastName}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='ps-1 ps-md-2'>Note</td>
                                  <td className='ps-1 ps-md-2'>
                                    {vendor.notes
                                      ? vendors?.notes?.map((note, index) => {
                                          <tr key={index}>
                                            <td>{note}</td>
                                          </tr>;
                                        })
                                      : 'No Notes Found'}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className={vendorStyle.button}>
                              <button className={vendorStyle.downloadBtn}>
                                <i class='fa fa-download' download></i> Download
                              </button>
                              <button className={vendorStyle.printBtn}>
                                <i class='fa fa-print' download></i> Print
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        class='modal fade w-100'
        id='vendorModal'
        tabindex='-1'
        aria-labelledby='vendorModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title ms-5' id='vendorModalLabel'>
                Add Vendor
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
                    <div class='col-12 col-md-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          First Name
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='First Name'
                          {...register('firstName', { required: true })}
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Last Name
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Last Name'
                          {...register('lastName', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          Company
                        </label>
                        <input
                          class='form-control'
                          type='text'
                          id='company'
                          placeholder='Company Name'
                          {...register('company', { required: true })}
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Phone
                        </label>
                        <input
                          className='form-control'
                          id='phone'
                          type='text'
                          placeholder='Enter Phone Number'
                          {...register('phone', { required: true })}
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Email
                        </label>
                        <input
                          class='form-control'
                          type='email'
                          id='email'
                          placeholder='Enter Email'
                          {...register('email', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-12 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>Address 1</label>
                        <input
                          class='form-control'
                          placeholder='Address 1'
                          id='address1'
                          {...register('address1', { required: true })}
                        ></input>
                      </div>
                    </div>
                    <div class='col-12 col-md-12 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>Address 2</label>
                        <input
                          class='form-control'
                          placeholder='Address 2'
                          id='address2'
                          {...register('address2')}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>City</label>
                        <input
                          class='form-control'
                          placeholder='City'
                          id='city'
                          {...register('city', { required: true })}
                        ></input>
                      </div>
                    </div>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>State</label>
                        <input
                          class='form-control'
                          placeholder='State'
                          id='state'
                          {...register('state', { required: true })}
                        ></input>
                      </div>
                    </div>
                    <div class='col-12 col-md-4 col-lg-4'>
                      <div class='mb-3 text-start'>
                        <label class='form-label'>Zip Code</label>
                        <input
                          class='form-control'
                          placeholder='Zip COde'
                          id='zipCode'
                          {...register('zipCode', { required: true })}
                        ></input>
                      </div>
                    </div>
                  </div>
                  {/* END  */}
                  <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                    <button class='btn btn-primary' type='submit'>
                      Add New Vendor
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;

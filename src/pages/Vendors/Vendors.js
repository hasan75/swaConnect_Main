import React, { useEffect, useState } from 'react';
import vendorStyle from './Styles/PhonePlan.module.css';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';
// import MaterialTable from 'material-table';
// import { Link } from 'react-router-dom';
// import tableIcons from '../../components/IconProvider/IconProvider';
import { useForm } from 'react-hook-form';
import EditVendor from './EditVendor/EditVendor';
import ViewVendor from './ViewVendor/ViewVendor';

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

  // console.log(vendors);

  //for view modal
  let [showViewModal, setShowViewModal] = useState(false);
  let [viewModalId, setViewModalId] = useState(null);
  const [viewData, setViewData] = useState({});

  const viewTheVendor = (vendor) => {
    setViewData((prevendor) => Object.assign(prevendor, vendor));
    console.log(viewData);
  };
  // console.log(viewData);

  let showTheViewModal = (index) => {
    setShowViewModal(true);
    setViewModalId(index);
  };

  let viewModalColse = () => {
    setShowViewModal(false);
  };

  //for edit modal
  let [showEditModal, setShowEditModal] = useState(false);
  let [modalId, setModalId] = useState(null);
  const [editData, setEditData] = useState({});

  let showTheEditModal = (index) => {
    setShowEditModal(true);
    setModalId(index);
  };

  let editModalColse = () => {
    setShowEditModal(false);
  };
  // console.log(viewData);
  //for modal

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
              {vendors?.map((vendor, index) => (
                <>
                  <tr key={vendor?.id} index={index}>
                    <td>{vendor?.company}</td>
                    <td>{vendor?.phone}</td>
                    <td>{vendor?.email}</td>
                    <td>
                      <ul>
                        <button
                          type='button'
                          data-bs-toggle='modal'
                          data-bs-target='#viewVendors'
                          onClick={() => {
                            viewTheVendor(vendor);
                            showTheViewModal(index);
                          }}
                        >
                          View
                        </button>
                        {/* edit button  */}
                        <button
                          type='button'
                          data-bs-toggle='modal'
                          data-bs-target='#editVendorModal'
                          onClick={async () => {
                            showTheEditModal(index);
                            await setEditData(vendor);
                          }}
                        >
                          Edit
                        </button>
                        <button>Delete </button>
                      </ul>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ViewVendor
        key={viewData?.name}
        viewData={viewData}
        onHide={viewModalColse}
      ></ViewVendor>
      <EditVendor
        key={editData?.name}
        show={showEditModal}
        onHide={editModalColse}
        editData={editData}
      ></EditVendor>
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

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useToken from '../../../hooks/useToken';

const EditVendor = (props) => {
  const { editData } = props;
  // console.log(props);
  //hook form things
  const { register, handleSubmit, reset } = useForm();
  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/vendor`;

  const onEditSubmit = async (data) => {
    data.id = editData.id;
    const vendorEditData = {
      vendor: data,
    };
    console.log(vendorEditData);
    Swal.fire({
      icon: 'warning',
      title: 'Sure to Update this Vendor?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${url}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ ...vendorEditData }),
        })
          .then((res) => {
            res.json();
            if (res.status === 200) {
              Swal.fire('Updated!', '', 'success');
              window.location.reload();
            }
          })
          .catch((err) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'SOmething went work!',
              html: 'Please, try again!',
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
    reset();
  };

  return (
    <div
      class='modal fade w-100'
      id='editVendorModal'
      tabindex='-1'
      aria-labelledby='editModalLabel'
      aria-hidden='true'
      {...props}
    >
      <div class='modal-dialog modal-xl'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 className='modal-title ms-5' id='editModalLabel'>
              Edit Vendor Information
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={props.onHide}
            ></button>
          </div>
          <div class='modal-body'>
            <form onSubmit={handleSubmit(onEditSubmit)}>
              <div style={{ fontFamily: 'sans-serif' }}>
                <div class='row px-5'>
                  <div class='col-12 col-md-4'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        defaultValue={editData.id}
                        placeholder={editData.id}
                        readonly
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-4'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        defaultValue={editData.firstName}
                        placeholder={editData.firstName}
                        {...register('firstName')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-4'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        {' '}
                        Last Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        defaultValue={editData.lastName}
                        placeholder={editData.lastName}
                        {...register('lastName')}
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
                        placeholder={editData.company}
                        defaultValue={editData.company}
                        {...register('company')}
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
                        placeholder={editData.phone}
                        defaultValue={editData.phone}
                        {...register('phone')}
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
                        placeholder={editData.email}
                        defaultValue={editData.email}
                        {...register('email')}
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
                        id='address1'
                        placeholder={editData.address1}
                        defaultValue={editData.address1}
                        {...register('address1')}
                      ></input>
                    </div>
                  </div>
                  <div class='col-12 col-md-12 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label class='form-label'>Address 2</label>
                      <input
                        class='form-control'
                        id='address2'
                        placeholder={editData.address2}
                        defaultValue={editData.address2}
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
                        id='city'
                        placeholder={editData.city}
                        defaultValue={editData.city}
                        {...register('city')}
                      ></input>
                    </div>
                  </div>
                  <div class='col-12 col-md-4 col-lg-4'>
                    <div class='mb-3 text-start'>
                      <label class='form-label'>State</label>
                      <input
                        class='form-control'
                        id='state'
                        placeholder={editData.state}
                        defaultValue={editData.state}
                        {...register('state')}
                      ></input>
                    </div>
                  </div>
                  <div class='col-12 col-md-4 col-lg-4'>
                    <div class='mb-3 text-start'>
                      <label class='form-label'>Zip Code</label>
                      <input
                        class='form-control'
                        id='zipCode'
                        placeholder={editData.zipCode}
                        defaultValue={editData.zipCode}
                        {...register('zipCode')}
                      ></input>
                    </div>
                  </div>
                </div>
                {/* END  */}
                <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                  <button class='btn btn-primary' type='submit'>
                    Edit Vendor
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVendor;

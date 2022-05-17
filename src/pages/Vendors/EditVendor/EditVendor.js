import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useToken from '../../../hooks/useToken';

const EditVendor = (props) => {
  const { vendor, id, name } = props;
  //hook form things
  const { register, handleSubmit, reset } = useForm();
  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/vendor`;

  const onEditSubmit = async (data) => {
    const vendorEditData = {
      vendor: data,
    };
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
          },
          body: JSON.stringify({ ...vendorEditData }),
        })
          .then((res) => {
            res.json();
            console.log(res);
          })
          .then((data) => {
            if (data.modifiedCount) {
              reset();
              Swal.fire('Updated!', '', 'success');
            } else {
              Swal.fire("You didn't change", '', 'warning');
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
      id={name}
      tabindex='-1'
      aria-labelledby='editModalLabel'
      aria-hidden='true'
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
                        defaultValue={vendor.id}
                        placeholder={vendor.id}
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
                        defaultValue={vendor.firstName}
                        placeholder={vendor.firstName}
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
                        defaultValue={vendor.lastName}
                        placeholder={vendor.lastName}
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
                        placeholder={vendor.company}
                        defaultValue={vendor.company}
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
                        placeholder={vendor.phone}
                        defaultValue={vendor.phone}
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
                        placeholder={vendor.email}
                        defaultValue={vendor.email}
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
                        placeholder={vendor.address1}
                        defaultValue={vendor.address1}
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
                        placeholder={vendor.address2}
                        defaultValue={vendor.address2}
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
                        placeholder={vendor.city}
                        defaultValue={vendor.city}
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
                        placeholder={vendor.state}
                        defaultValue={vendor.state}
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
                        placeholder={vendor.zipCode}
                        defaultValue={vendor.zipCode}
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

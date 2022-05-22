import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useToken from '../../../hooks/useToken';

const EditServiceCarrier = (props) => {
  const { editData } = props;
  //hook form things
  const { register, handleSubmit, reset } = useForm({});
  useEffect(() => {
    let defaultValues = {};
    defaultValues = editData;
    reset({ ...defaultValues });
  }, [props]);

  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/servicecarrier`;

  const onEditSubmit = async (data) => {
    data.id = editData.id;
    const scEditedData = {
      serviceCarrier: data,
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
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ ...scEditedData }),
        })
          .then((res) => {
            res.json();
            if (res.status === 200) {
              Swal.fire('Updated!', '', 'success');
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
      id='editSCModal'
      tabIndex='-1'
      aria-labelledby='serviceModalLabel'
      aria-hidden='true'
      {...props}
    >
      <div class='modal-dialog modal-xl'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title ms-5' id='serviceModalLabel'>
              Edit Service Carrier
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
            <form
              onSubmit={handleSubmit(onEditSubmit)}
              encType='multipart/form-data'
            >
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
                        placeholder={editData.name}
                        {...register('name')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Label
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.label}
                        {...register('label')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Contact Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.contactName}
                        {...register('contactName')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Contact Phone
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.contactPhone}
                        {...register('contactPhone')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Contact Email
                      </label>
                      <input
                        type='email'
                        class='form-control'
                        placeholder={editData.contactEmail}
                        {...register('contactEmail')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Support Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.supportName}
                        {...register('supportName')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Support Phone
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.supportPhone}
                        {...register('supportPhone')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Support Email
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.supportEmail}
                        {...register('supportEmail')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Api User Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.apiUserName}
                        {...register('apiUserName')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Api Token Password
                      </label>
                      <input
                        type='password'
                        class='form-control'
                        placeholder={editData.apiTokenPassword}
                        {...register('apiTokenPassword')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        Api Pin
                      </label>
                      <input
                        type='password'
                        class='form-control'
                        placeholder={editData.apiPin}
                        {...register('apiPin')}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        CLECID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder={editData.clecid}
                        {...register('clecid')}
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-12'>
                    <div class='mb-3 text-start'>
                      <label f class='form-label'>
                        SIM Status
                      </label>
                      <select
                        class='form-select'
                        aria-label={editData.status}
                        {...register('status')}
                      >
                        <option selected disabled hidden>
                          Select Option
                        </option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* END  */}
                <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                  <button class='btn btn-primary' type='submit'>
                    Update Service Data
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

export default EditServiceCarrier;

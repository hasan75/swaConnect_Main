import React, { useEffect, useRef, useState } from 'react';
import scStyle from './Styles/ServiceCarrier.module.css';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';

import EditServiceCarrier from './EditServiceCarrier/EditServiceCarrier';
import { useForm } from 'react-hook-form';
import ViewServiceCarrier from './ViewServiceCarrier/ViewServiceCarrier';
import TestView from './TestView';

const ServiceCarriers = () => {
  const [plusBtn, setPlusBtn] = useState(true);
  const [isShow, setIsshow] = useState(false);
  const [planTable, setPlanTable] = useState(false);
  const handleClick = () => {
    setIsshow(!isShow);
    setPlusBtn(!plusBtn);
  };

  const [plan, setPlan] = useState([]);
  const planNameRef = useRef('');
  const planCodeRef = useRef('');
  const planDesRef = useRef('');
  const addData = () => {
    if (
      planNameRef.current.value === '' ||
      planCodeRef.current.value === '' ||
      planDesRef.current.value === ''
    ) {
      alert('Please Enter value for adding plan ');
    } else {
      const planValue = {
        planName: planNameRef.current.value,
        planCode: planCodeRef.current.value,
        planDes: planDesRef.current.value,
      };
      setPlan([...plan, planValue]);
      console.log(plan);
      planNameRef.current.value = '';
      planCodeRef.current.value = '';
      planDesRef.current.value = '';
      setPlanTable(true);
    }
  };
  const planDelete = (index) => {
    let newPlan = plan.slice(0, index).concat(plan.slice(index + 1));
    if (plan.length == 1 || plan.length == 0) {
      setPlanTable(false);
    }
    setPlan(newPlan);
  };
  // NOTE
  const [noteBtn, setNoteBtn] = useState(true);
  const [isNote, setIsNote] = useState(false);
  const [noteTable, setNoteTable] = useState(false);
  const noteRef = useRef('');
  const handleNote = () => {
    setIsNote(!isNote);
    setNoteBtn(!noteBtn);
  };
  // addNote
  const [note, setNote] = useState([]);
  const addNote = () => {
    if (noteRef.current.value === '') {
      alert('Please Enter value for adding plan ');
    } else {
      const noteValue = {
        noteName: noteRef.current.value,
      };
      setNote([...note, noteValue]);
      console.log(note);
      noteRef.current.value = '';
      setNoteTable(true);
    }
  };
  const noteDelete = (index) => {
    let newNote = note.slice(0, index).concat(note.slice(index + 1));
    if (note.length == 1 || note.length == 0) {
      setNoteTable(false);
    }
    setNote(newNote);
  };
  // FILE
  const [fileBtn, setFileBtn] = useState(true);
  const [isFile, setIsFile] = useState(false);
  const [fileTable, setFileTable] = useState(false);
  const fileRef = useRef('');
  const handleFile = () => {
    setIsFile(!isFile);
    setFileBtn(!fileBtn);
  };
  const [file, setFile] = useState([]);
  const addFile = () => {
    if (fileRef.current.value === '') {
      alert('Please Enter value for adding plan ');
    } else {
      const fileValue = {
        fileName: fileRef.current.value,
      };
      setFile([...file, fileValue]);
      console.log(file);
      fileRef.current.value = '';
      setFileTable(true);
    }
  };
  const fileDelete = (index) => {
    let newFile = file.slice(0, index).concat(file.slice(index + 1));
    if (file.length == 1 || file.length == 0) {
      setFileTable(false);
    }
    setFile(newFile);
  };

  //service Carrier works
  //hook form things
  const { register, handleSubmit, reset } = useForm();
  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/servicecarrier`;

  const [serviceCarriers, setServiceCarriers] = useState([]);

  //getting service carriers
  useEffect(() => {
    getServiceCarriers();
  }, []);

  const getServiceCarriers = () => {
    fetch(`${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setServiceCarriers(data.data))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'error on device data fetching',
        });
      });
  };

  // for adding service carrier
  const onSubmit = (data) => {
    console.log(data);
    const serviceCarrierData = {
      serviceCarrier: data,
    };
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...serviceCarrierData }),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) {
          Swal.fire('Service Carrier Added Successfully', '', 'success');
        }
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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

  // //for edit modal
  // let [showEditModal, setShowEditModal] = useState(false);
  // let [modalId, setModalId] = useState(null);
  // const [editData, setEditData] = useState({});

  // let showTheEditModal = (index) => {
  //   setShowEditModal(true);
  //   setModalId(index);
  // };

  // let editModalColse = () => {
  //   setShowEditModal(false);
  // };

  //for view service carrier modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSc, setSelectedSc] = useState(null);

  const expandModal = (serviceCarrier) => {
    setSelectedSc(serviceCarrier);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedSc(null);
    setModalIsOpen(true);
  };

  //for edit service carrier modal
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editSelectedSc, setEditSelectedSc] = useState(null);

  const expandEditModal = (serviceCarrier) => {
    setEditSelectedSc(serviceCarrier);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditSelectedSc(null);
    setEditModalIsOpen(true);
  };

  // delete service carrier
  const deleteServiceCarrier = (id) => {
    const deleteUrl = `${urlPre}/servicecarrier?id=${id}`;
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete this service carrier?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        })
          .then((res) => {
            res.json();
            if (res.status === 200) {
              Swal.fire('Deleted!', '', 'success');
              const modifiedCarriers = serviceCarriers.filter(
                (carrier) => carrier.id !== id
              );
              setServiceCarriers(modifiedCarriers);
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Sorry',
              text: 'Could Not Delete, Try Again Please.',
            });
          });
      }
    });
  };
  console.log(serviceCarriers);
  return (
    <div className={`${scStyle.serviceCarrierContainer} py-md-3`}>
      <div className={scStyle.serviceData} class='my-3 mx-lg-5'>
        <div class='d-flex justify-content-between px-lg-4 px-2'>
          <h3>Service Carriers</h3>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#serviceModal'
          >
            Add New Service Carrier
          </button>
        </div>
        <div className={scStyle.TableData}>
          <table className={scStyle.Table}>
            <thead>
              <tr>
                <th>Label</th>
                <th>Name (Company Name)</th>
                <th>Date-Created</th>
                <th>Status</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {serviceCarriers?.map((serviceCarrier, index) => (
                <tr key={serviceCarrier?.id} index={index}>
                  <td>{serviceCarrier?.label}</td>
                  <td>{serviceCarrier?.name}</td>
                  <td>
                    {new Date(serviceCarrier?.createdDate).toLocaleDateString()}
                  </td>
                  <td>{serviceCarrier?.status}</td>
                  <td>
                    <ul>
                      <button
                        type='button'
                        data-bs-toggle='modal'
                        data-bs-target='#viewServiceCarriers'
                        onClick={() => {
                          expandModal(serviceCarrier);
                        }}
                      >
                        View
                      </button>
                      <button
                        type='button'
                        data-bs-toggle='modal'
                        data-bs-target='#editSCModal'
                        onClick={() => {
                          expandEditModal(serviceCarrier);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteServiceCarrier(serviceCarrier.id)}
                      >
                        Delete{' '}
                      </button>
                      <button>Active</button>
                      <button>Deactive</button>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* view service carrier  */}
      <ViewServiceCarrier
        selectedSc={selectedSc}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></ViewServiceCarrier>
      {/* edit service carrier modal  */}
      <EditServiceCarrier
        editSelectedSc={editSelectedSc}
        editModalIsOpen={editModalIsOpen}
        closeEditModal={closeEditModal}
      ></EditServiceCarrier>
      {/* add service carrier  */}
      <div
        class='modal fade w-100'
        id='serviceModal'
        tabindex='-1'
        aria-labelledby='serviceModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title ms-5' id='serviceModalLabel'>
                Add Service Carrier
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <form
                onSubmit={handleSubmit(onSubmit)}
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
                          placeholder='Name'
                          {...register('name', { required: true })}
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
                          placeholder='Label'
                          {...register('label', { required: true })}
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
                          placeholder='Contact Name'
                          {...register('contactName', { required: true })}
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
                          placeholder='Contact Phone'
                          {...register('contactPhone', { required: true })}
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
                          placeholder='Contact Email'
                          {...register('contactEmail', { required: true })}
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
                          placeholder='Support Name'
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
                          placeholder='Support Phone'
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
                          placeholder='Support Email'
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
                          placeholder='Api User Name'
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
                          placeholder='Api Token Password'
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
                          placeholder='Api Pin'
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
                          placeholder='CLECID'
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
                          aria-label='Default select example'
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
                  {/* Phone Plans  */}
                  <div class=' m-3 '>
                    <div class='d-flex mt-3'>
                      <p class='fs-4 ms-4'>Add Phone Plan </p>
                      {plusBtn && (
                        <i
                          onClick={handleClick}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-plus-square fs-4 ms-3 '
                        ></i>
                      )}
                      {!plusBtn && (
                        <i
                          onClick={handleClick}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-dash-square fs-4 ms-3 '
                        ></i>
                      )}
                    </div>
                  </div>
                  {isShow && (
                    <div class='px-5'>
                      <div style={{ position: 'relative' }} class=' mb-5'>
                        <div class='row '>
                          <div class='col-12 col-md-6 col-lg-6'>
                            <div class='mb-3 text-start'>
                              <label class='form-label'>Name</label>
                              <input
                                ref={planNameRef}
                                type='text'
                                class='form-control'
                                placeholder='Name'
                              />
                            </div>
                          </div>
                          <div class='col-12 col-md-6 col-lg-6'>
                            <div class='mb-3 text-start'>
                              <label class='form-label'>Plan Code</label>
                              <input
                                ref={planCodeRef}
                                type='text'
                                class='form-control'
                                placeholder='Code'
                              />
                            </div>
                          </div>
                        </div>
                        <div class='row  '>
                          <div class='col-12 col-md-12 col-lg-12'>
                            <div class='mb-3 text-start'>
                              <label class='form-label'>Description</label>
                              <textarea
                                ref={planDesRef}
                                class='form-control'
                                placeholder='Leave a description here'
                                id='floatingTextarea'
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={addData}
                            className={scStyle.addBtn}
                            type='button'
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div class='px-5'>
                    {planTable && (
                      <div style={{ marginBottom: '20px' }}>
                        <table
                          style={{
                            borderColllaps: 'collapse',
                            width: '100%',
                          }}
                          class='table  border border-1'
                        >
                          <thead>
                            <tr>
                              <th
                                style={{ backgroundColor: '#ecedf7' }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Name
                              </th>
                              <th
                                style={{ backgroundColor: '#ecedf7' }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Plane Code
                              </th>
                              <th
                                style={{ backgroundColor: '#ecedf7' }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Plan Description
                              </th>
                              <th
                                style={{
                                  backgroundColor: '#ecedf7',
                                  width: '5%',
                                }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {plan.map((plan, index) => (
                              <tr>
                                <td class='fs-6 ps-5 fw-normal border'>
                                  {plan.planName}
                                </td>
                                <td class='fs-6 ps-5 fw-normal border'>
                                  {plan.planCode}
                                </td>
                                <td class='fs-6 ps-5 fw-normal border'>
                                  {plan.planDes}
                                </td>
                                <td
                                  style={{ width: '5%' }}
                                  class='fs-5 ps-5 fw-normal border'
                                >
                                  <i
                                    style={{
                                      color: '#ff4533',
                                      cursor: 'pointer',
                                    }}
                                    onClick={() => planDelete(index)}
                                    class='bi bi-trash ms-2'
                                  ></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* END  */}
                  {/* ADD NOTES  */}
                  <div class=' m-3  '>
                    <div class='d-flex mt-3'>
                      <p class='fs-4 ms-4'>Add Notes </p>
                      {noteBtn && (
                        <i
                          onClick={handleNote}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-plus-square fs-4 ms-3 '
                        ></i>
                      )}
                      {!noteBtn && (
                        <i
                          onClick={handleNote}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-dash-square fs-4 ms-3 '
                        ></i>
                      )}
                    </div>
                  </div>
                  {isNote && (
                    <div class='px-5'>
                      <div
                        style={{ position: 'relative', marginBottom: '70px' }}
                      >
                        <div class='form-floating mb-3'>
                          <textarea
                            class='form-control'
                            placeholder='Leave a comment here'
                            id='floatingTextarea'
                            ref={noteRef}
                          ></textarea>
                          <label for='floatingTextarea'>Notes</label>
                        </div>
                        <div>
                          <button
                            onClick={addNote}
                            className={scStyle.addBtn}
                            type='button'
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div class='px-5 mt-3'>
                    {noteTable && (
                      <div style={{ marginBottom: '20px', marginTop: '0px' }}>
                        <table
                          style={{
                            borderColllaps: 'collapse',
                            width: '100%',
                          }}
                          class='table  border border-1'
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  backgroundColor: '#ecedf7',
                                  width: '5%',
                                }}
                                class='fs-6 fw-normal p-6  border'
                              >
                                #
                              </th>
                              <th
                                style={{ backgroundColor: '#ecedf7' }}
                                class='fs-6 fw-normal p-6 ps-5 text-center border'
                              >
                                Notes
                              </th>
                              <th
                                style={{
                                  backgroundColor: '#ecedf7',
                                  width: '5%',
                                }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {note.map((note, index) => (
                              <tr>
                                <td
                                  style={{ width: '5%' }}
                                  class='fs-6 fw-normal border'
                                >
                                  {index + 1}
                                </td>
                                <td class='fs-6 ps-5 text-start fw-normal border'>
                                  {note.noteName}
                                </td>
                                <td class='fs-5 ps-5 fw-normal border'>
                                  <i
                                    style={{
                                      color: '#ff4533',
                                      cursor: 'pointer',
                                    }}
                                    onClick={() => noteDelete(index)}
                                    class='bi bi-trash ms-2'
                                  ></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  {/* END  */}
                  {/* FILE DATA  */}
                  <div class=' m-3  '>
                    <div class='d-flex mt-3'>
                      <p class='fs-4 ms-4'> Add Files </p>
                      {fileBtn && (
                        <i
                          onClick={handleFile}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-plus-square fs-4 ms-3 '
                        ></i>
                      )}
                      {!fileBtn && (
                        <i
                          onClick={handleFile}
                          style={{ cursor: 'pointer' }}
                          class='bi bi-dash-square fs-4 ms-3 '
                        ></i>
                      )}
                    </div>
                  </div>
                  {isFile && (
                    <div class='px-5'>
                      <div
                        style={{ position: 'relative', marginBottom: '70px' }}
                      >
                        <div class=' mb-3'>
                          {/* <label for="formFile" class="form-label"></label> */}
                          <input
                            class='form-control'
                            type='file'
                            id='formFile'
                            ref={fileRef}
                          />
                        </div>
                        <div>
                          <button
                            onClick={addFile}
                            className={scStyle.addBtn}
                            type='button'
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div class='px-5 mt-3'>
                    {fileTable && (
                      <div style={{ marginBottom: '20px', marginTop: '0px' }}>
                        <table
                          style={{
                            borderColllaps: 'collapse',
                            width: '100%',
                          }}
                          class='table  border border-1'
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  backgroundColor: '#ecedf7',
                                  width: '5%',
                                }}
                                class='fs-6 fw-normal p-6  border'
                              >
                                #
                              </th>
                              <th
                                style={{ backgroundColor: '#ecedf7' }}
                                class='fs-6 fw-normal p-6 ps-5 text-center border'
                              >
                                Files
                              </th>
                              <th
                                style={{
                                  backgroundColor: '#ecedf7',
                                  width: '5%',
                                }}
                                class='fs-6 fw-normal p-6 ps-5 border'
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {file.map((file, index) => (
                              <tr>
                                <td
                                  style={{ width: '5%' }}
                                  class='fs-6 fw-normal border'
                                >
                                  {index + 1}
                                </td>
                                <td class='fs-6 ps-5 text-start fw-normal border'>
                                  {file.fileName}
                                </td>
                                <td class='fs-5 ps-5 fw-normal border'>
                                  <i
                                    style={{
                                      color: '#ff4533',
                                      cursor: 'pointer',
                                    }}
                                    onClick={() => fileDelete(index)}
                                    class='bi bi-trash ms-2'
                                  ></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  {/* END  */}
                  <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                    <button class='btn btn-primary' type='submit'>
                      Add Service Data
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

export default ServiceCarriers;

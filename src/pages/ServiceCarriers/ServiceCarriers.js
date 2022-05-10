import React, { useRef, useState } from 'react';
import scStyle from './Styles/ServiceCarrier.module.css';

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

  return (
    <div className={`${scStyle.serviceCarrierContainer} py-3`}>
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
              <tr>
                <td>Label</td>
                <td>SWA Connncect</td>
                <td>12 April 2022</td>
                <td>Active</td>
                <td>
                  <ul>
                    <button
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#viewModal'
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
              <form action=''>
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
                          required
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
                        >
                          <option selected>Select Option</option>
                          <option value='1'>Active</option>
                          <option value='2'>Inactive</option>
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
      {/* start  */}
      <div
        class='modal fade w-100'
        id='viewModal'
        tabindex='-1'
        aria-labelledby='viewModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='viewModalLabel'>
                Service Carrier Data
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div style={{ width: '100%' }} className={scStyle.serviceView}>
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
                      <td>Label</td>
                      <td>We Provide best service</td>
                    </tr>
                    <tr>
                      <td>Contact Name</td>
                      <td>Tandolkar</td>
                    </tr>
                    <tr>
                      <td>Contact Phone</td>
                      <td>+92833243239</td>
                    </tr>
                    <tr>
                      <td>Contact Email</td>
                      <td>tandul32@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Suppor Name</td>
                      <td>Rohit Sharma</td>
                    </tr>
                    <tr>
                      <td>Support Phone</td>
                      <td>+92833243239</td>
                    </tr>
                    <tr>
                      <td>Support Email</td>
                      <td>sharmal32@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Api User Name</td>
                      <td>Tandulkar</td>
                    </tr>
                    <tr>
                      <td>Api Token Password</td>
                      <td>124343</td>
                    </tr>
                    <tr>
                      <td>Api Pin</td>
                      <td>324233</td>
                    </tr>
                    <tr>
                      <td>CLECID</td>
                      <td>CLECID</td>
                    </tr>
                  </tbody>
                </table>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                  Phone Plan
                </h1>
                <table
                  className={scStyle.planTableData}
                  class='table table-striped '
                >
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td class='text-start'>321 Communication</td>
                    </tr>
                    <tr>
                      <td>Plan Code</td>
                      <td class='text-start'>T2345dr</td>
                    </tr>
                    <tr>
                      <td>Created Date</td>
                      <td>21 April 2022</td>
                    </tr>

                    <tr>
                      <td>Description</td>
                      <td>We love 321 plan tech communication</td>
                    </tr>
                  </tbody>
                </table>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>Notes</h1>
                <table class='table table-striped '>
                  <tbody>
                    <tr>
                      <td>Note</td>
                      <td>
                        A virtual SIM is a mobile phone number provided by a
                        mobile network operator that does not require a SIM card
                        to connect phone calls to a user's mobile phone.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>Files</h1>
                <table class='table table-striped '>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>firstslide.pdf</td>
                    </tr>
                  </tbody>
                </table>
                <div className={scStyle.button}>
                  <button className={scStyle.downloadBtn}>
                    <i class='fa fa-download' download></i> Download
                  </button>
                  <button className={scStyle.printBtn}>
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

export default ServiceCarriers;

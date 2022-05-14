import React, { useRef, useState } from 'react';
import scrStyle from './Styles/SimCardOrders.module.css';

const SimCardOrders = () => {
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

  // END
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

  // END
  return (
    <div className={`${scrStyle.scoContainer} py-2 py-md-3`}>
      <div className={scrStyle.simreturnData} class='my-1 my-lg-3 mx-1 mx-lg-3'>
        <div class='d-flex justify-content-between px-lg-4'>
          <h3>Sim Card Order</h3>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#simorderModal'
          >
            Add Sim Card Order
          </button>
        </div>
        <div className={scrStyle.TableData}>
          <table className={scrStyle.Table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>324 SWA Connect</td>
                <td>+9043284389</td>
                <td>swaconnect@gmail.com</td>
                <td>
                  <ul>
                    <button
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#viewsimorderModal'
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
        id='simorderModal'
        tabindex='-1'
        aria-labelledby='simorderModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title ms-5' id='simorderModalLabel'>
                Add Sim Card Order Data
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
                          {' '}
                          Sim Order Number
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder=' Order Number'
                          required
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          Order Date
                        </label>
                        <input type='date' class='form-control' required />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Quantity
                        </label>
                        <input
                          type='number'
                          class='form-control'
                          placeholder='Quantity'
                          required
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          vendor
                        </label>
                        <input
                          type='number'
                          class='form-control'
                          placeholder='vendor'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Tracking Number
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder=' Tracking Number'
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Batch Number
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Batch Number'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Received Date
                        </label>
                        <input type='date' class='form-control' />
                      </div>
                    </div>
                  </div>

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
                            className={scrStyle.addBtn}
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
                          style={{ borderColllaps: 'collapse', width: '100%' }}
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
                            multiple
                          />
                        </div>
                        <div>
                          <button
                            onClick={addFile}
                            className={scrStyle.addBtn}
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
                          style={{ borderColllaps: 'collapse', width: '100%' }}
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
                      Add Device Order
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
        id='viewsimorderModal'
        tabindex='-1'
        aria-labelledby='viewModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='viewModalLabel'>
                Sim Card Order Data
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div style={{ width: '100%' }} className={scrStyle.serviceView}>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                  General Information
                </h1>
                <table class='table table-striped '>
                  <tbody>
                    <tr>
                      <td>Sim Order Number</td>
                      <td>32143234</td>
                    </tr>
                    <tr>
                      <td>Order Date</td>
                      <td>20 April 2022</td>
                    </tr>
                    <tr>
                      <td>Qunatity</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Vendor</td>
                      <td>William</td>
                    </tr>
                    <tr>
                      <td>Tracking Number</td>
                      <td>ABC1234</td>
                    </tr>
                    <tr>
                      <td>Tracking Number</td>
                      <td>abc234</td>
                    </tr>
                    <tr>
                      <td>Received Date</td>
                      <td>20 April 2022</td>
                    </tr>
                    <tr>
                      <td>Batch Number</td>
                      <td>abc234</td>
                    </tr>
                    <tr>
                      <td>Notes</td>
                      <td>
                        SWA connect is a supporting affordable communication
                      </td>
                    </tr>
                    <tr>
                      <td>Files</td>
                      <td>swaconnect.png</td>
                    </tr>
                  </tbody>
                </table>
                <div className={scrStyle.button}>
                  <button className={scrStyle.downloadBtn}>
                    <i class='fa fa-download' download></i> Download
                  </button>
                  <button className={scrStyle.printBtn}>
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

export default SimCardOrders;

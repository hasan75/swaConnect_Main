import React, { useRef, useState } from 'react';
import srStyle from './Styles/SimCardReturn.module.css';

const SimCardReturns = () => {
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
  // ITEW SELECT
  const itemRef = useRef('');
  const [item, setItem] = useState(false);
  const handleItem = () => {
    const itemValue = itemRef.current.value;
    if (itemValue === 'Other') {
      setItem(true);
    } else {
      setItem(false);
    }
  };
  // END
  return (
    <div className={`${srStyle.srContainer} py-2 py-md-3`}>
      <div className={srStyle.simreturnData} class='my-1 my-lg-3 mx-1 mx-lg-3'>
        <div class='d-flex justify-content-between px-4'>
          <h3>Sim Card Returns</h3>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#simreturnModal'
          >
            Add New Vendor
          </button>
        </div>
        <div className={srStyle.TableData}>
          <table className={srStyle.Table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Return Date</th>
                <th>Return Reason</th>
                <th>Agent</th>
                <th>Distributor</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>324</td>
                <td>20 April 2022</td>
                <td>I have more sim same company</td>
                <td>William</td>
                <td>William</td>
                <td>
                  <ul>
                    <button
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#viewsimreturnModal'
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
        id='simreturnModal'
        tabindex='-1'
        aria-labelledby='simreturnModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title ms-5' id='simreturnModalLabel'>
                Add Sim Card Return Data
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
                          ID
                        </label>
                        <input
                          type='number'
                          class='form-control'
                          placeholder='ID'
                          required
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Return Reason
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Return Reason'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          Return Date{' '}
                        </label>
                        <input type='date' class='form-control' required />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Item
                        </label>
                        <select
                          onClick={handleItem}
                          class='form-select'
                          aria-label='Default select example'
                          ref={itemRef}
                        >
                          <option selected>Select Option</option>
                          <option value='Device'>Device</option>
                          <option value='Sim Card'>Sim Card</option>
                          <option value='Device+Sim Card'>
                            Device+Sim Card
                          </option>
                          <option value='Other'> Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {item && (
                    <div class='row px-5'>
                      <div class='col-12 col-md-12 col-lg-12'>
                        <div class='mb-3 text-start'>
                          <label f class='form-label'>
                            Other
                          </label>
                          <input
                            type='type'
                            class='form-control'
                            placeholder='Other item write here'
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          SSID
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='SSID'
                        />
                      </div>
                    </div>

                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Device Serial Number
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Device Serial Number'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          IMEI-1
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='IMEI-1'
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          IMEI-2
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='IMEI-2'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Shipping Method
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder=' Shipping Method'
                        />
                      </div>
                    </div>
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
                  </div>
                  <div class='row px-5'>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Reception Status
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder=' Reception Status'
                        />
                      </div>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                      <div class='mb-3 text-start'>
                        <label f class='form-label'>
                          {' '}
                          Reception Date
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
                            className={srStyle.addBtn}
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

                  {/* END  */}
                  <div style={{ marginTop: '50px' }} class='col-12 text-center'>
                    <button class='btn btn-primary' type='submit'>
                      Add Vendor
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
        id='viewsimreturnModal'
        tabindex='-1'
        aria-labelledby='viewModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='viewModalLabel'>
                Sim Card Return Data
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div style={{ width: '100%' }} className={srStyle.serviceView}>
                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                  General Information
                </h1>
                <table class='table table-striped '>
                  <tbody>
                    <tr>
                      <td>ID</td>
                      <td>321 </td>
                    </tr>
                    <tr>
                      <td>Return Date</td>
                      <td>20 April 2022 </td>
                    </tr>
                    <tr>
                      <td>Return Reason </td>
                      <td>I have another sim same company</td>
                    </tr>
                    <tr>
                      <td>Agent</td>
                      <td>William</td>
                    </tr>
                    <tr>
                      <td>Distributor</td>
                      <td>William</td>
                    </tr>
                    <tr>
                      <td>Item</td>
                      <td>Sim Card</td>
                    </tr>
                    <tr>
                      <td>Device Serial Number</td>
                      <td>abce234234</td>
                    </tr>
                    <tr>
                      <td>IMEI-1</td>
                      <td>AM243233</td>
                    </tr>
                    <tr>
                      <td>IMEI-2</td>
                      <td>AM243233</td>
                    </tr>
                    <tr>
                      <td>Shipping Method</td>
                      <td>DHL</td>
                    </tr>
                    <tr>
                      <td>Tracking Number</td>
                      <td>234abc32</td>
                    </tr>
                    <tr>
                      <td>Reception Status</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td>Reception Date</td>
                      <td>20 April 2022</td>
                    </tr>
                    <tr>
                      <td>Note</td>
                      <td>SWA connect supporting affordable communication</td>
                    </tr>
                  </tbody>
                </table>
                <div className={srStyle.button}>
                  <button className={srStyle.downloadBtn}>
                    <i class='fa fa-download' download></i> Download
                  </button>
                  <button className={srStyle.printBtn}>
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

export default SimCardReturns;

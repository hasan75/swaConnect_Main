import React, { useRef } from 'react';
import vendorStyle from '../Styles/PhonePlan.module.css';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const ViewVendor = (props) => {
  const printComponentRef = useRef();

  const downloadClick = () => {
    console.log('data');
  };

  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
  });

  return (
    <div
      class='modal fade w-100'
      id='viewVendors'
      tabindex='-1'
      aria-labelledby='viewModalLabel'
      aria-hidden='true'
      {...props}
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
          <div class='modal-body' ref={printComponentRef}>
            <div style={{ width: '100%' }} className={vendorStyle.serviceView}>
              <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                General Information
              </h1>
              <table className='table table-striped'>
                <tbody>
                  <tr>
                    <td className='ps-1 ps-md-2'>ID</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.id}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'> Company</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.company}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Phone</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.phone}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Email</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.email}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Address 1</td>
                    <td className='ps-1 ps-md-2'>
                      {props?.viewData?.address1}
                    </td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Address 2</td>
                    <td className='ps-1 ps-md-2'>
                      {props?.viewData?.address2}
                    </td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>City</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.city}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>State</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.state}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Zip Code</td>
                    <td className='ps-1 ps-md-2'>{props?.viewData?.zipCode}</td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>First Name</td>
                    <td className='ps-1 ps-md-2'>
                      {props?.viewData?.firstName}
                    </td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Last Name</td>
                    <td className='ps-1 ps-md-2'>
                      {props?.viewData?.lastName}
                    </td>
                  </tr>
                  <tr>
                    <td className='ps-1 ps-md-2'>Note</td>
                    <td className='ps-1 ps-md-2'>
                      {props?.viewData?.notes
                        ? props.viewData?.notes?.map((note, index) => {
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
                <button
                  className={vendorStyle.downloadBtn}
                  onClick={downloadClick}
                >
                  <i class='fa fa-download' download></i> Download
                </button>
                <button onClick={handlePrint} className={vendorStyle.printBtn}>
                  <i class='fa fa-print' download></i> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVendor;

import React, { useRef } from 'react';
import scStyle from '../Styles/ServiceCarrier.module.css';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const ViewServiceCarrier = (props) => {
  const printComponentRef = useRef();

  const downloadClick = () => {
    console.log('data');
  };

  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
  });
  console.log(props?.viewData);

  return (
    <div
      class='modal fade w-100'
      id='viewServiceCarriers'
      tabindex='-1'
      aria-labelledby='viewModalLabel'
      aria-hidden='true'
      {...props}
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
          <div class='modal-body' ref={printComponentRef}>
            <div style={{ width: '100%' }} className={scStyle.serviceView}>
              <h1 style={{ textAlign: 'start', fontSize: '20px' }}>
                General Information a
              </h1>
              <table class='table table-striped '>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{props?.viewData?.name}</td>
                  </tr>
                  <tr>
                    <td>Label</td>
                    <td>{props?.viewData?.label}</td>
                  </tr>
                  <tr>
                    <td>Contact Name</td>
                    <td>{props?.viewData?.contactName}</td>
                  </tr>
                  <tr>
                    <td>Contact Phone</td>
                    <td>{props?.viewData?.contactPhone}</td>
                  </tr>
                  <tr>
                    <td>Contact Email</td>
                    <td>{props?.viewData?.contactEmail}</td>
                  </tr>
                  <tr>
                    <td>Suppor Name</td>
                    <td>{props?.viewData?.supportName}</td>
                  </tr>
                  <tr>
                    <td>Support Phone</td>
                    <td>{props?.viewData?.supportPhone}</td>
                  </tr>
                  <tr>
                    <td>Support Email</td>
                    <td>{props?.viewData?.supportEmail}</td>
                  </tr>
                  <tr>
                    <td>Api User Name</td>
                    <td>
                      {props?.viewData?.apiUserName
                        ? props?.viewData?.apiUserName
                        : 'N/A'}{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Api Token Password</td>
                    <td>
                      {props?.viewData?.apiTokenPassword
                        ? props?.viewData?.apiTokenPassword
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td>Api Pin</td>
                    <td>
                      {props?.viewData?.apiPin
                        ? props?.viewData?.apiPin
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td>CLECID</td>
                    <td>
                      {props?.viewData?.clecid
                        ? props?.viewData?.clecid
                        : 'N/A'}
                    </td>
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
                <button className={scStyle.downloadBtn} onClick={downloadClick}>
                  <i class='fa fa-download' download></i> Download
                </button>
                <button onClick={handlePrint} className={scStyle.printBtn}>
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

export default ViewServiceCarrier;

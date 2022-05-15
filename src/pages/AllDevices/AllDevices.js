import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';
import adStyle from './AllDevices.module.css';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import tableIcons from '../../components/IconProvider/IconProvider';

const AllDevices = () => {
  const { token } = useToken();
  // console.log(token);

  const [deviceType, setDeviceType] = useState('');
  const deviceTypeRef = useRef('');

  const imei1Ref = useRef('');
  const imei2Ref = useRef('');
  const [imei1, setimei1] = useState('');
  const [imei2, setimei2] = useState('');

  const snRef = useRef('');
  const [sn, setSN] = useState('');
  const vendorRef = useRef('');
  const [vendor, setVendor] = useState('');
  const batchNumRef = useRef('');
  const [batchNum, setBatchNum] = useState('');
  const distributorRef = useRef('');
  const [distributor, setDistributor] = useState('');
  const agentRef = useRef('');
  const [agent, setAgent] = useState('');

  const [model, setModel] = useState('');
  const modelRef = useRef('');
  const [deviceOrderNum, setDeviceOrderNum] = useState('');
  const deviceOrderNumRef = useRef('');
  const [color, setColor] = useState('');
  const colorRef = useRef('');

  const [fccStatus, setFccStatus] = useState('');
  const fccStatusRef = useRef('');
  const [fccName, setFccName] = useState('');
  const fccNameRef = useRef('');
  const [fccAppDate, setFccAppDate] = useState('');
  const fccAppDateRef = useRef('');

  const urlPre = process.env.REACT_APP_ROOT_URL;

  const url = `${urlPre}/simCard`;

  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    getSimCards();
  }, []);

  const getSimCards = () => {
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.data);
        setDisplayData(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: `${err.message}`,
        });
      });
  };

  const getDeviceType = (e) => {
    setDeviceType(e.target.value);
  };

  const distributorChange = (e) => {
    setDistributor(e.target.value);
  };

  const agentChange = (e) => {
    setAgent(e.target.value);
  };

  const snChange = (e) => {
    setSN(e.target.value);
  };
  const vendorChange = (e) => {
    setVendor(e.target.value);
  };

  const batchNumChange = (e) => {
    setBatchNum(e.target.value);
  };

  const imei1Change = (e) => {
    setimei1(e.target.value);
  };
  const imei2Change = (e) => {
    setimei2(e.target.value);
  };

  const modelChange = (e) => {
    setModel(e.target.value);
  };

  const deviceOrderNumChange = (e) => {
    setDeviceOrderNum(e.target.value);
  };

  const colorChange = (e) => {
    setColor(e.target.value);
  };

  const fccStatusChange = (e) => {
    setFccStatus(e.target.value);
  };

  const fccNameChange = (e) => {
    setFccName(e.target.value);
  };

  const fccAppDateChange = (e) => {
    setFccAppDate(e.target.value);
  };

  const handleBulkSearch = () => {
    const matchedData = data.filter(
      (mData) =>
        (imei1 === '' ||
          imei2 === '' ||
          imei1 === mData.created_date ||
          imei2 === mData.created_date) &&
        (batchNum === '' || mData.phone_plan === batchNum) &&
        (agent === '' || mData.agent === agent) &&
        (distributor === '' || mData.distributor === distributor) &&
        (vendor === '' || mData.vendor === vendor) &&
        (sn === '' || mData.sim_status === sn) &&
        (deviceType === '' || mData.deviceType === deviceType)
    );
    setDisplayData(matchedData);
  };

  // for reset button
  const resetSearchFields = () => {
    setDeviceType('');
    deviceTypeRef.current.value = '';
    setAgent('');
    agentRef.current.value = '';
    setDistributor('');
    distributorRef.current.value = '';
    setimei1('');
    imei1Ref.current.value = '';
    setimei2('');
    imei2Ref.current.value = '';
    setVendor('');
    vendorRef.current.value = '';
    setBatchNum('');
    batchNumRef.current.value = '';
    setSN('');
    snRef.current.value = '';
  };

  return (
    <section>
      {/* the initials */}
      <div className=' row d-flex justify-content-between align-items-center my-md-2'>
        <h3 className='col-12 col-md-4 fw-bold my-2 ms-2'>All Devices</h3>
        <div className='col-12 col-md-6 d-flex justify-content-end me-lg-3'>
          <button className='btn btn-outline-secondary mx-2'>
            Add A New Device
          </button>
          <button className='btn btn-outline-secondary'>Import Devices</button>
        </div>
      </div>

      {/* search forms starts */}
      <div className={`${adStyle.searchContainer}`}>
        <p className={`${adStyle.searchText}`}>Search By:</p>
        {/* form input  */}
        <div class='form-row row d-flex flex-row justify-content-center align-items-center'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3 col-lg-3'>
            <label className='me-1' htmlFor='deviceType'>
              Device Type
            </label>
            <select
              type='text'
              className='form-select'
              id='deviceType'
              ref={deviceTypeRef}
              onChange={getDeviceType}
            >
              <option hidden disabled selected value>
                Select Type
              </option>
              <option value='active'>Type 1</option>
              <option value='active 2'>Type 2</option>
              <option value='Blank'>Blank</option>
            </select>
          </div>
          <div class='col-12 col-md-6 col-lg-5'>
            <div className='row'>
              {/* <div className='col-md-3'>
          <span>Created Date</span>
        </div> */}
              <div className='from-group col-md-7 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='imei1' className='me-1'>
                  IMEI #1
                </label>
                <input
                  // ref={createdDateFromRef}
                  type='text'
                  className='form-control'
                  id='imei1'
                  ref={imei1Ref}
                  onChange={imei1Change}
                />
              </div>
              <div className='from-group col-12 col-md-5 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='imei2' className='me-1'>
                  IMEI #2
                </label>
                <input
                  // ref={createdDateToRef}
                  type='text'
                  className='form-control'
                  id='imei2'
                  ref={imei2Ref}
                  onChange={imei2Change}
                />
              </div>
            </div>
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3 col-lg-4'>
            <label className='me-1' htmlFor='sn'>
              S/N
            </label>
            <input
              // ref={snRef}
              type='text'
              class='form-control'
              id='sn'
              ref={snRef}
              onChange={snChange}
            />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='vendor'>
              Vendor
            </label>
            <select
              type='text'
              class='form-select'
              id='vendor'
              ref={vendorRef}
              onChange={vendorChange}
            >
              <option hidden disabled selected value>
                Select a vendor
              </option>
              <option value='321Com'>321com</option>
              <option value='PWG'>PWG</option>
            </select>
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='distributor'>
              Distributor
            </label>
            <input
              type='text'
              class='form-control'
              id='distributor'
              ref={distributorRef}
              onChange={distributorChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='agent'>
              Agent
            </label>
            <input
              id='agent'
              class='form-control'
              ref={agentRef}
              onChange={agentChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='batchNum'>
              Batch Number
            </label>
            <input
              type='text'
              class='form-control'
              id='batchNum'
              ref={batchNumRef}
              onChange={batchNumChange}
            />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='model'>
              Model
            </label>
            <input
              type='text'
              class='form-control'
              id='model'
              ref={modelRef}
              onChange={modelChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-6'>
            <label className='me-1' for='deviceOrderNum'>
              Device Order Number
            </label>
            <input
              type='text'
              class='form-control'
              id='deviceOrderNum'
              ref={deviceOrderNumRef}
              onChange={deviceOrderNumChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='color'>
              Color
            </label>
            <input
              id='color'
              class='form-control'
              ref={colorRef}
              onChange={colorChange}
            />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='fccStatus'>
              FCC Status
            </label>
            <input
              type='text'
              class='form-control'
              id='fccStatus'
              ref={fccStatusRef}
              onChange={fccStatusChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-6'>
            <label className='me-1' for='fccAppDate'>
              FCC Approval Date
            </label>
            <input
              type='date'
              id='fccAppDate'
              class='form-control'
              ref={fccAppDateRef}
              onChange={fccAppDateChange}
            />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-12 col-md-3'>
            <label className='me-1' for='fccName'>
              FCC Name
            </label>
            <input
              type='text'
              class='form-control'
              id='fccName'
              ref={fccNameRef}
              onChange={fccNameChange}
            />
          </div>
        </div>
      </div>
      <div className='my-2 ms-3'>
        <button onClick={handleBulkSearch} className='btn btn-success mb-1'>
          Search
        </button>
        <button
          className='btn btn-success mx-md-3 ms-1 mb-1'
          onClick={resetSearchFields}
        >
          Reset Search Fields
        </button>
      </div>
      {/* table about AllDevices */}
      <div className='mui-table my-3'>
        <MaterialTable
          icons={tableIcons}
          title=''
          columns={[
            { title: 'ID', field: 'id', sorting: false },
            {
              title: 'SSID',
              field: 'SSID',
              sorting: false,
              render: (row) => (
                <Link to={`/dashboard/simCardDetails/${row._id}`}>
                  {row.SSID}
                </Link>
              ),
            },
            { title: 'PUK 1', field: 'PUK1', sorting: false },
            { title: 'Created Date', field: 'createdDate', type: 'date' },
            { title: 'Sim Status', field: 'sn', sorting: false },
            { title: 'Status Date', field: 'statusDate', type: 'date' },
            {
              title: 'Service Carrier', //replaced with vendor
              field: 'company',
              sorting: false,
              render: (row) => row.serviceCarrier.name,
            },
            {
              title: 'Distributor',
              field: 'company',
              sorting: false,
              render: (row) =>
                row?.vendor?.company ? row.vendor.company : 'NA',
            },
            {
              title: 'Agent',
              field: 'agent',
              sorting: false,
              render: (row) => (row?.agent ? row.agent : 'NA'),
            },
            {
              title: 'Phone Plan',
              field: 'phone_plan',
              sorting: false,
              render: (row) => (row?.phonePlan ? row.phonePlan : 'NA'),
            },
            {
              title: 'Customer ID',
              field: 'customer_id',
              type: 'numeric',
              sorting: false,
              render: (row) => (row?.customerID ? row.customerID : 'NA'),
            },
          ]}
          data={displayData}
          options={{
            selection: true,
            exportButton: true,
            exportAllData: true,
            shorting: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 50, 100, 500, 1000],
            pageSize: 5,
            paginationType: 'stepped',
            paginationPosition: 'bottom',
            showTextRowsSelected: false,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: '#f5f5f5' } : null,
            headerStyle: {
              background: '#445363',
              color: 'white',
              //   borderRight: '1px solid #212F74',
            },
            // cellStyle: { borderRight: '1px solid #212F74' },
          }}
          actions={[
            {
              icon: () => (
                <button
                  style={{
                    fontSize: '1rem',
                    borderRadius: '2px',
                    backgroundColor: '#dddddd',
                    color: 'black',
                    border: 'none',
                    padding: '2px',
                  }}
                >
                  Assign to Distributor
                </button>
              ),
              tooltip: 'Click to assign item to distributor',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
            {
              icon: () => (
                <button
                  style={{
                    fontSize: '1rem',
                    borderRadius: '2px',
                    backgroundColor: '#dddddd',
                    color: 'black',
                    border: 'none',
                    padding: '2px',
                  }}
                >
                  Assign Batch Number
                </button>
              ),
              tooltip: 'Click to assign batch number',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default AllDevices;

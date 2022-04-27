import React, { useState, useEffect, useRef } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import allsimCardStyles from './AllSimCard.module.css';
import tableIcons from '../../components/IconProvider/IconProvider';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';

const AllSimCards = () => {
  const { token } = useToken();
  // console.log(token);

  const [ssid, setSSID] = useState('');
  const ssidRef = useRef('');

  const createdFromRef = useRef('');
  const createdToRef = useRef('');
  const [createdDateFrom, setCreatedDateFrom] = useState('');
  const [createdDateTo, setCreatedDateTo] = useState('');

  const simStatusRef = useRef('');
  const [simStatus, setSimStatus] = useState('');
  const vendorRef = useRef('');
  const [vendor, setVendor] = useState('');
  const phonePlanRef = useRef('');
  const [phonePlan, setPhonePlan] = useState('');
  const distributorRef = useRef('');
  const [distributor, setDistributor] = useState('');
  const agentRef = useRef('');
  const [agent, setAgent] = useState('');

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

  const getSSID = (e) => {
    setSSID(e.target.value);
  };

  const distributorChange = (e) => {
    setDistributor(e.target.value);
  };

  const agentChange = (e) => {
    setAgent(e.target.value);
  };

  const simStatusChange = (e) => {
    setSimStatus(e.target.value);
  };
  const vendorChange = (e) => {
    setVendor(e.target.value);
  };

  const phonePlanChange = (e) => {
    setPhonePlan(e.target.value);
  };

  const createdDateFromChange = (e) => {
    setCreatedDateFrom(e.target.value);
  };
  const createdDateToChange = (e) => {
    setCreatedDateTo(e.target.value);
  };

  const handleBulkSearch = () => {
    const matchedData = data.filter(
      (mData) =>
        (createdDateFrom === '' ||
          createdDateTo === '' ||
          (new Date(createdDateFrom) < new Date(mData.created_date) &&
            new Date(createdDateTo) > new Date(mData.created_date)) ||
          new Date(createdDateFrom).toDateString() ===
            new Date(mData.created_date).toDateString() ||
          new Date(createdDateTo).toDateString() ===
            new Date(mData.created_date).toDateString()) &&
        (phonePlan === '' || mData.phone_plan === phonePlan) &&
        (agent === '' || mData.agent === agent) &&
        (distributor === '' || mData.distributor === distributor) &&
        (vendor === '' || mData.vendor === vendor) &&
        (simStatus === '' || mData.sim_status === simStatus) &&
        (ssid === '' || mData.ssid === ssid)
    );
    setDisplayData(matchedData);
  };

  // for reset button
  const resetSearchFields = () => {
    setSSID('');
    ssidRef.current.value = '';
    setAgent('');
    agentRef.current.value = '';
    setDistributor('');
    distributorRef.current.value = '';
    setCreatedDateFrom('');
    createdFromRef.current.value = '';
    setCreatedDateTo('');
    createdToRef.current.value = '';
    setVendor('');
    vendorRef.current.value = '';
    setPhonePlan('');
    phonePlanRef.current.value = '';
    setSimStatus('');
    simStatusRef.current.value = '';
  };

  // let newDisplayData = [];
  // displayData.map((results) => {
  //   results.forEach((data) => {
  //     newDisplayData.push({
  //       PUK1: data.PUK1,
  //       SSID: data.SSID,
  //     });
  //   });
  // });

  // console.log('new', newDisplayData);

  return (
    <section>
      <h3 className='fw-bold text-center my-2'>All Sim Cards</h3>

      {/* search forms starts */}
      <div className={`${allsimCardStyles.searchContainer}`}>
        <span>Search By:</span>
        {/* form input  */}
        <div class='form-row row d-flex flex-row justify-content-center align-items-center'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-3'>
            <label className='me-1' htmlFor='ssid'>
              SSID
            </label>
            <input
              type='text'
              className='form-control'
              id='ssid'
              placeholder='SSID'
              ref={ssidRef}
              onChange={getSSID}
            />
          </div>
          <div class='col-md-6 col-lg-5'>
            <div className='row'>
              {/* <div className='col-md-3'>
                <span>Created Date</span>
              </div> */}
              <div className='from-group col-md-7 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='created_date_form' className='me-1'>
                  Created Date from
                </label>
                <input
                  // ref={createdDateFromRef}
                  type='date'
                  className='form-control'
                  id='created_date_form'
                  ref={createdFromRef}
                  onChange={createdDateFromChange}
                />
              </div>
              <div className='from-group col-md-5 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='to' className='me-1'>
                  to
                </label>
                <input
                  // ref={createdDateToRef}
                  type='date'
                  className='form-control'
                  id='to'
                  ref={createdToRef}
                  onChange={createdDateToChange}
                />
              </div>
            </div>
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-4'>
            <label className='me-1' htmlFor='simStatus'>
              Sim Status
            </label>
            <select
              // ref={simStatusRef}
              type='text'
              class='form-select'
              id='simStatus'
              placeholder='SIM Status'
              ref={simStatusRef}
              onChange={simStatusChange}
            >
              <option hidden disabled selected value>
                Select Status
              </option>
              <option value='active'>Active</option>
              <option value='active'>Inactive</option>
              <option value='Blank'>Blank</option>
            </select>
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
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
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
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
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
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
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='phonePlan'>
              Phone Plan
            </label>
            <select
              type='text'
              class='form-select'
              id='phonePlan'
              ref={phonePlanRef}
              onChange={phonePlanChange}
            >
              {vendor === '321Com' && (
                <>
                  <option hidden disabled selected value>
                    Select a Phone Plan
                  </option>
                  <option value='613'>613</option>
                  <option value='614'>614</option>
                  <option value='615'>615</option>
                  <option value='616'>616</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className='my-2 ms-3'>
        <button onClick={handleBulkSearch} className='btn btn-success'>
          Search
        </button>
        <button className='btn btn-success mx-3' onClick={resetSearchFields}>
          Reset Search Fields
        </button>
      </div>
      {/* <div className={`${allsimCardStyles.singleInput}`}>
        <input
          type='text'
          className='form-control'
          placeholder='Advance Search'
        />
      </div> */}
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
            { title: 'Sim Status', field: 'simStatus', sorting: false },
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
            pageSizeOptions: [2, 5, 10, 50, 100, 500, 1000, 2000],
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

export default AllSimCards;

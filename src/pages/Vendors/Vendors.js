import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import useToken from '../../hooks/useToken';
import vendorStyles from './Vendors.module.css';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import tableIcons from '../../components/IconProvider/IconProvider';

const Vendors = () => {
  // token
  const { token } = useToken();
  //url
  const urlPre = process.env.REACT_APP_ROOT_URL;
  const url = `${urlPre}/vendor`;

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors();
  }, []);

  const getVendors = () => {
    fetch(`${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setVendors(data.data))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'error on device data fetching',
        });
      });
  };

  return (
    <div className='mt-4 mb-2'>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2>Vendor</h2>
        <button className='btn btn-outline-secondary'>Add A New Vendor</button>
      </div>
      <div className='my-1'>{/* table of Vendors */}</div>
    </div>
  );
};

export default Vendors;

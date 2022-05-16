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

  return (
    <div className='my-1'>
      <h2>VEndor</h2>
    </div>
  );
};

export default Vendors;

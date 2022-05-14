import React, { useRef, useState } from 'react';
import useToken from '../../hooks/useToken';
import simOpStyles from './SimCardOperations.module.css';

const SimCardOperations = () => {
  const { token } = useToken();
  //   console.log(token);
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

  return (
    <div>
      <h1 className={`${simOpStyles.h1}`}>Sim Card Operations</h1>
    </div>
  );
};

export default SimCardOperations;

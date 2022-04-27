import React, { useEffect, useState } from 'react';
import SimCard from './SimCard/SimCard';
import PhoneCarrierOperations from './PhoneCarrierOperations/PhoneCarrierOperations';
import AcpOperation from './AcpOperation/AcpOperation';
import Returns from './Returns/Returns';
import Notes from './Notes/Notes';
import SimOperationsLog from './SimOperationsLog/SimOperationsLog';
import useToken from '../../hooks/useToken';

const SimCardDetail = (props) => {
  //url pre
  const preUrl = process.env.REACT_APP_ROOT_URL;

  const { token } = useToken();

  const url = `${preUrl}/simCard`;

  // getting sim info
  const [simInfo, setSimInfo] = useState({});

  const _id = props.simId;

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => setSimInfo(data.data));
  }, []);
  console.log(simInfo);
  return (
    <div className='tables'>
      <SimCard simInfo={simInfo}></SimCard>
      <PhoneCarrierOperations></PhoneCarrierOperations>
      <AcpOperation></AcpOperation>
      <Returns></Returns>
      <Notes></Notes>
      <SimOperationsLog></SimOperationsLog>
    </div>
  );
};

export default SimCardDetail;

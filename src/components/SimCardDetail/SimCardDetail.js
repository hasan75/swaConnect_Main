import React from 'react';
import SimCard from './SimCard/SimCard';
import PhoneCarrierOperations from './PhoneCarrierOperations/PhoneCarrierOperations';
import AcpOperation from './AcpOperation/AcpOperation';

const SimCardDetail = (props) => {
  const { simId } = props;
  return (
    <div className='tables'>
      <SimCard></SimCard>
      <PhoneCarrierOperations></PhoneCarrierOperations>
      <AcpOperation></AcpOperation>
    </div>
  );
};

export default SimCardDetail;

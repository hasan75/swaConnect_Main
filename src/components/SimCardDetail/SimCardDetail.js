import React from 'react';
import SimCard from './SimCard/SimCard';
import PhoneCarrierOperations from './PhoneCarrierOperations/PhoneCarrierOperations';
import AcpOperation from './AcpOperation/AcpOperation';
import Returns from './Returns/Returns';

const SimCardDetail = (props) => {
  const { simId } = props;
  return (
    <div className='tables'>
      <SimCard></SimCard>
      <PhoneCarrierOperations></PhoneCarrierOperations>
      <AcpOperation></AcpOperation>
      <Returns></Returns>
    </div>
  );
};

export default SimCardDetail;

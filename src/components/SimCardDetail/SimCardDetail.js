import React from 'react';
import SimCard from './SimCard/SimCard';
import PhoneCarrierOperations from './PhoneCarrierOperations/PhoneCarrierOperations';

const SimCardDetail = (props) => {
  const { simId } = props;
  return (
    <div className='tables'>
      <SimCard></SimCard>
      <PhoneCarrierOperations></PhoneCarrierOperations>
    </div>
  );
};

export default SimCardDetail;

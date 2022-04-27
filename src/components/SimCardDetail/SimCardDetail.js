import React from 'react';
import SimCard from './SimCard/SimCard';

const SimCardDetail = (props) => {
  const { simId } = props;
  return (
    <div className='tables'>
      <SimCard></SimCard>
    </div>
  );
};

export default SimCardDetail;

import React from 'react';
import { useParams } from 'react-router-dom';

const SimCardDetails = () => {
  const { simId } = useParams();
  return (
    <div>
      <h3>THe Details of sim card {simId}</h3>
    </div>
  );
};

export default SimCardDetails;

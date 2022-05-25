import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SimCardDetail from '../../components/SimCardDetail/SimCardDetail';
import ServiceCarrierOperations from './ServiceCarrierOperations/ServiceCarrierOperations';
import simDetailStyles from './SimCardDetails.module.css';

const SimCardDetails = () => {
  const { simId } = useParams();

  const [toggleDivision, setToggleDivision] = useState(1);

  const toogleDivisionTab = (index) => {
    setToggleDivision(index);
  };

  return (
    <div>
      <div
        className={` ${simDetailStyles.addSimSetting} border-right py-3 my-4`}
      >
        {/* profile info tabs  */}
        <div className={` ${simDetailStyles.container} mx-2`}>
          <div className={`${simDetailStyles.blocTabs}`}>
            <button
              className={
                toggleDivision === 1
                  ? [
                      simDetailStyles['tabs'],
                      simDetailStyles['activeTabs'],
                    ].join(' ')
                  : simDetailStyles['tabs']
              }
              onClick={() => toogleDivisionTab(1)}
            >
              Sim Card Details Tab
            </button>
            <button
              className={
                toggleDivision === 2
                  ? [
                      simDetailStyles['tabs'],
                      simDetailStyles['activeTabs'],
                    ].join(' ')
                  : simDetailStyles['tabs']
              }
              onClick={() => toogleDivisionTab(2)}
            >
              Service Carrier Operation Tab
            </button>
          </div>
          <div className={`${simDetailStyles.contentTabs}`}>
            <div
              className={
                toggleDivision === 1
                  ? [
                      simDetailStyles['contentForm'],
                      simDetailStyles['activeContentForm'],
                    ].join(' ')
                  : simDetailStyles['contentForm']
              }
            >
              <div className='m-2'>
                <SimCardDetail simId={simId}></SimCardDetail>
              </div>
            </div>
            <div
              className={
                toggleDivision === 2
                  ? [
                      simDetailStyles['contentForm'],
                      simDetailStyles['activeContentForm'],
                    ].join(' ')
                  : simDetailStyles['contentForm']
              }
            >
              <ServiceCarrierOperations
                simId={simId}
              ></ServiceCarrierOperations>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimCardDetails;

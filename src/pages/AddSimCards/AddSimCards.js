import React, { useState } from 'react';
import ImportSim from '../../components/ImportSim/ImportSim';
import addSimStyles from './AddSimCards.module.css';

const AddSimCards = () => {
  const [toggleDivision, setToggleDivision] = useState(1);

  const toogleDivisionTab = (index) => {
    setToggleDivision(index);
  };
  return (
    <div>
      <div className={` ${addSimStyles.addSimSetting} border-right py-3`}>
        <h4 className='text-right mb-3 ms-2'>Add Sim Cards</h4>
        {/* profile info tabs  */}
        <div className={` ${addSimStyles.container} m-2`}>
          <div className={`${addSimStyles.blocTabs}`}>
            <button
              className={
                toggleDivision === 1
                  ? [addSimStyles['tabs'], addSimStyles['activeTabs']].join(' ')
                  : addSimStyles['tabs']
              }
              onClick={() => toogleDivisionTab(1)}
            >
              Add A New Sim Card
            </button>
            <button
              className={
                toggleDivision === 2
                  ? [addSimStyles['tabs'], addSimStyles['activeTabs']].join(' ')
                  : addSimStyles['tabs']
              }
              onClick={() => toogleDivisionTab(2)}
            >
              Import Sim Card
            </button>
          </div>
          <div className={`${addSimStyles.contentTabs}`}>
            <div
              className={
                toggleDivision === 1
                  ? [
                      addSimStyles['contentForm'],
                      addSimStyles['activeContentForm'],
                    ].join(' ')
                  : addSimStyles['contentForm']
              }
            >
              <h1>Kuddus</h1>
            </div>
            <div
              className={
                toggleDivision === 2
                  ? [
                      addSimStyles['contentForm'],
                      addSimStyles['activeContentForm'],
                    ].join(' ')
                  : addSimStyles['contentForm']
              }
            >
              <ImportSim></ImportSim>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSimCards;

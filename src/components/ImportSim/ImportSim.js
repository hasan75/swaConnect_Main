import React from 'react';
import './ImportSim.css';

const ImportSim = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <form method='post' action='#'>
              <div class='form-group files color'>
                <label className='mb-2'>Upload Your File </label>
                <input type='file' class='form-control' multiple='' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportSim;

import React, { useState, useRef } from 'react'
import avfStyle from './Styles/ACPVerForm.module.css'
function ACPVerForm() {
  const [active, setActive] = useState(true);
  const selectRef = useRef('');
  // the below useRef is used for alternative id type 
  const disabledRef = useRef('');

  const selectChange = () => {
    const selectValue = selectRef.current.value;
    if (selectValue === 'No') {
      setActive(true);
      // alternative id type is disabled 
      // disabledRef.current.setAttribute("disabled", true)
    }
    else {
      setActive(false)
      // alternative id type is enablerd
      disabledRef.current.removeAttribute("disabled", true)
    }
  }
  // Other Gov ID 
  const [visible, setVisible] = useState(false)
  // const disabledRef = useRef('');
  const govidChnage = () => {
    const selectValue2 = disabledRef.current.value;
    if (selectValue2 === 'Other Gov ID') {
      setVisible(true);
    }
    else {
      setVisible(false)
    }
  }
  return (
    <form action="">
      <div className={avfStyle.container}>
        <header>All Devices</header>
        <p class="px-5 fs-3">Personal Data</p>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Middle Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Middle Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Suffix (Optional)</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Suffix (Optional)" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
              <input type="date" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        </div>
        {/* <p class="px-5 fs-3">SIM Data</p> */}
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">SSN (Last 4 Digits)</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="SSN " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Tribal ID (If Any)</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tribal ID " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID</label>
              <select onChange={selectChange} class="form-select" aria-label="Default select example" ref={selectRef}>
                <option selected value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Type</label>
              <select onChange={govidChnage} class="form-select" aria-label="Select Tabs" ref={disabledRef}>
                <option selected>Select Type</option>
                <option value="Driver Licence">Driver Licence</option>
                <option value="Military ID">Military ID</option>
                <option value="Passport">Passport</option>
                <option value="Taxpayer ID">Taxpayer ID</option>
                <option value="Other Gov ID">Other Gov ID</option>
              </select>
            </div>
          </div>
        </div>
        {visible &&
          <div class="input-group mb-3 px-5">
            <span class="input-group-text" id="inputGroup-sizing-default">Other Gov ID</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        }
        {/* START  */}
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Screenshot Page 01</label>
              <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Screenshot Page 02</label>
              <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Email</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Email" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Address" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact State</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Zip Code</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ZIP" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Urben code </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Urben code" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> Temporary Address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Address" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact State</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" />
            </div>
          </div>
        </div>
        <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
          <label for="exampleFormControlInput1" class="form-label">Device Type</label>
          <select class="form-select" aria-label="Default select example" >
            <option selected>Select Device</option>
            <option value="1">Tablet</option>
            <option value="2">Chromebook</option>
            <option value="3">Hootspot</option>
            <option value="4">Other</option>
          </select>
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">FCC Approval Status</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="FCC Approval Status" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">FCC Approval Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="FCC Approval Name" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">FCC Approval Date</label>
          <input type="date" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">IMEI 1</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 1" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">IMEI 2</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 2" />
        </div>  <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">IMEI 3</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 3" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Model</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Model" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Serial Number</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Serial Number" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Color</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Color" />
        </div>
        <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
          <label for="exampleFormControlInput1" class="form-label">Network</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Network</option>
            <option value="1">3G</option>
            <option value="2">4G</option>
            <option value="3">3G/4G</option>
          </select>
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Agent</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Agent" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Vendor</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Vendor" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Distributor</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Distributor" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Device Order Number</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Device Order Number" />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="formFileMultiple" class="form-label">Upload Pictures</label>
          {/* <label for="img">Select image:</label> */}
          <input class="form-control" type="file" id="img" name="img" multiple />
        </div>
        <div style={{ padding: '0px 50px' }} class="mb-3">
          <label for="formFileMultiple" class="form-label">Upload Files</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <div>
        </div>
        <div style={{ padding: '0px 50px', marginTop: '20px' }} class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label style={{ padding: '10px 0px 0px 60px' }} for="floatingTextarea">Notes</label>
        </div>
      </div>
      <div style={{ marginTop: '30px' }} class="col-12 text-center">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  )
}
export default ACPVerForm
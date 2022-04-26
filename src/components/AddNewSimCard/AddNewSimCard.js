import React, { useState, useRef, useEffect } from 'react';
import avfStyle from './Styles/ACPVerForm.module.css';
import { useForm } from 'react-hook-form';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';

function AddNewSimCard() {
  const [active, setActive] = useState(true);
  const [alternativeSelect, setAlternativeSelect] = useState(false);
  const selectRef = useRef('');
  const [serviceCarrier, setServiceCarrier] = useState([]);
  // the below useRef is used for alternative id type
  const disabledRef = useRef('');
  const bqpselectRef = useRef('');
  const selectChange = () => {
    const selectValue = selectRef.current.value;
    console.log(disabledRef.current.value);
    // console.log(active)
    if (selectValue === 'No') {
      // disabledRef.current.removeAttribute('disabled', true)
      // alternative id type is disabled
      // disabledRef.current.setAttribute("disabled", true)
      setActive(true);
      // disabledRef.current.addAttribute("disabled", true)
      disabledRef.current.value = 'select';
      govidChnage();
    } else {
      setActive(false);
      // alternative id type is enablerd
      // disabledRef.current.removeAttribute("disabled", true)
    }
    // console.log(active);
  };
  // Other Gov ID
  const [visible, setVisible] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);

  // const disabledRef = useRef('');
  const govidChnage = () => {
    if (disabledRef.current.value === 'select') {
      setVisible0(true);
    } else {
      setVisible0(false);
    }

    const selectValue2 = disabledRef.current.value;
    if (selectValue2 === 'Other Gov ID') {
      setVisible(true);
    } else {
      setVisible(false);
    }
    const selectValue3 = disabledRef.current.value;
    if (selectValue3 === 'Driver Licence') {
      setVisible3(true);
    } else {
      setVisible3(false);
    }
    const selectValue4 = disabledRef.current.value;
    if (selectValue4 === 'Military ID') {
      setVisible4(true);
    } else {
      setVisible4(false);
    }
    const selectValue5 = disabledRef.current.value;
    if (selectValue5 === 'Passport') {
      setVisible5(true);
    } else {
      setVisible5(false);
    }
    const selectValue6 = disabledRef.current.value;
    if (selectValue6 === 'Taxpayer ID') {
      setVisible6(true);
    } else {
      setVisible6(false);
    }
  };
  // DRIVING LICENCE
  // const disabledRef = useRef('');
  // END
  // BQP VISIBLE
  const [visibe1, setVisible1] = useState(false);
  const bqpRef = useRef('');
  const bqpChange = () => {
    const bqpValue = bqpRef.current.value;
    if (bqpValue === 'Yes') {
      setVisible1(true);
    } else {
      setVisible1(false);
    }
  };

  // BQP ALTER VISIBLE
  const bqpselectChange = () => {
    const bqpselectValue = bqpselectRef.current.value;
    if (bqpselectValue === 'No') {
    } else {
      bqpalterRef.current.removeAttribute('disabled', true);
    }
  };
  const [visible2, setVisible2] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);

  // code by antu
  const [visible0, setVisible0] = useState(false);
  // code by antu

  const bqpalterRef = useRef('');
  const bqpalterChange = () => {
    const bqpalterValue = bqpalterRef.current.value;

    console.log(disabledRef.current.value);

    if (disabledRef.current.value === 'select') {
      setVisible2(false);
      setVisible7(false);
      setVisible8(false);
      setVisible9(false);
      setVisible10(false);
      setVisible0(true);
    }

    if (bqpalterValue === 'Other Gov ID') {
      setVisible2(true);
    } else {
      setVisible2(false);
    }
    const selectValue7 = bqpalterRef.current.value;
    if (selectValue7 === 'Driver Licence') {
      setVisible7(true);
    } else {
      setVisible7(false);
    }
    const selectValue8 = bqpalterRef.current.value;
    if (selectValue8 === 'Military ID') {
      setVisible8(true);
    } else {
      setVisible8(false);
    }
    const selectValue9 = bqpalterRef.current.value;
    if (selectValue9 === 'Passport') {
      setVisible9(true);
    } else {
      setVisible9(false);
    }
    const selectValue10 = bqpalterRef.current.value;
    if (selectValue10 === 'Taxpayer ID') {
      setVisible10(true);
    } else {
      setVisible10(false);
    }
  };
  // SHOW SUBSCRIBER DATA

  const [plusBtn, setPlusBtn] = useState(true);
  const [isShow, setIsshow] = useState(false);
  const handleClick = () => {
    setIsshow(!isShow);
    setPlusBtn(!plusBtn);
  };
  // END
  const { token } = useToken();
  const { register, handleSubmit, reset } = useForm();

  //process.env file used

  const url = process.env.REACT_APP_ROOT_URL;

  const onSubmit = (data) => {
    data.userName = 'hasanjab14';
    data.vendorId = '626725302339ce037aa6ef25';
    data.orderNumber = '626727dcc400516e0d7246e8';
    const preData = {
      simAddingMethod: 'manually',
      simCardData: data,
    };
    console.log(preData);

    fetch(`${url}/simcard/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...preData }),
    })
      .then((res) => {
        res.json();
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire('Sim Added Successfully!', '', 'success');
        }
      })
      .then((data) => {
        reset();
      });
  };

  useEffect(() => {
    fetch(`${url}/servicecarrier`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setServiceCarrier(data.data))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          tittle: 'Sorry',
          text: 'Fetching went Wrong',
        });
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={avfStyle.container}>
        {/* SIM CARD DATA START  */}
        <header class='bg-primary'>SIM Card Data</header>
        <div class='mb-5 m-3 p-3 border border-primary'>
          <div class='row px-5'>
            <div class='col-12 col-md-6 col-lg-4'>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  SSID
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleFormControlInput1'
                  placeholder='SSID'
                  {...register('SSID', { required: true })}
                />
              </div>
            </div>
            <div class='col-12 col-md-6 col-lg-4'>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  PUK1
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleFormControlInput1'
                  placeholder='PUK1'
                  {...register('PUK1', { required: true })}
                />
              </div>
            </div>
            <div class='col-12 col-md-6 col-lg-4'>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  Service Carrier
                </label>
                <select
                  class='form-select'
                  aria-label='Default select example'
                  {...register('serviceCarrier', { required: true })}
                >
                  <option selected disabled hidden>
                    Select
                  </option>
                  {serviceCarrier.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
                  {/* <option value='321Com'>321</option>
                  <option value='PWG'>PWG</option> */}
                </select>
              </div>
            </div>
          </div>
          <div class='row px-5'>
            <div class='col-12 col-md-6  '>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  Compatibility
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Compatibility'
                  {...register('compatibility', { required: true })}
                />
              </div>
            </div>
            <div class='col-12 col-md-6  '>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  Physical Status
                </label>
                <select
                  class='form-select'
                  aria-label='Default select example'
                  {...register('physicalStatus', { required: true })}
                >
                  <option selected hidden disabled>
                    Select
                  </option>
                  <option value='Good'>Good</option>
                  <option value='Bad'>Bad</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class=' m-3 '>
          <div class='d-flex mt-3'>
            <p class='fs-3 '>Add Subscriber</p>
            {plusBtn && (
              <i
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
                class='bi bi-plus-square fs-3 ms-3 '
              ></i>
            )}
            {!plusBtn && (
              <i
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
                class='bi bi-dash-square fs-3 ms-3 '
              ></i>
            )}
          </div>
        </div>
        {/* SIM CARD DATA END  */}
        {isShow && (
          <div class=' mb-5 m-3 p-3 border border-primary'>
            <p class='px-5 fs-3'>Personal Data</p>
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='First Name'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Middle Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Middle Name'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Suffix (Optional)
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Suffix (Optional)'
                  />
                </div>
              </div>
            </div>
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-6'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Email'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-6'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Date Of Birth
                  </label>
                  <input
                    type='date'
                    class='form-control'
                    id='exampleFormControlInput1'
                  />
                </div>
              </div>
            </div>
            {/* <p class="px-5 fs-3">SIM Data</p> */}
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    SSN (Last 4 Digits)
                  </label>
                  <input
                    type='number'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='SSN '
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Tribal ID (If Any)
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Tribal ID '
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Alternative ID
                  </label>
                  <select
                    onChange={selectChange}
                    class='form-select'
                    aria-label='Default select example'
                    ref={selectRef}
                  >
                    <option selected value='No'>
                      No
                    </option>
                    <option value='Yes'>Yes</option>
                  </select>
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Alternative ID Type
                  </label>
                  <select
                    onChange={govidChnage}
                    class='form-select'
                    aria-label='Select Tabs'
                    ref={disabledRef}
                    disabled={active}
                  >
                    <option hidden disabled selected>
                      Select Type
                    </option>
                    <option value='Driver Licence'>Driver Licence</option>
                    <option value='Military ID'>Military ID</option>
                    <option value='Passport'>Passport</option>
                    <option value='Taxpayer ID'>Taxpayer ID</option>
                    <option value='Other Gov ID'>Other Gov ID</option>
                  </select>
                </div>
              </div>
            </div>

            {visible && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Other ID Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' ID Name'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Other ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' ID'
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible3 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Driving Licence
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Driving Licence'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible4 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Military ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Military ID'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible5 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Passport
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Passport'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible6 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Taxpayer ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Taxpayer ID'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* START  */}

            <p class='px-5 fs-3'>Contact Data</p>
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact Number
                  </label>
                  <input
                    type='number'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Phone Number'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder=' Email'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact Address
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder=' Address'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact State
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='State'
                  />
                </div>
              </div>
            </div>
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact Zip Code
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Zip'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Contact Urben code{' '}
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Contact Urben code'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    {' '}
                    Temporary Address
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder=' Address'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Tribal Lands
                  </label>
                  <select
                    class='form-select'
                    aria-label='Default select example'
                  >
                    <option selected hidden disabled>
                      Select
                    </option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div class='row px-5'>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Mailing Address
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Address'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Mailing City{' '}
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='City'
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Mailing State
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder=' State '
                  />
                </div>
              </div>
              <div class='col-12 col-md-6 col-lg-3'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    {' '}
                    Mailing Zip Code{' '}
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder=' Zip'
                  />
                </div>
              </div>
            </div>
            <p class='px-5 fs-3'> Benefit Qualifying Person</p>
            <div class='row px-5'>
              <div class='col-12 col-md-12 col-lg-12'>
                <div class='mb-3'>
                  <label for='exampleFormControlInput1' class='form-label'>
                    Qualifying Through Dependent
                  </label>
                  <select
                    onChange={bqpChange}
                    class='form-select'
                    aria-label='Default select example'
                    ref={bqpRef}
                  >
                    <option selected hidden disabled>
                      Select
                    </option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </div>
              </div>
            </div>
            {visibe1 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        BQP First Name{' '}
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='First Name'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        BQP Middle Name{' '}
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' Middle Name '
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        {' '}
                        BQP Last Name{' '}
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' Last Name'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        {' '}
                        BQP Suffix
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Suffix'
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Date Of Birth{' '}
                      </label>
                      <input
                        type='date'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='First Name'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        BQP SSN (Last 4 Digits){' '}
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' 4 Digits '
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        {' '}
                        BQP Alternative ID{' '}
                      </label>
                      <select
                        onChange={bqpselectChange}
                        class='form-select'
                        aria-label='Default select example'
                        ref={bqpselectRef}
                      >
                        <option selected value='No'>
                          No
                        </option>
                        <option value='Yes'>Yes</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-3'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        {' '}
                        BQP Alternative ID Type
                      </label>
                      <select
                        onChange={bqpalterChange}
                        class='form-select'
                        aria-label='Select Tabs'
                        ref={bqpalterRef}
                        disabled
                      >
                        <option selected hidden disabled>
                          Select Type
                        </option>
                        <option value='Driver Licence'>Driver Licence</option>
                        <option value='Military ID'>Military ID</option>
                        <option value='Passport'>Passport</option>
                        <option value='Taxpayer ID'>Taxpayer ID</option>
                        <option value='Other Gov ID'>Other Gov ID</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible2 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Other ID Name
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' ID Name'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Other ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder=' ID'
                      />
                    </div>
                  </div>
                </div>
                <div class='row px-5'>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-6'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible7 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Driving Licence
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Driving Licence'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible8 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Military ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Military ID'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible9 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Passport
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Passport'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visible10 && (
              <div>
                <div class='row px-5'>
                  <div class='col-12 col-md-12 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Taxpayer ID
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Taxpayer ID'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 01
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                  <div class='col-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                      <label for='exampleFormControlInput1' class='form-label'>
                        Alternative ID Screenshot Page 02
                      </label>
                      <input
                        type='file'
                        class='form-control'
                        id='exampleFormControlInput1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p class='px-5 fs-3'>Eligible Program</p>
            <div class='row px-5'>
              <div class='col-12 col-md-6'>
                <div class='mb-3'>
                  <input class='form-check-input' type='checkbox' value='E1' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E1 (Medicaid)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E2' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E2 (Supplemental Nutrition Assistance Program (SNAP)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3'>
                  <input class='form-check-input' type='checkbox' value='E3' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E3 (Supplemental Security)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E4' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E4 (Federal Public Housing Assistance)
                  </label>
                </div>
              </div>{' '}
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  {/* <input class="form-check-input" type="checkbox" value="E5" id="flexCheckDefault" /> */}
                  <input class='form-check-input' type='checkbox' value='E5' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E8 (Bureau of Indian Affairs General Assistance)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E6' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E9 (Tribal Temporary Assistance for Needy Families (Tribal
                    TANF)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E7' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E10 (Food Distribution Program on Indian Reservations
                    (FDPIR)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E8' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E11 (Head Start )
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E9' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E13 (Eligibility Based on Income )
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E10' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E15 (Veterans Pension or Survivors Pension)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E11' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E50 (School Lunch/Breakfast Program)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E12' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E51 (Federal Pell Grant)
                  </label>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='mb-3 d-flex'>
                  <input class='form-check-input' type='checkbox' value='E13' />
                  <label class='form-check-label ms-1' for='flexCheckDefault'>
                    E54 (Special Supplemental Nutrition Program for Women,
                    Infants, and Children (WIC)
                  </label>
                </div>
              </div>
            </div>
            <div class='row px-5'>
              <div class='mb-3'>
                <label for='exampleFormControlInput1' class='form-label'>
                  {' '}
                  Signature{' '}
                </label>
                <input
                  type='file'
                  class='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
            </div>
            <div class='form-check ms-4 mb-3 px-5'>
              <input
                class='form-check-input required'
                type='checkbox'
                value=''
              />
              <label class='form-check-label' for='defaultCheck1'>
                Consumer has provided their consent to share their PII for
                purposes of applying and/or receiving the Affordable
                Connectivity Program benefit.
              </label>
            </div>
          </div>
        )}
        <div class='col-12 text-center mt-3'>
          <button class='btn btn-primary' type='submit'>
            Submit form
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddNewSimCard;

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import avatar from '../../assets/logo/swaconnec.png';
import './Login.css';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

async function loginUser(credentials) {
  return fetch('http://localhost:3939/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Login Not Successful',
      });
    });
}

const Login = ({ setToken }) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  // async function login(data) {
  //   let result = await fetch('http://localhost:3939/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   result = await result.json();
  //   console.log(result.token);
  //   localStorage.setItem('token', JSON.stringify(result.token));
  //   history.push('/dashboard');
  // }

  // useEffect(() => {
  //   if (localStorage.getItem('user-info')) {
  //     history.push('/dashboard');
  //   }
  // }, []);

  // const onSubmit = (data) => {
  //   login(data);
  //   console.log(data);
  // };

  const onSubmit = async (data) => {
    const token = await loginUser(data);
    setToken(token);
  };

  return (
    <div>
      <div className='login-page'>
        <div className=' d-flex align-items-center justify-content-center login-page-1'>
          <div className='formContainer container'>
            <div className='text-center mb-2'>
              <img width='350px' src={avatar} alt='' />
            </div>
            <h2 className='text-center text-dark mt-4'>User Access</h2>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
              <input
                className='form-control'
                type='email'
                required
                {...register('email', { required: true })}
                placeholder='Enter your email'
              />
              <input
                required
                type='password'
                className='form-control'
                {...register('password', { required: true })}
                placeholder='Enter your password'
              />
              <button className='btn btn-primary btn-login' type='submit'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;

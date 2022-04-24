import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import avatar from '../../assets/logo/swaconnec.png';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem('user-info')) {
  //     history.push('/dashboard');
  //   }
  // }, []);

  const onSubmit = (data) => {
    // userLogin({ ...data, history, redirect });
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
    //   localStorage.setItem('user-info', JSON.stringify(result));
    //   history.push('/dashboard');
    // }
    console.log(data);
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

export default Login;

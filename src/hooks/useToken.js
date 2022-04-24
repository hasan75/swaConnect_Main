import React, { useState } from 'react';

const useToken = () => {
  function getToken() {
    const tokenString = localStorage.getItem('token');
    console.log(tokenString);
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    }
  }
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken.token));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;

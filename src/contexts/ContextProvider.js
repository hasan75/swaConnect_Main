import React, { createContext } from 'react';
import useToken from '../hooks/useToken';

export const ContextApi = createContext();
const ContextProvider = ({ children }) => {
  const authInfo = useToken();
  const data = { ...authInfo };
  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;

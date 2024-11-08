import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const OpenRoute = ({ children }) => {
  const { payload } = useAuthContext();

  if (payload) {
    return <Navigate to="/mainPage" replace />;
  }

  return children;
};

export default OpenRoute;
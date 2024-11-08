import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const ProtectedRoute = ({ children }) => {
  const { payload } = useAuthContext();

  if (!payload) {
    return <Navigate to="/loginPage" replace />;
  }

  return children;
};

export default ProtectedRoute;
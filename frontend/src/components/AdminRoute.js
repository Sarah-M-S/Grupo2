import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const AdminRoute = ({ children }) => {
  const { payload } = useAuthContext();

  if (!payload.user.admin) {
    return <Navigate to="/mainPage" replace />;
  }

  return children;
};

export default AdminRoute;
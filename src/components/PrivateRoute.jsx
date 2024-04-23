// components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PrivateRoute = () => {
  const token = useAuthStore(state => state.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

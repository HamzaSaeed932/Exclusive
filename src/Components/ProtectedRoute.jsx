// src/Components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    // Not logged in — redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
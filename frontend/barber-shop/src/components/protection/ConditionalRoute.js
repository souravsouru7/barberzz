import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ConditionalRoute = ({ children, isProtected }) => {
  const { isAuthenticated } = useSelector((state) => state.shopkeeper);

  if (isProtected) {
    // Protected route logic
    return isAuthenticated ? children : <Navigate to="/shopkeeper/login" replace />;
  } else {
    // Redirect route logic
    return isAuthenticated ? <Navigate to="/shopkeeper/dashbord" replace /> : children;
  }
};

export default ConditionalRoute;

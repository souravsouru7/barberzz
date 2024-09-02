import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Dashbord from './components/shopkeeper/Dashbord';
import ForgotPassword from './components/ForgotPassword';
import ShopkeeperRegistrationForm from './components/shopkeeper/ShopkeeperRegistrationForm';
import ResetPassword from './components/ResetPassword';
import LoginShopkeeper from './components/shopkeeper/Login';
import ConditionalRoute from './components/protection/ConditionalRoute';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/shopkeeper/register"
            element={
              <ConditionalRoute isProtected={false}>
                <ShopkeeperRegistrationForm />
              </ConditionalRoute>
            }
          />
           <Route
            path="/shopkeeper/login"
            element={
              <ConditionalRoute isProtected={false}>
                <LoginShopkeeper />
              </ConditionalRoute>
            }
          />
          <Route
            path="/shopkeeper/dashbord"
            element={
              <ConditionalRoute isProtected={true}>
                <Dashbord />
              </ConditionalRoute>
            }
          />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;

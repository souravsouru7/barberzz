import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute'; 
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<ProtectedRoute element={HomePage} />} 
          />
           <Route path="/forgot-password" element={<ForgotPassword/>} />
           <Route path="/reset-password" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

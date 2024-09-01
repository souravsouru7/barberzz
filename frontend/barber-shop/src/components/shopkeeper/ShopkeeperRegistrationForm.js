import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerShopkeeper } from '../../redux/slices/shopkeeperSlice'; // Corrected import path
import FileUpload from '../../components/FileUpload';

const ShopkeeperRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    contactNumber: '',
    shopName: '',
    shopLicense: null,
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.shopkeeper.status);
  const error = useSelector((state) => state.shopkeeper.error);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      shopLicense: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = new FormData();
    Object.keys(formData).forEach((key) => {
      registrationData.append(key, formData[key]);
    });

    dispatch(registerShopkeeper(registrationData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="shopName"
        placeholder="Shop Name"
        value={formData.shopName}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Owner Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleInputChange}
        required
      />
      <FileUpload onFileChange={handleFileChange} />

      <button type="submit" disabled={status === 'loading'}>
        Register
      </button>

      {status === 'failed' && <p>{error}</p>}
    </form>
  );
};

export default ShopkeeperRegistrationForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerShopkeeper } from '../../redux/slices/shopkeeperSlice';
import FileUpload from '../../components/FileUpload';
import { useNavigate } from 'react-router-dom';

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

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.shopkeeper);

  useEffect(() => {
    if (status === 'succeeded') {
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        contactNumber: '',
        shopName: '',
        shopLicense: null,
      });
      navigate('/shopkeeper/login');
    }
  }, [status, navigate]);

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.shopName) newErrors.shopName = 'Shop name is required';
    if (!formData.name) newErrors.name = 'Owner name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.shopLicense) newErrors.shopLicense = 'Shop license is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const registrationData = new FormData();
      Object.keys(formData).forEach((key) => {
        registrationData.append(key, formData[key]);
      });

      dispatch(registerShopkeeper(registrationData));
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e2f] flex items-center justify-center px-4">
      <div className="max-w-lg w-full mx-auto p-8 bg-[#27293d] rounded-lg shadow-lg text-[#f1f1f1]">
        <div className="flex justify-center mb-6">
          <img src="your-logo-url" alt="Barberzzz Logo" className="h-12" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-[#ff6b6b]">Register as a Shopkeeper</h2>
        <p className="text-center text-[#a1a1b2] mb-8">Join the Barberzzz community today!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {['shopName', 'name', 'email', 'password', 'confirmPassword', 'address', 'contactNumber'].map((field) => (
            <div key={field}>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                name={field}
                placeholder={field.split(/(?=[A-Z])/).join(' ')}
                value={formData[field]}
                onChange={handleInputChange}
                className={`w-full p-3 bg-[#1e1e2f] text-[#f1f1f1] rounded-md placeholder-[#a1a1b2] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] ${
                  errors[field] ? 'border border-red-500' : ''
                }`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          <div>
            <FileUpload onFileChange={handleFileChange} />
            {errors.shopLicense && <p className="text-red-500 text-sm">{errors.shopLicense}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full mt-6 p-3 bg-[#ff6b6b] text-[#f1f1f1] rounded-md hover:bg-[#e65d5d] disabled:bg-[#a1a1b2] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
          >
            Register
          </button>

          {status === 'failed' && <p className="mt-4 text-center text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ShopkeeperRegistrationForm;

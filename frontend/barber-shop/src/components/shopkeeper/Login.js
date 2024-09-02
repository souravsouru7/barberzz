import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginShopkeeper } from '../../redux/slices/shopkeeperSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.shopkeeper);
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(loginShopkeeper({ email, password }));
    }
  };


  useEffect(() => {
    if (isAuthenticated) {
      navigate('/shopkeeper/dashbord'); 
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="min-h-screen bg-[#1e1e2f] flex items-center justify-center px-4">
      <div className="max-w-md w-full mx-auto p-8 bg-[#27293d] rounded-lg shadow-lg text-[#f1f1f1]">
        <div className="flex justify-center mb-6">
          {/* Company Logo */}
          <img src="https://files.oaiusercontent.com/file-0ADzl3XRPaQFTrCAqRC4AHzw?se=2024-09-02T08%3A34%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D08cdea2c-9226-449f-b04d-ecb5bc4108a3.webp&sig=mKz8z5ViMrPgDcrsw25eK%2BeoGJ1DL99Q8CXf7UL/X3s%3D" alt="Barberzzz Logo" className="h-12" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-[#ff6b6b]">Login as Shopkeeper</h2>
        <p className="text-center text-[#a1a1b2] mb-8">Welcome back to Barberzzz!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 bg-[#1e1e2f] text-[#f1f1f1] rounded-md placeholder-[#a1a1b2] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] ${
                errors.email ? 'border border-red-500' : ''
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 bg-[#1e1e2f] text-[#f1f1f1] rounded-md placeholder-[#a1a1b2] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] ${
                errors.password ? 'border border-red-500' : ''
              }`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {loading && <p className="text-center text-[#a1a1b2]">Loading...</p>}
          {error && (
            <p className="text-center text-red-500">
              {/* Ensure error is a string */}
              {typeof error === 'string' ? error : 'Pass or email invalid'}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 p-3 bg-[#ff6b6b] text-[#f1f1f1] rounded-md hover:bg-[#e65d5d] disabled:bg-[#a1a1b2] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

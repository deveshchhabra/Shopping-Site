import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../utilis/authSlice';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success
    if (username && password) {
      const dummyToken = 'dummy-jwt-token';
      localStorage.setItem('token', dummyToken);
      dispatch(loginSuccess(dummyToken));
      navigate('/');
    } else {
      setError('Please enter valid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login to your account</h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          Get access to your Orders, Wishlist and Recommendations
        </p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our{' '}
          <span className="text-pink-600 cursor-pointer">Terms of Use</span> and{' '}
          <span className="text-pink-600 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Log;

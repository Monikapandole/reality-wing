import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../Api/services/authService';
import { setUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {auth ,user} = useSelector(state =>
   state
  ); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await userLogin(formData, auth.token);  
      console.log('Login success:', response);
    toast.success('Login Successfully!');
      if (response && response.JWT) {
        console.log(response ,"response")
        const { JWT, user_id } = response;
      dispatch(setUser({ JWT, user: { id: user_id } }));
      navigate('/home');
      }
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 font-inter text-left">
      <div className="bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-4xl">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 leading-snug">Welcome Back!</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>✓ Access your saved properties</li>
            <li>✓ Track your posted listings</li>
            <li>✓ Get instant property updates</li>
            <li>✓ Connect directly with property seekers</li>
          </ul>
        </div>

        {/* Right Panel - Login */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Login to Your Account</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a href="/forgot-password" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition-all"
          >
            Login
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{' '}
            <a href="/sign-up" className="text-red-500 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

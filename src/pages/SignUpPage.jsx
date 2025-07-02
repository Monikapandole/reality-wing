import React, { useState } from 'react';
import { userSignup } from '../Api/services/authService';
import { setUser } from '../redux/actions/authActions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country_code: '+91',
    phone_number: '',
    captcha: '', // Optional
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }

  const form = new FormData();
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('password', formData.password);
  form.append('country_code', formData.country_code);
  form.append('phone_number', formData.phone_number);
  form.append('role', 'user'); // static role = user

  try {
    const res = await userSignup(form);
    console.log(res.result)
    if (res.result && res.result === "Email already exists" ||res.result === 'Mobile Number already exists') {
      toast.error(res.result);
      return; 
    }

   
    if (res && res.JWT) {
       toast.success('Signup Successful!');
      const { JWT, user_id } = res;
      dispatch(setUser({ JWT, user: { id: user_id } }));
      navigate('/home');
    }
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || 'Signup Failed');
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10  text-left">
      <div className="bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-6xl ">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white p-8 md:w-1/2 items-start justify-center flex flex-col">
          <h2 className="text-2xl font-bold mb-6 leading-snug">Things you can do with your account</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>✓ Post one Single Property for FREE</li>
            <li>✓ Set property alerts for your requirement</li>
            <li>✓ Get accessed by over 1 Lakh buyers</li>
            <li>✓ Showcase your property for Rental, PG, or Sale</li>
            <li>✓ Get instant queries via Phone, Email, SMS</li>
            <li>✓ Track performance, responses & views</li>
            <li>✓ Add detailed info & multiple photos</li>
          </ul>
        </div>

        {/* Right Panel */}
        <form onSubmit={handleSubmit} className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Create Your Account</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                name="phone_number"
                placeholder="Enter mobile number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Captcha (Optional) */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Captcha (optional)</label>
            <div className="flex items-center gap-2">
              <div className="w-24 h-10 bg-gray-300 text-gray-800 flex items-center justify-center text-sm font-mono rounded-md">
                mkcRv
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition-all"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-red-500 font-semibold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

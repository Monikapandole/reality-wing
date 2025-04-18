import React, { useState } from 'react';

function SignUpPage() {
  const [role, setRole] = useState('buyer');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white shadow-md rounded-lg flex w-[900px] overflow-hidden text-left">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white p-10 w-1/2">
          <h2 className="text-2xl font-bold mb-6">Things you can do with your account</h2>
          <ul className="space-y-3 text-sm">
            <li>✓ Post one Single Property for FREE</li>
            <li>✓ Set property alerts for your requirement</li>
            <li>✓ Get accessed by over 1 Lakh buyers</li>
            <li>✓ Showcase your property for Rental, PG, or Sale</li>
            <li>✓ Get instant queries via Phone, Email, SMS</li>
            <li>✓ Track performance, responses & views</li>
            <li>✓ Add detailed info & multiple photos</li>
          </ul>
        </div>

        {/* Right Panel - Signup */}
        <div className="p-10 w-1/2 text-left">
          <h2 className="text-xl font-semibold mb-6">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Are you</label>
            <div className="flex gap-4">
              <button
                onClick={() => setRole('buyer')}
                className={`px-4 py-2 rounded-full border ${role === 'buyer' ? 'bg-red-500 text-white' : 'bg-white'}`}
              >
                Buyer/Owner
              </button>
              <button
                onClick={() => setRole('agent')}
                className={`px-4 py-2 rounded-full border ${role === 'agent' ? 'bg-red-500 text-white' : 'bg-white'}`}
              >
                Agent/Builder
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Captcha</label>
            <div className="flex gap-2">
              <div className="w-24 h-10 bg-gray-300 flex items-center justify-center text-sm font-mono">
                mkcRv
              </div>
              <input
                type="text"
                placeholder="Enter Captcha"
                className="flex-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md mt-4">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-red-500 font-medium">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

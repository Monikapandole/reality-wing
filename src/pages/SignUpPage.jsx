import React from 'react';

function SignUpPage() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 font-rubik text-left">
      <div className="bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-6xl ">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white p-8 md:w-1/2 items-start  justify-center flex flex-col">
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

        {/* Right Panel - Signup */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Create Your Account</h2>
          {/* <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you</label>
            <div className="flex gap-4">
              {['buyer', 'agent'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    role === r ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {r === 'buyer' ? 'Buyer/Owner' : 'Agent/Builder'}
                </button>
              ))}
            </div>
          </div> */}
          {/* Two Column Grid for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Captcha */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Captcha</label>
            <div className="flex items-center gap-2">
              <div className="w-24 h-10 bg-gray-300 text-gray-800 flex items-center justify-center text-sm font-mono rounded-md">
                mkcRv
              </div>
              <input
                type="text"
                placeholder="Enter Captcha"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition-all">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-red-500 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

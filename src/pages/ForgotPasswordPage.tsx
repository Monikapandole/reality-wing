import React, { useState } from 'react';
import { forgotPassword } from '../Api/services/authService';
import { toast } from 'react-toastify';

function ForgotPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await forgotPassword(newPassword, confirmPassword);
      toast.success(response?.message || 'Password has been reset!');
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 text-left">
      <div className="bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-4xl">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 leading-snug">Reset Your Password</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>✓ Enter your new password to reset</li>
            <li>✓ Password must be strong and secure</li>
            <li>✓ You can now log in with your new password</li>
          </ul>
        </div>
        {/* Right Panel - Reset Password */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>
          {/* New Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>
          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {/* Submit button */}
          <button
            onClick={handleForgotPassword}
            disabled={isLoading}
            className={`w-full font-medium py-2 rounded-md transition-all flex items-center justify-center ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Resetting...
              </>
            ) : (
              'Reset Password'
            )}
          </button>
          {/* Back to login link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Remembered your password?{' '}
            <a href="/login" className="text-red-500 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage; 
'use client';

import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const CORRECT_PASSWORD = 'ushaxisdemo$';

  useEffect(() => {
    // No localStorage check - always require password
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      // No localStorage - authentication only lasts for current session
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // No localStorage to clear
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <img src="/axis.png" alt="AXIS Medical Education" className="h-16 mx-auto mb-4" />
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/axis.png" alt="AXIS Medical Education" className="h-20 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">AXIS Medical Education</h1>
            <p className="text-gray-600">Please enter the password to access the site</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors text-gray-900 bg-white"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 outline-none"
            >
              Access Site
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2024 AXIS Medical Education</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Hidden logout option for development - remove in production */}
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-xs opacity-50 hover:opacity-100 transition-opacity"
        style={{ zIndex: 9999 }}
      >
        Logout
      </button>
    </>
  );
} 
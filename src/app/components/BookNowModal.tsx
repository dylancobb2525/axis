'use client';

import { useState } from 'react';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookNowModal({ isOpen, onClose }: BookNowModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    hospital: '',
    city: '',
    state: '',
    eventIds: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    return email.includes('@') && email.trim() !== '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Check required fields
    const requiredFields = [
      { field: 'firstName', label: 'First Name' },
      { field: 'lastName', label: 'Last Name' },
      { field: 'email', label: 'Email' },
      { field: 'phone', label: 'Phone' },
      { field: 'title', label: 'Title/Occupation' },
      { field: 'hospital', label: 'Hospital/Affiliation' },
      { field: 'city', label: 'City' },
      { field: 'state', label: 'State' },
      { field: 'eventIds', label: 'Event ID(s)' }
    ];

    for (const { field, label } of requiredFields) {
      if (!formData[field as keyof typeof formData].trim()) {
        setValidationError(`Please fill out the ${label} field.`);
        return;
      }
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setValidationError('Please enter a valid email address (must contain @).');
      return;
    }

    // Show success message
    setShowSuccess(true);
  };

  const isFormValid = () => {
    return formData.firstName.trim() && 
           formData.lastName.trim() && 
           formData.email.trim() && 
           validateEmail(formData.email) &&
           formData.phone.trim() && 
           formData.title.trim() && 
           formData.hospital.trim() && 
           formData.city.trim() && 
           formData.state.trim() && 
           formData.eventIds.trim();
  };

  const handleClose = () => {
    setShowSuccess(false);
    setValidationError('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
      hospital: '',
      city: '',
      state: '',
      eventIds: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] flex flex-col relative">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Book Now</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Success Message */}
        {showSuccess ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking Sent!</h3>
              <p className="text-sm text-gray-500">This is just an example - no one actually received this message.</p>
            </div>
          </div>
        ) : (
          // Scrollable Content
          <div className="flex-1 overflow-y-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Info</h3>
            </div>

            {/* Validation Error */}
            {validationError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {validationError}
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Title/Occupation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title/Occupation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title/Occupation"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Hospital/Affiliation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hospital/Affiliation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="hospital"
                placeholder="Hospital/Affiliation"
                value={formData.hospital}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Event ID(s) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event ID(s) <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500 mb-2">Please separate each ID with a comma</p>
              <input
                type="text"
                name="eventIds"
                placeholder="AXIS ####"
                value={formData.eventIds}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Please type a brief message for our event coordinator that includes your preferred dates or schedule limitations."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>
          </form>
          </div>
        )}

        {/* Fixed Bottom Buttons */}
        {!showSuccess && (
          <div className="bg-white border-t shadow-lg rounded-b-lg">
            <div className="flex gap-4 justify-center py-4 px-6">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`flex-1 px-6 py-3 rounded-full font-medium transition-colors ${
                  isFormValid()
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
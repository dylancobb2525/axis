'use client';

import { useForm, ValidationError } from '@formspree/react';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookNowModal({ isOpen, onClose }: BookNowModalProps) {
  const [state, handleSubmit] = useForm("xpwrrezw");

  const handleClose = () => {
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
        {state.succeeded ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking Sent!</h3>
              <p className="text-sm text-gray-500">Thank you for your booking request. We'll get back to you soon!</p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <ValidationError 
                    prefix="First Name" 
                    field="firstName"
                    errors={state.errors}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <ValidationError 
                    prefix="Last Name" 
                    field="lastName"
                    errors={state.errors}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
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
                  placeholder="e.g. Physician, Nurse, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <ValidationError 
                  prefix="Title" 
                  field="title"
                  errors={state.errors}
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
                  placeholder="Hospital or Organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <ValidationError 
                  prefix="Hospital" 
                  field="hospital"
                  errors={state.errors}
                />
              </div>

              {/* Location */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <ValidationError 
                    prefix="City" 
                    field="city"
                    errors={state.errors}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <ValidationError 
                    prefix="State" 
                    field="state"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* Event IDs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event ID(s) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventIds"
                  placeholder="Event ID(s)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <ValidationError 
                  prefix="Event IDs" 
                  field="eventIds"
                  errors={state.errors}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  placeholder="Any additional information or special requests..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                >
                  {state.submitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 
'use client';

import { useEffect } from 'react';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <p className="text-lg mb-8">
              AXIS Medical Education, Inc. is a full-service continuing education company that designs and implements live, web-based, and print-
              based educational activities for healthcare.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">AXIS CORPORATE OFFICE</h2>
              <div className="space-y-2 text-lg">
                <p>1301 Virginia Drive</p>
                <p>Suite 300</p>
                <p>Fort Washington, PA 19034</p>
                <p><a href="mailto:info@axismeded.com" className="text-blue-600 hover:text-blue-800">info@axismeded.com</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 
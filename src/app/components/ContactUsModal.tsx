'use client';

import { useState } from 'react';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                We'd love to hear from you. Contact us using any of the methods below or reach out to our team directly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">General Inquiries</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info@axismeded.com" className="text-blue-600 hover:text-blue-800">info@axismeded.com</a>
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Coordinator</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Dawn Amos</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:dawn.amos@axismeded.com" className="text-blue-600 hover:text-blue-800">dawn.amos@axismeded.com</a>
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Address</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  2455 E. Sunrise Blvd Suite #1200<br />
                  Fort Lauderdale, FL 33304
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://x.com/Axismeded" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Follow us on X</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 
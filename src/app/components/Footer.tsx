'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";
import AboutUsModal from "./AboutUsModal";
import AdvocacyPartnersModal from "./AdvocacyPartnersModal";
import ContactUsModal from "./ContactUsModal";

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isAboutUsModalOpen, setIsAboutUsModalOpen] = useState(false);
  const [isAdvocacyPartnersModalOpen, setIsAdvocacyPartnersModalOpen] = useState(false);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  return (
    <footer className="bg-blue-500 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center space-x-8 mb-6">
          <button 
            onClick={() => setIsPrivacyModalOpen(true)}
            className="text-white hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer"
          >
            PRIVACY
          </button>
          <span className="text-white/60">/</span>
          <button 
            onClick={() => setIsTermsModalOpen(true)}
            className="text-white hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer"
          >
            TERMS
          </button>
          <span className="text-white/60">/</span>
          <button 
            onClick={() => setIsAboutUsModalOpen(true)}
            className="text-white hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer"
          >
            ABOUT US
          </button>
          <span className="text-white/60">/</span>
          <button 
            onClick={() => setIsAdvocacyPartnersModalOpen(true)}
            className="text-white hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer"
          >
            ADVOCACY PARTNERS
          </button>
          <span className="text-white/60">/</span>
          <button 
            onClick={() => setIsContactUsModalOpen(true)}
            className="text-white hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer"
          >
            CONTACT US
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-white/30 mb-8"></div>

        {/* Three Section Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section - Need Help */}
          <button 
            onClick={() => window.location.href = 'mailto:info@axismeded.com'}
            className="flex items-center justify-center md:justify-start space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="bg-white p-3 rounded">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium text-sm">NEED HELP?</div>
              <div className="text-white font-light">Contact Us</div>
            </div>
          </button>

          {/* Center Section - Twitter Icon */}
          <div className="flex justify-center">
            <Link href="https://x.com/Axismeded" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-3 rounded hover:bg-orange-600 transition-colors">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
          </div>

          {/* Right Section - AXIS Logo and Address */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="mb-4">
              <Image 
                src="/logos/axis.png" 
                alt="AXIS Medical Education" 
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <div className="text-white text-sm">
              <div>2455 E. Sunrise Blvd Suite #1200</div>
              <div>Fort Lauderdale, FL 33304</div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Terms Modal */}
      <TermsModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      {/* About Us Modal */}
      <AboutUsModal 
        isOpen={isAboutUsModalOpen}
        onClose={() => setIsAboutUsModalOpen(false)}
      />

      {/* Advocacy Partners Modal */}
      <AdvocacyPartnersModal 
        isOpen={isAdvocacyPartnersModalOpen}
        onClose={() => setIsAdvocacyPartnersModalOpen(false)}
      />

      {/* Contact Us Modal */}
      <ContactUsModal 
        isOpen={isContactUsModalOpen}
        onClose={() => setIsContactUsModalOpen(false)}
      />
    </footer>
  );
} 
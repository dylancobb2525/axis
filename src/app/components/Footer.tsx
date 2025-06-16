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

          {/* Center Section - X Icon */}
          <div className="flex justify-center">
            <Link href="https://x.com/Axismeded" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-3 rounded hover:bg-orange-600 transition-colors">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
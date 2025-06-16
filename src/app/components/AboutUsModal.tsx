'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
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
      {/* Header with close button */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close About Us"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            {/* Company Description */}
            <section>
              <p className="text-lg">
                AXIS Medical Education, Inc. is a full-service continuing education company that designs and implements live, digital, and print-based 
                educational activities for healthcare professionals. AXIS provides convenient opportunities to engage learners based on their individual 
                learning preferences through a full spectrum of educational offerings.
              </p>
            </section>

            {/* Accreditation Logos */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-8">
              <div className="flex flex-col items-center">
                <Image 
                  src="/logos/jointac.png" 
                  alt="Jointly Accredited Provider" 
                  width={300}
                  height={200}
                  className="h-48 w-auto mb-2"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJiv/Z"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image 
                  src="/logos/ipc.png" 
                  alt="IPCE Credit" 
                  width={300}
                  height={200}
                  className="h-48 w-auto mb-2"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJiv/Z"
                />
              </div>
            </section>

            {/* Joint Accreditation Information */}
            <section>
              <p>
                AXIS is a Joint Accreditation provider and promotes interprofessional continuing education (IPCE) activities specifically designed to 
                improve interprofessional collaborative practice (IPCP) in health care delivery. Joint Accreditation is a collaboration of the:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Accreditation Council for Continuing Medical Education (ACCME)</li>
                <li>Accreditation Council for Pharmacy Education (ACPE)</li>
                <li>American Nurses Credentialing Center (ANCC)</li>
              </ul>
            </section>

            {/* Additional Provider Information */}
            <section>
              <p>
                To meet the educational needs of the interprofessional team, AXIS, within its joint accreditation providership, is also a provider with:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>American Academy of PAs (AAPA)</li>
                <li>Association of Social Work Boards (ASWB)</li>
                <li>Commission on Dietetic Registration (CDR)</li>
              </ul>
            </section>

            {/* Team Experience */}
            <section>
              <p>
                The executive leadership of AXIS combines 80 years of experience in adult learning theory, curriculum 
                design/implementation/assessment, continuing education accreditation standards, and medical meeting planning and logistics. Our team 
                has a deep understanding of the governing guidelines overseeing the medical education industry to ensure compliant delivery of all 
                activities. AXIS employs an experienced team of medical and scientific experts, medical writers, project managers, meeting planners, and 
                logistics professionals. This team is dedicated to meeting the unmet educational needs of the interprofessional healthcare team, with the 
                goal of improving patient outcomes.
              </p>
            </section>

            {/* Partnerships */}
            <section>
              <p>
                AXIS believes that partnerships are crucial in our mission to deliver timely, relevant, and high-quality continuing education to the 
                interprofessional healthcare team. To that end, AXIS partners with other organizations to offer added expertise and assist in expanding 
                access to our educational interventions. AXIS also partners with numerous patient advocacy organizations to provide recommended 
                patient education and caregiver resources in specific disease areas. AXIS finds value in these partnerships because they complement our 
                core clinical curriculum with validated and relevant supplemental resources for busy clinicians and their patients.
              </p>
            </section>

            {/* Mission Statement */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AXIS Mission Statement</h2>
              <p className="text-lg italic">
                To enhance the knowledge, skills/strategy, and performance of the interprofessional healthcare team to ensure patients receive quality 
                care, resulting in improved patient outcomes. We engage the interprofessional healthcare team in fair-balanced, scientifically rigorous, 
                expert-led educational activities designed to foster lifelong learning that is applicable to clinical practice and patient-centered care.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
} 
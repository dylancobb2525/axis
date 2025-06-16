'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedCounter from "./components/AnimatedCounter";
import ActivityModal from "./components/ActivityModal";
import BookNowModal from "./components/BookNowModal";
import BookActivityModal from "./components/BookActivityModal";
import AskQuestionModal from "./components/AskQuestionModal";
import PasswordProtection from "./components/PasswordProtection";
import Footer from "./components/Footer";

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [bookNowModalOpen, setBookNowModalOpen] = useState(false);
  const [bookActivityModalOpen, setBookActivityModalOpen] = useState(false);
  const [askQuestionModalOpen, setAskQuestionModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const activities = [
    {
      id: 1,
      title: "Optimizing Perioperative Therapy in Early-Stage NSCLC: A Multidisciplinary Approach",
      category: "EARLY-STAGE NSCLC",
      specialText: "Activity Includes Mini-Focus Group Discussion",
      code: "AXIS 17488",
      chairperson: "Heather Wakelee, MD, FASCO",
      institution: "Stanford University and Stanford Cancer Institute",
      location: "Palo Alto, CA",
      poweredBy: "AXIS Powered by GLC",
      supportedBy: "Merck & BMS",
      hasNewBadge: true,
      image: "/activitylogos/cell1.jpg"
    },
    {
      id: 2,
      title: "Enhancing Diagnosis, Treatment, and Outcomes in Paroxysmal Nocturnal Hemoglobinuria with Novel Oral Therapeutics",
      category: "PAROXYSMAL NOCTURNAL HEMOGLOBINURIA ORAL THERAPEUTICS",
      code: "AXIS 14967",
      chairperson: "Carlos M. De Castro, III, MD",
      institution: "Duke Comprehensive Cancer Center",
      location: "Durham, NC",
      supportedBy: "Novartis",
      hasNewBadge: true,
      image: "/activitylogos/cell2.jpg"
    },
    {
      id: 3,
      title: "Improving HR+/HER2- Breast Cancer Outcomes with TROP2 Antibody-Drug Conjugates",
      category: "BREAST CANCER WITH TROP2 ADCS",
      code: "AXIS 16178",
      chairperson: "Aditya Bardia, MD, MPH, FASCO",
      institution: "University of California",
      location: "Los Angeles, CA",
      supportedBy: "DSI & AZ",
      hasNewBadge: false,
      image: "/activitylogos/cell3.jpg"
    },
    {
      id: 4,
      title: "Redefining Treatment Across the Spectrum of HR+ HER2-expressing Metastatic Breast Cancer",
      category: "ULTRA LOW BREAST CANCER",
      code: "AXIS 16169",
      chairperson: "Sara Tolaney, MD, MPH",
      institution: "Dana-Farber Cancer Institute / Harvard Medical School",
      location: "Boston, MA",
      supportedBy: "DSI & AZ",
      hasNewBadge: false,
      image: "/activitylogos/cell4.jpg"
    },
    {
      id: 5,
      title: "Novel Treatments for Newly Diagnosed Ph+CML-CP: Striking the Balance of Treatment with Patient Goals and QoL",
      category: "NOVEL TREATMENTS FOR PH+CML-CP",
      code: "AXIS 15852",
      chairperson: "Jorge Cortes, MD",
      institution: "Georgia Cancer Center at Augusta University",
      location: "Augusta, GA",
      supportedBy: "Novartis",
      hasNewBadge: false,
      image: "/activitylogos/cell5.jpg"
    },
    {
      id: 6,
      title: "The Evolving Role of Bispecific Antibody Therapy in Relapsed or Refractory Follicular Lymphoma",
      category: "BISPECIFIC ANTIBODY THERAPY IN R/R FOLLICULAR LYMPHOMA",
      code: "AXIS 15533",
      chairperson: "Tycel Phillips, MD",
      institution: "City of Hope",
      location: "Duarte, CA",
      supportedBy: "Genmab",
      hasNewBadge: false,
      image: "/activitylogos/cell6.jpg"
    },
    {
      id: 7,
      title: "Practice Changing Strategies in Community Care Settings for Patients with CLL/SLL/MCL",
      category: "CLL/SLL/MCL",
      code: "AXIS 13955",
      chairperson: "Matthew S. Davids, MD",
      institution: "Harvard Medical School/Dana-Farber Cancer Institute",
      location: "Boston, MA",
      supportedBy: "Lilly",
      hasNewBadge: false,
      hasSpecialBadge: "ASH Updates",
      image: "/activitylogos/cell7.jpg"
    },
    {
      id: 8,
      title: "Community Practice Perspectives: Exploring Treatment Intensification with CDK 4/6i in Adjuvant HR+, HER2-, High-Risk Early Breast Cancer",
      category: "HIGH-RISK EARLY BREAST CANCER",
      code: "AXIS 13830",
      chairperson: "Adam Brufsky, MD, PhD",
      institution: "UPMC Hillman Cancer Center, University of Pittsburgh",
      location: "Pittsburgh, PA",
      supportedBy: "Lilly",
      hasNewBadge: false,
      hasSpecialBadge: "SABCS Updates",
      image: "/activitylogos/cell8.jpg"
    },
    {
      id: 9,
      title: "Advancing ALK Inhibition into Early-Stage NSCLC: Integrating Biomarker-Driven Therapies to Reduce Recurrence Risk Post Resection",
      category: "EARLY STAGE NSCLC",
      code: "AXIS 13434",
      chairperson: "Mark A. Socinski, MD",
      institution: "AdventHealth Cancer Institute",
      location: "Orlando, FL",
      supportedBy: "Genentech",
      hasNewBadge: false,
      image: "/activitylogos/cell9.jpg"
    }
  ];

  const handleOpenModal = (activityId: number) => {
    const activity = activities.find(a => a.id === activityId);
    setSelectedActivity(activity);
    setOpenModal(activityId);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    setSelectedActivity(null);
  };

  const handleOpenBookActivity = () => {
    setBookActivityModalOpen(true);
  };

  const handleOpenAskQuestion = () => {
    setAskQuestionModalOpen(true);
  };

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm px-6 py-4 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/axis.png" alt="AXIS Medical Education" className="h-12" />
          </div>
          <button 
            onClick={() => setBookNowModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 relative overflow-hidden pt-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/cells.jpg)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advance Your Institution with<br />Place of Practice Grand Rounds
          </h1>
          <p className="text-base md:text-lg mb-12 opacity-90">
            AXIS Medical Education delivers high-impact, flexible learning opportunities designed to elevate clinical teams through timely, evidence-based education. Whether in-person or remote, these certified continuing medical education sessions bring the learning directly to where care happens.
          </p>
        </div>
      </section>

      {/* Stats Box - Overlapping between sections */}
      <div className="relative -mt-12 z-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg">
            <div className="text-3xl font-bold">
              <AnimatedCounter target={30990} duration={2500} />
            </div>
            <div className="text-sm uppercase tracking-wide">PROVIDERS TAUGHT</div>
          </div>
        </div>
      </div>

      {/* Available Activities Section */}
      <section className="py-16 px-6 bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Available Activities:</h2>
          
          {/* First Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activities.slice(0, 3).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="h-48 w-full object-cover"
                  />
                  {activity.hasNewBadge && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs rounded">
                      NEW
                    </div>
                  )}
                  {activity.hasSpecialBadge && (
                    <div className="absolute top-4 left-4 bg-gray-600 text-white px-2 py-1 text-xs rounded">
                      {activity.hasSpecialBadge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    PLACE OF PRACTICE GRAND ROUNDS
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  
                  {activity.specialText && (
                    <p className="text-sm text-orange-500 italic mb-3">
                      {activity.specialText}
                    </p>
                  )}
                  
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    {activity.chairperson} (Chairperson)
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    {activity.institution}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {activity.location}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-xs text-gray-600">
                        {activity.poweredBy && (
                          <div className="mb-1">{activity.poweredBy}</div>
                        )}
                        <div>Supported by: {activity.supportedBy}</div>
                      </div>
                      <div className="text-right">
                        <button 
                          onClick={() => handleOpenModal(activity.id)}
                          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors mb-2"
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">{activity.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activities.slice(3, 6).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="h-48 w-full object-cover"
                  />
                  {activity.hasNewBadge && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs rounded">
                      NEW
                    </div>
                  )}
                  {activity.hasSpecialBadge && (
                    <div className="absolute top-4 left-4 bg-gray-600 text-white px-2 py-1 text-xs rounded">
                      {activity.hasSpecialBadge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    PLACE OF PRACTICE GRAND ROUNDS
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  
                  {activity.specialText && (
                    <p className="text-sm text-orange-500 italic mb-3">
                      {activity.specialText}
                    </p>
                  )}
                  
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    {activity.chairperson} (Chairperson)
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    {activity.institution}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {activity.location}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-xs text-gray-600">
                        {activity.poweredBy && (
                          <div className="mb-1">{activity.poweredBy}</div>
                        )}
                        <div>Supported by: {activity.supportedBy}</div>
                      </div>
                      <div className="text-right">
                        <button 
                          onClick={() => handleOpenModal(activity.id)}
                          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors mb-2"
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">{activity.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activities.slice(6, 9).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="h-48 w-full object-cover"
                  />
                  {activity.hasNewBadge && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs rounded">
                      NEW
                    </div>
                  )}
                  {activity.hasSpecialBadge && (
                    <div className="absolute top-4 left-4 bg-gray-600 text-white px-2 py-1 text-xs rounded">
                      {activity.hasSpecialBadge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    PLACE OF PRACTICE GRAND ROUNDS
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  
                  {activity.specialText && (
                    <p className="text-sm text-orange-500 italic mb-3">
                      {activity.specialText}
                    </p>
                  )}
                  
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    {activity.chairperson} (Chairperson)
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    {activity.institution}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {activity.location}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-xs text-gray-600">
                        {activity.poweredBy && (
                          <div className="mb-1">{activity.poweredBy}</div>
                        )}
                        <div>Supported by: {activity.supportedBy}</div>
                      </div>
                      <div className="text-right">
                        <button 
                          onClick={() => handleOpenModal(activity.id)}
                          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors mb-2"
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">{activity.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why AXIS Place of Practice Grand Rounds?
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                The Place of Practice Grand Rounds Series brings clinical teams together for interdisciplinary learning grounded in everyday practice. Participants engage with nationally recognized experts to explore emerging clinical evidence and apply it directly within their care settings.
                <br /><br />
                By connecting research to real-world workflows, these sessions help teams accelerate the adoption of innovations and best practices. Delivered on-site or virtually, Place of Practice Grand Rounds foster collaboration, spark meaningful dialogue, and equip care teams to deliver high-quality, evidence-informed care.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/doctors.png" 
                alt="Healthcare professionals and medical imagery" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Formats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Choose From Customizable Meeting Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* In-Person */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">In-Person</h3>
              <p className="text-gray-600">
                Both the faculty and learners attend in-person at your place of practice.
              </p>
            </div>

            {/* Remote */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Remote</h3>
              <p className="text-gray-600">
                The faculty and learners attend virtually through a secure online platform.
              </p>
            </div>

            {/* Flexible */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Flexible</h3>
              <p className="text-gray-600">
                Virtual faculty with in-person learners, or in-person with a few remote learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                AXIS is a Jointly Accredited Provider
              </h2>
              <p className="text-gray-600 mb-6">
                As a Joint Accreditation provider, AXIS promotes interprofessional continuing education (IPCE) activities specifically designed to improve interprofessional collaborative practice (IPCP) in health care delivery.
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-600">Joint Accreditation is a collaboration of the:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Accreditation Council for Continuing Medical Education (ACCME)</li>
                  <li>Accreditation Council for Pharmacy Education (ACPE)</li>
                  <li>American Nurses Credentialing Center (ANCC)</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600 mb-3">AXIS is also a provider with:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>American Academy of PAs (AAPA)</li>
                  <li>Association of Social Work Boards (ASWB)</li>
                  <li>Commission on Dietetic Registration (CDR)</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/accreditation.png" 
                alt="AXIS accreditation credentials and healthcare professionals" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/cells.jpg)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Book certified continuing medical education for the interprofessional care team.
          </h2>
          <button 
            onClick={() => setBookNowModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">For further inquiries please email our event coordinator directly:</p>
          <div className="text-gray-800 font-medium mb-1">Dawn Amos</div>
          <div className="text-blue-600 hover:text-blue-800 transition-colors">
            <a href="mailto:dawn.amos@axismeded.com">dawn.amos@axismeded.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Activity Modal */}
      {openModal && (
        <ActivityModal
          isOpen={openModal !== null}
          onClose={handleCloseModal}
          activity={activities.find(a => a.id === openModal) || activities[0]}
          onBookActivity={handleOpenBookActivity}
          onAskQuestion={handleOpenAskQuestion}
        />
      )}

      {/* Form Modals */}
      <BookNowModal
        isOpen={bookNowModalOpen}
        onClose={() => setBookNowModalOpen(false)}
      />
      
      <BookActivityModal
        isOpen={bookActivityModalOpen}
        onClose={() => setBookActivityModalOpen(false)}
        activityCode={selectedActivity?.code}
      />
      
      <AskQuestionModal
        isOpen={askQuestionModalOpen}
        onClose={() => setAskQuestionModalOpen(false)}
        activityCode={selectedActivity?.code}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 group"
          title="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </span>
        </button>
      )}
      </div>
    </PasswordProtection>
  );
}

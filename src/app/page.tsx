'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedCounter from "./components/AnimatedCounter";
import ActivityModal from "./components/ActivityModal";
import BookNowModal from "./components/BookNowModal";
import BookActivityModal from "./components/BookActivityModal";
import AskQuestionModal from "./components/AskQuestionModal";

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
      title: "A Changing Paradigm: Evaluating the Use of FLT3 Inhibitors in Patients with AML",
      category: "ACUTE MYELOID LEUKEMIA",
      code: "AXIS 12075",
      chairperson: "Harry P. Erba, MD, PhD",
      hasNewBadge: true,
      image: "/activitylogos/cell1.jpg"
    },
    {
      id: 2,
      title: "Improving Outcomes and Addressing Racial Disparities in Patients with HR+ / HER2- Early Breast Cancer",
      category: "CLL/SLL/MCL",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: true,
      image: "/activitylogos/cell2.jpg"
    },
    {
      id: 3,
      title: "Improving the Road to Remission with CAR T-Cell Therapies in Large B-Cell Lymphoma: Considerations for Community Practice Centers",
      category: "CAR T-CELL LYMPHOMA",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell3.jpg"
    },
    {
      id: 4,
      title: "CD20 X CD3 Bispecifics—Redefining Treatment for Patients with R/R DLBCL/ LBCL in the Community Setting",
      category: "ACUTE MYELOID LEUKEMIA",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell4.jpg"
    },
    {
      id: 5,
      title: "Attacking BTK Inhibitor Resistance in Relapsed/Refractory B-Cell Cancers: Implementing Nursing Care Plans",
      category: "B-CELL MALIGNANCIES",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell5.jpg"
    },
    {
      id: 6,
      title: "Improving Interprofessional Management and Clinical Outcomes with PARP Inhibitors for Advanced Ovarian Cancer: Cytogenetic Testing a...",
      category: "OVARIAN CANCER",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell6.jpg"
    },
    {
      id: 7,
      title: "Practice-Changing Strategies in Community Care Settings for Patients with CLL/SLL and MCL",
      category: "CLL/SLL/MCL",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell7.jpg"
    },
    {
      id: 8,
      title: "The Evolving Landscape in Myelofibrosis: A Focus on JAK Inhibitors",
      category: "MYELOFIBROSIS",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell8.jpg"
    },
    {
      id: 9,
      title: "Expert Answers to Common Questions for Improving the Road to Remission with CAR T-Cell Therapies in Large B-Cell Lymphoma: Considerations for Co...",
      category: "B-CELL CANCERS",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell9.jpg"
    },
    {
      id: 10,
      title: "CD20 X CD3 Bispecifics-Redefining Treatment for Patients with R/R DLBCL/ LBCL in the Community Setting",
      category: "B-CELL MALIGNANCIES",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      image: "/activitylogos/cell10.jpg"
    },
    {
      id: 11,
      title: "Community Practice Perspectives: Exploring Treatment Intensification with CDK 4/6i in Adjuvant HR+, HER2-, High-Risk Early Breast Cancer",
      category: "HIGH-RISK EARLY BREAST CANCER",
      code: "AXIS 13750",
      chairperson: "Helena Yu, MD",
      hasNewBadge: false,
      hasExpiresSoon: true,
      image: "/activitylogos/cell11.jpg"
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
          <p className="text-lg md:text-xl mb-12 opacity-90">
            AXIS Medical Education provides in-person, remote, and flexible learning opportunities to engage health care providers with educational offerings on timely topics. Book certified continuing medical education for the interprofessional care team.
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
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    {activity.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {activity.chairperson} – Chairperson
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{activity.code}</span>
                    <button 
                      onClick={() => handleOpenModal(activity.id)}
                      className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activities.slice(3, 6).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    {activity.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {activity.chairperson} – Chairperson
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{activity.code}</span>
                    <button 
                      onClick={() => handleOpenModal(activity.id)}
                      className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activities.slice(6, 9).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    {activity.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {activity.chairperson} – Chairperson
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{activity.code}</span>
                    <button 
                      onClick={() => handleOpenModal(activity.id)}
                      className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fourth Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.slice(9, 11).map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="h-48 w-full object-cover"
                  />
                  {activity.hasExpiresSoon && (
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-2 py-1 text-xs rounded">
                      EXPIRES SOON
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    {activity.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {activity.chairperson} – Chairperson
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{activity.code}</span>
                    <button 
                      onClick={() => handleOpenModal(activity.id)}
                      className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      More Info
                    </button>
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
              <p className="text-gray-600 leading-relaxed">
                The Place of Practice Grand Rounds Series is designed to provide learners with the opportunity to engage in interdisciplinary team-based education with their peers and interact with nationally recognized experts. Grand rounds, held in the convenience of real-world clinical practice, provide a forum for the interprofessional care team to learn how to contextualize emerging evidence and accelerate research into community-based clinical practice. Place of Practice grand rounds help clinical care teams improve their readiness for adoption in real-world clinical practice.
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
      <footer className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center space-x-8 mb-6">
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">PRIVACY</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">TERMS</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">COOKIES</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">ABOUT</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">ADVOCACY PARTNERS</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">CONTACT US</Link>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © AXIS Medical Education 2024. All rights reserved.
          </div>
        </div>
      </footer>

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
  );
}

'use client';

import { useState } from 'react';

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: {
    id: number;
    title: string;
    category: string;
    code: string;
    chairperson: string;
    image?: string;
  };
  onBookActivity?: () => void;
  onAskQuestion?: () => void;
}

export default function ActivityModal({ isOpen, onClose, activity, onBookActivity, onAskQuestion }: ActivityModalProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    targetAudience: true,
    purpose: false,
    activityOverview: false,
    educationalObjectives: false,
    activityAgenda: false,
    activityFee: false,
    faculty: false,
    accreditedEducation: false,
    financialDisclosure: false,
    unlabeledUse: false,
    disclaimer: false,
    safeguards: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col relative">
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 bg-white text-gray-600 hover:text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border text-xl font-bold"
        >
          ×
        </button>
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto rounded-t-lg">
        
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex gap-4 pr-8">
            <img 
              src={activity.image} 
              alt={activity.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {activity.title}
              </h2>
              <p className="text-gray-600">{activity.code}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Target Audience */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('targetAudience')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Target Audience</h3>
              <span className="text-gray-400">
                {expandedSections.targetAudience ? '−' : '+'}
              </span>
            </button>
            {expandedSections.targetAudience && (
              <div className="mt-4 text-gray-600 space-y-4">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text about target audience for this activity. Content will be updated with specific target audience details for the activity.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Target audience content here describing who should attend this activity and what professional roles would benefit most.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Purpose */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('purpose')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Purpose</h3>
              <span className="text-gray-400">
                {expandedSections.purpose ? '−' : '+'}
              </span>
            </button>
            {expandedSections.purpose && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text describing the purpose and goals of this educational activity. Content will be updated with specific purpose and objectives.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Purpose content here describing the goals and objectives of this educational activity.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Activity Overview */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('activityOverview')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Activity Overview</h3>
              <span className="text-gray-400">
                {expandedSections.activityOverview ? '−' : '+'}
              </span>
            </button>
            {expandedSections.activityOverview && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text providing an overview of the activity content, format, and key topics to be covered. Content will be updated with specific activity details.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Activity overview content here providing details about the activity format, key topics, and what participants can expect.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Educational Objectives */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('educationalObjectives')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Educational Objectives</h3>
              <span className="text-gray-400">
                {expandedSections.educationalObjectives ? '−' : '+'}
              </span>
            </button>
            {expandedSections.educationalObjectives && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text listing the educational objectives and learning outcomes for participants. Content will be updated with specific measurable objectives.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Educational objectives content here listing specific learning outcomes and goals for participants.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Activity Agenda */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('activityAgenda')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Activity Agenda</h3>
              <span className="text-gray-400">
                {expandedSections.activityAgenda ? '−' : '+'}
              </span>
            </button>
            {expandedSections.activityAgenda && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text outlining the agenda, timeline, and schedule for the activity. Content will be updated with specific timing and presentation details.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Activity agenda content here outlining the schedule, timing, and presentation topics.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Activity Fee */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('activityFee')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Activity Fee</h3>
              <span className="text-gray-400">
                {expandedSections.activityFee ? '−' : '+'}
              </span>
            </button>
            {expandedSections.activityFee && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text about activity fees and costs. Content will be updated with specific pricing information and any applicable discounts.]</p>
                  </div>
                ) : (
                  <div>
                    <p>[Activity fee content here describing costs, payment options, and any applicable discounts.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Faculty */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('faculty')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Faculty</h3>
              <span className="text-gray-400">
                {expandedSections.faculty ? '−' : '+'}
              </span>
            </button>
            {expandedSections.faculty && (
              <div className="mt-4 text-gray-600 space-y-4">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text about faculty members and their qualifications. Content will be updated with specific faculty biographies and credentials.]</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="font-medium">{activity.chairperson} (Chairperson)</p>
                      <p className="text-sm">Professor of Medicine / [Program Director]</p>
                      <p className="text-sm">[Institution Name]</p>
                      <p className="text-sm">[Location]</p>
                    </div>
                    <div>
                      <p className="font-medium">[Faculty Member 2], MD</p>
                      <p className="text-sm">Professor of Medicine</p>
                      <p className="text-sm">[Institution Name]</p>
                      <p className="text-sm">[Location]</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Accredited Continuing Education */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('accreditedEducation')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Accredited Continuing Education</h3>
              <span className="text-gray-400">
                {expandedSections.accreditedEducation ? '−' : '+'}
              </span>
            </button>
            {expandedSections.accreditedEducation && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>[Filler text about continuing education credits and accreditation information. Content will be updated with specific credit designations and accreditation details.]</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium mb-2">Accreditation Statement</p>
                    <p>[Accreditation statement content here describing the continuing education credits and accreditation details.]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Disclosure Sections */}
          {['financialDisclosure', 'unlabeledUse', 'disclaimer', 'safeguards'].map((section) => (
            <div key={section} className="border-b pb-4">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {section === 'financialDisclosure' && 'Disclosure of Relevant Financial Relationships'}
                  {section === 'unlabeledUse' && 'Disclosure of Unlabeled Use'}
                  {section === 'disclaimer' && 'Disclaimer'}
                  {section === 'safeguards' && 'Safeguards Against Commercial Bias'}
                </h3>
                <span className="text-gray-400">
                  {expandedSections[section] ? '−' : '+'}
                </span>
              </button>
              {expandedSections[section] && (
                <div className="mt-4 text-gray-600">
                  <p>[{section} content here]</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 text-center">
          <p className="text-gray-600 mb-4">Provided by AXIS Medical Education</p>
          <img src="/axis.png" alt="AXIS Medical Education" className="h-12 mx-auto mb-4" />
          <p className="text-sm text-gray-500">This activity is supported by an independent educational grant from [Sponsor Name].</p>
        </div>
        </div>
        
        {/* Fixed Bottom Menu Bar */}
        <div className="bg-white border-t shadow-lg rounded-b-lg">
          <div className="flex gap-4 justify-center py-4 px-6">
            <button 
              onClick={() => {
                onClose();
                onAskQuestion && onAskQuestion();
              }}
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              Ask a Question
            </button>
            <button 
              onClick={() => {
                onClose();
                onBookActivity && onBookActivity();
              }}
              className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              Book This Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
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
                    <p>This activity is designed for oncologists, pulmonologists, thoracic surgeons, and other healthcare professionals involved in the multidisciplinary care of patients with early-stage non-small cell lung cancer (NSCLC). Medical oncology fellows, pulmonology fellows, and thoracic surgery residents would also benefit from this educational program.</p>
                  </div>
                ) : activity.id === 2 ? (
                  <div>
                    <p>This activity is intended for hematologists, hematology/oncology physicians, and other healthcare professionals treating patients with paroxysmal nocturnal hemoglobinuria (PNH). Fellows in hematology/oncology and internal medicine physicians with an interest in hematologic disorders will also find this content valuable.</p>
                  </div>
                ) : activity.id === 3 ? (
                  <div>
                    <p>This educational program targets medical oncologists, breast cancer specialists, and healthcare professionals involved in the treatment of HR+/HER2- breast cancer. Medical oncology fellows and oncology nurses with advanced practice roles in breast cancer care will also benefit from this activity.</p>
                  </div>
                ) : activity.id === 4 ? (
                  <div>
                    <p>Designed for medical oncologists, breast cancer specialists, and multidisciplinary team members caring for patients with HR+ HER2-expressing metastatic breast cancer. Medical oncology fellows and advanced practice providers in oncology will find this content highly relevant.</p>
                  </div>
                ) : activity.id === 5 ? (
                  <div>
                    <p>This activity is tailored for hematologists, hematology/oncology physicians, and healthcare professionals managing patients with chronic myeloid leukemia (CML). Fellows in hematology/oncology and advanced practice providers in hematology will also benefit from this educational program.</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p>Intended for hematologists, hematology/oncology physicians, and healthcare professionals treating patients with relapsed or refractory follicular lymphoma. Medical oncology fellows and advanced practice providers specializing in lymphoid malignancies will find this content valuable.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p>This program targets hematologists, hematology/oncology physicians, and community-based practitioners managing patients with chronic lymphocytic leukemia (CLL), small lymphocytic lymphoma (SLL), and mantle cell lymphoma (MCL). Advanced practice providers and fellows in hematology/oncology will also benefit.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p>Designed for medical oncologists, breast cancer specialists, and community practice physicians treating patients with high-risk early breast cancer. Medical oncology fellows, oncology nurses, and advanced practice providers in breast cancer care will find this educational content highly relevant.</p>
                  </div>
                ) : (
                  <div>
                    <p>This activity is intended for medical oncologists, pulmonologists, thoracic surgeons, and multidisciplinary team members involved in the care of patients with early-stage ALK-positive NSCLC. Medical oncology fellows and pulmonology fellows will also benefit from this comprehensive educational program.</p>
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
                    <p>This educational activity aims to optimize perioperative therapy approaches in early-stage NSCLC through a comprehensive multidisciplinary framework. The program will address current evidence, emerging therapies, and collaborative care strategies to improve patient outcomes and reduce recurrence risk.</p>
                  </div>
                ) : activity.id === 2 ? (
                  <div>
                    <p>To enhance clinical understanding and management of paroxysmal nocturnal hemoglobinuria (PNH) with a focus on novel oral therapeutic options. This activity will address diagnostic challenges, treatment optimization, and patient outcome improvements through evidence-based approaches.</p>
                  </div>
                ) : activity.id === 3 ? (
                  <div>
                    <p>To advance clinical knowledge and practical application of TROP2 antibody-drug conjugates in HR+/HER2- breast cancer treatment. The program focuses on optimizing patient selection, managing treatment sequences, and improving clinical outcomes through evidence-based therapeutic strategies.</p>
                  </div>
                ) : activity.id === 4 ? (
                  <div>
                    <p>To redefine treatment paradigms across the spectrum of HR+ HER2-expressing metastatic breast cancer, with emphasis on precision medicine approaches, biomarker utilization, and personalized therapeutic strategies to optimize patient care and outcomes.</p>
                  </div>
                ) : activity.id === 5 ? (
                  <div>
                    <p>To explore novel therapeutic approaches for newly diagnosed Ph+ CML-CP patients, focusing on treatment optimization while balancing efficacy with patient quality of life goals. The program emphasizes personalized treatment strategies and long-term management considerations.</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p>To examine the evolving role and clinical applications of bispecific antibody therapy in relapsed or refractory follicular lymphoma. This educational program focuses on treatment selection, sequencing strategies, and optimizing patient outcomes through innovative therapeutic approaches.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p>To provide practice-changing insights and strategies for community-based care of patients with CLL, SLL, and MCL. The program emphasizes translating cutting-edge research into practical clinical applications for improved patient management and outcomes.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p>To explore treatment intensification strategies with CDK 4/6 inhibitors in adjuvant therapy for HR+, HER2-, high-risk early breast cancer. The program focuses on community practice perspectives, patient selection criteria, and optimizing treatment outcomes through evidence-based approaches.</p>
                  </div>
                ) : (
                  <div>
                    <p>To advance ALK inhibition strategies in early-stage NSCLC through integration of biomarker-driven therapies. This educational activity focuses on reducing recurrence risk post-resection and optimizing patient outcomes through precision medicine approaches and multidisciplinary care coordination.</p>
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
                    <p>This comprehensive program features expert presentations on perioperative therapy optimization, including neoadjuvant and adjuvant approaches in early-stage NSCLC. The activity includes interactive case discussions, mini-focus group sessions, and multidisciplinary perspectives from oncology, surgery, and pulmonology specialists. Participants will engage in evidence-based discussions on treatment sequencing, biomarker utilization, and collaborative care strategies.</p>
                  </div>
                ) : activity.id === 2 ? (
                  <div>
                    <p>This educational program provides comprehensive coverage of PNH diagnosis, management, and emerging oral therapeutics. The format includes expert presentations, case-based discussions, and practical approaches to treatment optimization. Participants will learn about novel therapeutic mechanisms, patient monitoring strategies, and outcome optimization techniques through interactive educational methodologies.</p>
                  </div>
                ) : activity.id === 3 ? (
                  <div>
                    <p>An in-depth exploration of TROP2 antibody-drug conjugates in HR+/HER2- breast cancer treatment. The program features expert presentations, clinical case discussions, and evidence-based treatment strategies. Participants will learn about patient selection criteria, treatment sequencing, toxicity management, and outcomes optimization through interactive educational formats.</p>
                  </div>
                ) : activity.id === 4 ? (
                  <div>
                    <p>This program provides comprehensive coverage of treatment approaches across the spectrum of HR+ HER2-expressing metastatic breast cancer. The educational format includes expert presentations, case-based learning, and interactive discussions on precision medicine approaches, biomarker utilization, and personalized treatment strategies for optimal patient care.</p>
                  </div>
                ) : activity.id === 5 ? (
                  <div>
                    <p>A comprehensive examination of novel treatments for newly diagnosed Ph+ CML-CP patients. The program features expert presentations, interactive case discussions, and practical approaches to treatment selection while maintaining patient quality of life. Participants will learn about treatment optimization strategies, monitoring approaches, and long-term management considerations.</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p>This educational program explores the evolving landscape of bispecific antibody therapy in relapsed or refractory follicular lymphoma. The format includes expert presentations, case-based discussions, and interactive exploration of treatment selection criteria, sequencing strategies, and patient outcome optimization through innovative therapeutic approaches.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p>A practice-focused program designed for community care settings, featuring the latest strategies in CLL, SLL, and MCL management. The educational format includes expert presentations, case-based learning, and practical implementation strategies. Participants will learn about translating research advances into community practice for improved patient outcomes.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p>This program provides community practice perspectives on treatment intensification with CDK 4/6 inhibitors in adjuvant HR+, HER2-, high-risk early breast cancer. The educational format includes expert presentations, case discussions, and practical approaches to patient selection, treatment optimization, and outcome monitoring in community practice settings.</p>
                  </div>
                ) : (
                  <div>
                    <p>A comprehensive program focusing on advancing ALK inhibition into early-stage NSCLC through biomarker-driven approaches. The educational format includes expert presentations, case-based discussions, and interactive exploration of precision medicine strategies to reduce recurrence risk post-resection and optimize patient outcomes through multidisciplinary care coordination.</p>
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
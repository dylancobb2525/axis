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
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <p>This educational activity is designed for community and academic oncologists, hematologists, hematologist-oncologists, pathologists/lab professionals, oncology nurse practitioners, physician assistants, oncology nurses, nurse navigators, clinical oncology pharmacists, and other healthcare professionals who are part of the interprofessional team responsible for the diagnosis and therapeutic management of patients with acute myeloid leukemia (AML).</p>
                ) : (
                  <p>This educational activity is designed for [target audience description here]. The content is specifically tailored for healthcare professionals involved in [relevant field] including physicians, nurses, pharmacists, and other interprofessional team members.</p>
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
                  <p>The goal of this educational activity is to examine the pathobiology of FLT3 mutations and their downstream pathways, identify FLT3 mutations through molecular testing, comprehend the mechanism of FLT3 inhibition, apply current data on the use of FLT3 inhibitors across the spectrum of disease, and address adverse events associated with FLT3 inhibitors.</p>
                ) : (
                  <p>The goal of this educational activity is to [purpose description here]. Participants will learn about [key topics] and gain practical knowledge for clinical application.</p>
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
                  <div className="space-y-4">
                    <p>Acute myeloid leukemia (AML) is a heterogeneous disease that progresses rapidly and has several sub-types defined by cytogenetic and molecular characteristics, with the genomic background known for a wide range of mutations. Disease heterogeneity makes AML treatment complex. The most common and frequently mutated gene in AML is FLT3, which encodes FMS-like tyrosine kinase 3, and is present in approximately one-third of patients with AML. With a deeper understanding of the clinicopathological features of AML, there has been an increase in FLT3-inhibitor development, classified into first- and second-generation inhibitors. The clinical strategy for treating AML differs greatly from past approaches. Targeted inhibition of FLT3 has demonstrated efficacy, with an expanding number of inhibitors available for use.</p>
                    <p>This activity will review the evidence supporting the use of FLT3 inhibitors for the treatment of AML, including identifying FLT3 mutations and expert insight into best practices for translating clinical trial results and applying guideline recommendations in the clinic, and practical examples using patient cases. The topics focus on the key clinical challenges in FLT3-mutated AML and how best to optimize treatment practices to improve patient outcomes.</p>
                  </div>
                ) : (
                  <p>[Detailed activity overview content here. This section would contain comprehensive information about the medical condition, current treatment landscape, and educational content that will be covered during the activity.]</p>
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
                <p className="mb-3">At the conclusion of this activity, participants should be better able to:</p>
                {activity.id === 1 ? (
                  <ul className="list-disc list-inside space-y-2">
                    <li>Assess the pathophysiology, cytogenetic features, prognostic stratification, and clinical features of FLT3-mutated AML to improve recognition of potential therapeutic targets early in the disease course.</li>
                    <li>Integrate evidence and updated guidelines with FLT3 inhibitors into clinical practice for patients with AML across the spectrum from newly diagnosed to maintenance to relapsed/refractory disease.</li>
                    <li>Improve patient selection across subgroups for evidence driven treatment with targeted FLT3 inhibitors, including maintenance therapy.</li>
                    <li>Demonstrate collaboration with the interprofessional team to recognize, monitor, mitigate, and manage treatment related AEs in patients receiving FLT3 inhibitors and provide supportive care.</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-2">
                    <li>[Educational objective 1 here]</li>
                    <li>[Educational objective 2 here]</li>
                    <li>[Educational objective 3 here]</li>
                    <li>[Educational objective 4 here]</li>
                  </ul>
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
                  <ul className="list-disc list-inside space-y-1">
                    <li>Activity Overview</li>
                    <li>AML Assessment</li>
                    <li>Therapeutic Planning with FLT3 Mutations</li>
                    <li>Case-Based Learning Lab</li>
                    <li>Activity Conclusion and Q&A</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-1">
                    <li>Activity Overview</li>
                    <li>[Topic-specific assessment]</li>
                    <li>[Therapeutic planning section]</li>
                    <li>Case-Based Learning Lab</li>
                    <li>Activity Conclusion and Q&A</li>
                  </ul>
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
                <p>There is no fee for this educational activity.</p>
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
                  <>
                    <div>
                      <p className="font-medium">Harry P. Erba, MD, PhD (Chairperson)</p>
                      <p className="text-sm">Professor of Medicine / Leukemia Program Director</p>
                      <p className="text-sm">Duke Cancer Institute, Duke University</p>
                      <p className="text-sm">Durham, NC</p>
                    </div>
                    <div>
                      <p className="font-medium">Jorge E. Cortes, MD</p>
                      <p className="text-sm">Professor of Medicine</p>
                      <p className="text-sm">Georgia Cancer Center at Augusta University</p>
                      <p className="text-sm">Augusta, GA</p>
                    </div>
                    <div>
                      <p className="font-medium">Justin M. Watts, MD</p>
                      <p className="text-sm">Associate Professor</p>
                      <p className="text-sm">University of Miami</p>
                      <p className="text-sm">Miami, FL</p>
                    </div>
                    <div>
                      <p className="font-medium">Roland B. Walter, MD, MS, PhD</p>
                      <p className="text-sm">Professor Translational Science and Therapeutics</p>
                      <p className="text-sm">Fred Hutchinson Cancer Center</p>
                      <p className="text-sm">Seattle, Washington</p>
                    </div>
                    <div>
                      <p className="font-medium">Tara L. Lin, MD</p>
                      <p className="text-sm">Professor, Division of Hematologic Malignancies and Cellular Therapeutics,</p>
                      <p className="text-sm">Director, Acute Leukemia Program</p>
                      <p className="text-sm">University of Kansas Cancer Center</p>
                      <p className="text-sm">Kansas City, Kansas</p>
                    </div>
                    <div>
                      <p className="font-medium">Joshua Zeidner, MD</p>
                      <p className="text-sm">Professor of Medicine</p>
                      <p className="text-sm">University of North Carolina,</p>
                      <p className="text-sm">Lineberger Comprehensive Cancer Center</p>
                      <p className="text-sm">Chapel Hill, North Carolina</p>
                    </div>
                  </>
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
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium mb-3">Accreditation Statement</p>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex gap-2">
                          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-teal-600 text-xs font-bold">IPCE</span>
                          </div>
                          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">IPCE CREDIT</span>
                          </div>
                        </div>
                      </div>
                      <p className="mb-4">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC).</p>
                      <p className="mb-4">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Credit Designation for Physicians</h4>
                      <p>AXIS Medical Education designates this live activity for a maximum of 1.0 AMA PRA Category 1 Credit(s)™. Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Credit Designation for Physician&apos;s Assistants</h4>
                      <div className="flex items-start gap-4 mb-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PA</span>
                        </div>
                      </div>
                      <p>AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credit. Approval is valid until June 30, 2024. PAs should only claim credit commensurate with the extent of their participation.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Credit Designation for Pharmacists</h4>
                      <p>This knowledge-based activity is approved for 0.5 contact hour of continuing pharmacy education JA4008106-0000-24-035-H01-P.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Credit Designation for Nursing</h4>
                      <p className="mb-2">AXIS Medical Education designates this continuing nursing education activity for 0.5 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Laboratory Professionals</h4>
                      <p>This continuing medical laboratory education activity is recognized by the American Society for Clinical Pathology as meeting the criteria for 0.5 CMLE credit. ASCP CMLE credits are acceptable to meet the continuing education requirement for the ASCP Board of Registry Certification Maintenance Program.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">AXIS Contact Information</h4>
                      <p>For information about the certification of this activity, please contact AXIS at info@axismeded.com</p>
                    </div>
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
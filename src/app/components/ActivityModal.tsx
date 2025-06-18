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
  const [expandedSections, setExpandedSections] = useState({
    programSchedule: false,
    disclosures: false,
    learningObjectives: false,
    targetAudience: false,
    accreditationStatements: false,
    creditDesignation: false,
    provider: false,
    commercialSupport: false,
    disclaimer: false,
    additional: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {activity.code}
                </span>
                {activity.id === 1 && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">{activity.title}</h2>
              <p className="text-blue-100 mb-2">{activity.category}</p>
              <p className="text-blue-100">
                <span className="font-medium">{activity.chairperson}</span> (Chairperson)
              </p>
            </div>
        <button
          onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold ml-4"
        >
          ×
        </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-4">
          
          {/* Program Schedule - Only for activities 4, 5, 6, 7, 8 and 9 */}
          {(activity.id === 4 || activity.id === 5 || activity.id === 6 || activity.id === 7 || activity.id === 8 || activity.id === 9) && (
            <div className="border-b pb-4">
              <button
                onClick={() => toggleSection('programSchedule')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">Program Schedule</h3>
                <span className="text-gray-400">
                  {expandedSections.programSchedule ? '−' : '+'}
                </span>
              </button>
              {expandedSections.programSchedule && (
                <div className="mt-4 text-gray-600">
                  {activity.id === 6 ? (
            <div>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Introduction</li>
                        <li>Expanding Bispecific Antibody Therapy Through Community-Based Hematology/Oncology Clinicians and Care Teams</li>
                        <li>Developing Evidence-Based Strategies for Patient Selection for Bispecific Antibody Therapy</li>
                        <li>Practical Considerations in the Application of Bispecific Antibody Therapy in R/R FL</li>
                        <li>Optimizing Safety via Interprofessional and Team-Based Coordination</li>
                        <li>Emerging Directions with Potential to Shape the Landscape</li>
                        <li>Case-Based Learning Lab</li>
                        <li>Audience Q&A</li>
                      </ul>
                      <p className="text-sm italic mt-2">*Subject to change</p>
            </div>
                  ) : activity.id === 7 ? (
                    <div>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Introduction</li>
                        <li>Mechanisms and Advantages of BTK Inhibitors</li>
                        <li>Clinical Efficacy and Safety Profiles</li>
                        <li>Management Strategies for Adverse Events</li>
                        <li>Practical Application: Case-based Learning Lab</li>
                        <li>Activity Conclusion and Q&A</li>
                      </ul>
                      <p className="text-sm italic mt-2">*Subject to change</p>
          </div>
                  ) : activity.id === 8 ? (
                    <div>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Introduction</li>
                        <li>When, and in whom, is treatment intensification needed to prevent recurrence?</li>
                        <li>Optimizing adjuvant therapy to sustain clinical benefit</li>
                        <li>Implementation of evidence into treatment planning</li>
                        <li>Engaging the patient to maximize adherence and persistence</li>
                        <li>Practical Application Case-Based Learning Lab</li>
                        <li>Activity Conclusion and Q&A</li>
                      </ul>
                      <p className="text-sm italic mt-2">*Subject to change</p>
        </div>
                  ) : activity.id === 9 ? (
                    <div>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Pre-assessment questions</li>
                        <li>Overview of key oncogenic drivers of NSCLC</li>
                        <li>Identifying ALK-positive patients at high risk for recurrence in the community setting</li>
                        <li>Rationale to improve disease control in resected ALK-positive NSCLC</li>
                        <li>Emerging directions in early stage ALK-positive NSCLC</li>
                        <li>Skills and interprofessional team-based strategies needed to adopt adjuvant targeted therapies in the community setting</li>
                        <li>Addressing the absence of mature OS data for targeted therapies in the adjuvant setting</li>
                        <li>Case-Based Learning Lab</li>
                        <li>Conclusion/Q&A/Discussion</li>
                        <li>Post-assessment questions</li>
                      </ul>
                      <p className="text-sm italic mt-2">*Subject to change</p>
                    </div>
                  ) : (
                    <div>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Pre-Assessment</li>
                        <li>Overview of Current Treatments: Intervention and Management of CML Patients</li>
                        <li>What are the Treatment Goals in CML-CP?</li>
                        <li>Practice Strategies for Adverse Events Related to TKIs</li>
                        <li>Practical Application Case-Based Learning Lab</li>
                        <li>Summary & Conclusion</li>
                        <li>Audience Q&A</li>
                        <li>Post-Assessment Questions</li>
                      </ul>
                      <p className="text-sm italic mt-2">*subject to change</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {/* Disclosures of Relevant Financial Relationships */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('disclosures')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Disclosures of Relevant Financial Relationships</h3>
              <span className="text-gray-400">
                {expandedSections.disclosures ? '−' : '+'}
              </span>
            </button>
            {expandedSections.disclosures && (
              <div className="mt-4 text-gray-600 space-y-4">
                {activity.id === 1 ? (
                  <div className="space-y-6">
                    <p>In accordance with the ACCME Standards for Integrity and Independence, Global Learning Collaborative (GLC) requires that individuals in a position to control the content of an educational activity disclose all relevant financial relationships with any ineligible company. GLC mitigates all conflicts of interest to ensure independence, objectivity, balance, and scientific rigor in all its educational programs.</p>
                    
                  <div>
                      <p className="font-semibold text-gray-800 mb-2">Chair:</p>
                      <div className="space-y-1">
                        <p className="font-medium">Heather Wakelee, MD, FASCO</p>
                        <p>Winston Chen and Phyllis Huang Professor</p>
                        <p>Professor of Medicine; Chief, Division of Oncology</p>
                        <p>Deputy Director, Stanford Cancer Institute</p>
                        <p>Stanford University School of Medicine</p>
                        <p>Past President, International Association for the Study of Lung Cancer</p>
                        <p>Stanford, CA</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Heather Wakelee, MD, FASCO, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                      <p><span className="font-medium">Advisory board:</span> BeiGene LTD, GlaxoSmithKline., IO Biotech, Inc., OncoC4</p>
                      <p><span className="font-medium">Consultant:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company – Ended, Chugai Pharmaceutical Co., Ltd., Genentech/Roche, Merck & Co.</p>
                      <p><span className="font-medium">Contracted research, Clinical trial support to institution:</span> AstraZeneca Pharmaceuticals LP, Bayer Pharmaceuticals Corporation, Bristol-Myers Squibb Company, Genentech/Roche, Georgetown via IIT (Gilead), Helsinn Therapeutics (US) Inc. - Ended, Merck & Co., Inc., SeaGen, Xcovery</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Faculty:</p>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Stephen V. Liu, MD</p>
                          <p>Director, Thoracic Oncology</p>
                          <p>Georgetown University</p>
                          <p>Washington, DC</p>
                          <p className="mt-2 font-medium">Stephen V. Liu, MD, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> AbbVie, Amgen, Inc., AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Bristol-Myers Squibb Company, Daiichi Sankyo Company, Ltd., Genentech/Roche, Gilead, GlaxoSmithKline, Guardant Health, Inc., Jazz Pharmaceuticals plc, Johnson & Johnson, Lilly USA, Merck & Co., Inc., Merus, Mirati Therapeutics, Natera, Inc., Novartis Pharmaceuticals Corporation, OSE Immunotherapeutics, Pfizer, Inc., Regeneron Pharmaceuticals, Inc., Revolution Medicines, Takeda, Yuhan</p>
                          <p><span className="font-medium">Contracted research:</span> AbbVie, Alkermes, AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, Cogent Biosciences, Duality, Elevation Oncology, Ellipses, Genentech, Inc., Gilead, Medilink, Nuvalent, OSE Immunotherapeutics, PUMA Biotechnology, RAPT, Synthekine, SystImmune Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Patrick Forde, MBBCH</p>
                          <p>Professor</p>
                          <p>Trinity College/Johns Hopkins</p>
                          <p>Baltimore, MD</p>
                          <p className="mt-2 font-medium">Patrick Forde, MBBCh, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> Amgen, Ascenta Therapeutics, Inc., AstraZeneca Pharmaceuticals LP, BioNTech, Bristol-Myers Squibb Company, Curevac, F Star, Flame, Fosun, G1 Therapeutics, Genelux, Gritstone, Iteos, Janssen Pharmaceuticals, Inc., Merck & Co., Inc., Novartis Pharmaceuticals Corporation, Regeneron Pharmaceuticals, Inc., Sanofi, Synthekine, Tavotek, Teva Pharmaceuticals</p>
                          <p><span className="font-medium">Contracted research:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, BionTech, Regeneron Pharmaceuticals, Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Jaime E. Chaft, MD, FASCO</p>
                          <p>Attending Physician</p>
                          <p>Memorial Sloan Kettering Cancer Center</p>
                          <p>New York, NY</p>
                          <p className="mt-2 font-medium">Jamie E. Chaft, MD, FASCO, reported a financial interest/relationship or affiliation in the form of Consultant, Bristol-Myers Squibb Company, AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Genentech/Roche, Lilly USA, Merck & Co., Inc., Natera, Inc., Contracted research to institution, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Bristol-Myers Squibb Company, Genentech, Inc., Lilly USA., Merck & Co., Inc.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Reviewers/Content Planners/Authors:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Tim Person has no relevant relationships to disclose.</li>
                        <li>Wilma Guerra has no relevant relationships to disclose.</li>
                        <li>Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</li>
                        <li>Marilyn L. Haas, PhD, RN, CNS, ANP-BC has no relevant relationships to disclose</li>
                        <li>Adrienne N. Nedved, PharmD., MPA., BCOP has no relevant relationships to disclose</li>
                        <li>Melissa Duffy, PA-C has no relevant relationships to disclose</li>
                      </ul>
                    </div>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div className="space-y-6">
                    <p>In accordance with the ACCME Standards for Integrity and Independence, Global Learning Collaborative (GLC) requires that individuals in a position to control the content of an educational activity disclose all relevant financial relationships with any ineligible company. GLC mitigates all conflicts of interest to ensure independence, objectivity, balance, and scientific rigor in all its educational programs.</p>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Chair:</p>
                      <div className="space-y-1">
                        <p className="font-medium">Heather Wakelee, MD, FASCO</p>
                        <p>Winston Chen and Phyllis Huang Professor</p>
                        <p>Professor of Medicine; Chief, Division of Oncology</p>
                        <p>Deputy Director, Stanford Cancer Institute</p>
                        <p>Stanford University School of Medicine</p>
                        <p>Past President, International Association for the Study of Lung Cancer</p>
                        <p>Stanford, CA</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Heather Wakelee, MD, FASCO, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                      <p><span className="font-medium">Advisory board:</span> BeiGene LTD, GlaxoSmithKline., IO Biotech, Inc., OncoC4</p>
                      <p><span className="font-medium">Consultant:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company – Ended, Chugai Pharmaceutical Co., Ltd., Genentech/Roche, Merck & Co.</p>
                      <p><span className="font-medium">Contracted research, Clinical trial support to institution:</span> AstraZeneca Pharmaceuticals LP, Bayer Pharmaceuticals Corporation, Bristol-Myers Squibb Company, Genentech/Roche, Georgetown via IIT (Gilead), Helsinn Therapeutics (US) Inc. - Ended, Merck & Co., Inc., SeaGen, Xcovery</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Faculty:</p>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Stephen V. Liu, MD</p>
                          <p>Director, Thoracic Oncology</p>
                          <p>Georgetown University</p>
                          <p>Washington, DC</p>
                          <p className="mt-2 font-medium">Stephen V. Liu, MD, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> AbbVie, Amgen, Inc., AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Bristol-Myers Squibb Company, Daiichi Sankyo Company, Ltd., Genentech/Roche, Gilead, GlaxoSmithKline, Guardant Health, Inc., Jazz Pharmaceuticals plc, Johnson & Johnson, Lilly USA, Merck & Co., Inc., Merus, Mirati Therapeutics, Natera, Inc., Novartis Pharmaceuticals Corporation, OSE Immunotherapeutics, Pfizer, Inc., Regeneron Pharmaceuticals, Inc., Revolution Medicines, Takeda, Yuhan</p>
                          <p><span className="font-medium">Contracted research:</span> AbbVie, Alkermes, AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, Cogent Biosciences, Duality, Elevation Oncology, Ellipses, Genentech, Inc., Gilead, Medilink, Nuvalent, OSE Immunotherapeutics, PUMA Biotechnology, RAPT, Synthekine, SystImmune Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Patrick Forde, MBBCH</p>
                          <p>Professor</p>
                          <p>Trinity College/Johns Hopkins</p>
                          <p>Baltimore, MD</p>
                          <p className="mt-2 font-medium">Patrick Forde, MBBCh, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> Amgen, Ascenta Therapeutics, Inc., AstraZeneca Pharmaceuticals LP, BioNTech, Bristol-Myers Squibb Company, Curevac, F Star, Flame, Fosun, G1 Therapeutics, Genelux, Gritstone, Iteos, Janssen Pharmaceuticals, Inc., Merck & Co., Inc., Novartis Pharmaceuticals Corporation, Regeneron Pharmaceuticals, Inc., Sanofi, Synthekine, Tavotek, Teva Pharmaceuticals</p>
                          <p><span className="font-medium">Contracted research:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, BionTech, Regeneron Pharmaceuticals, Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Jaime E. Chaft, MD, FASCO</p>
                          <p>Attending Physician</p>
                          <p>Memorial Sloan Kettering Cancer Center</p>
                          <p>New York, NY</p>
                          <p className="mt-2 font-medium">Jamie E. Chaft, MD, FASCO, reported a financial interest/relationship or affiliation in the form of Consultant, Bristol-Myers Squibb Company, AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Genentech/Roche, Lilly USA, Merck & Co., Inc., Natera, Inc., Contracted research to institution, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Bristol-Myers Squibb Company, Genentech, Inc., Lilly USA., Merck & Co., Inc.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Reviewers/Content Planners/Authors:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Tim Person has no relevant relationships to disclose.</li>
                        <li>Wilma Guerra has no relevant relationships to disclose.</li>
                        <li>Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</li>
                        <li>Marilyn L. Haas, PhD, RN, CNS, ANP-BC has no relevant relationships to disclose</li>
                        <li>Adrienne N. Nedved, PharmD., MPA., BCOP has no relevant relationships to disclose</li>
                        <li>Melissa Duffy, PA-C has no relevant relationships to disclose</li>
                      </ul>
                    </div>
                  </div>
                ) : activity.id === 3 ? (
                  <div className="space-y-6">
                    <p>In accordance with the ACCME Standards for Integrity and Independence, Global Learning Collaborative (GLC) requires that individuals in a position to control the content of an educational activity disclose all relevant financial relationships with any ineligible company. GLC mitigates all conflicts of interest to ensure independence, objectivity, balance, and scientific rigor in all its educational programs.</p>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Chair:</p>
                      <div className="space-y-1">
                        <p className="font-medium">Heather Wakelee, MD, FASCO</p>
                        <p>Winston Chen and Phyllis Huang Professor</p>
                        <p>Professor of Medicine; Chief, Division of Oncology</p>
                        <p>Deputy Director, Stanford Cancer Institute</p>
                        <p>Stanford University School of Medicine</p>
                        <p>Past President, International Association for the Study of Lung Cancer</p>
                        <p>Stanford, CA</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Heather Wakelee, MD, FASCO, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                      <p><span className="font-medium">Advisory board:</span> BeiGene LTD, GlaxoSmithKline., IO Biotech, Inc., OncoC4</p>
                      <p><span className="font-medium">Consultant:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company – Ended, Chugai Pharmaceutical Co., Ltd., Genentech/Roche, Merck & Co.</p>
                      <p><span className="font-medium">Contracted research, Clinical trial support to institution:</span> AstraZeneca Pharmaceuticals LP, Bayer Pharmaceuticals Corporation, Bristol-Myers Squibb Company, Genentech/Roche, Georgetown via IIT (Gilead), Helsinn Therapeutics (US) Inc. - Ended, Merck & Co., Inc., SeaGen, Xcovery</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Faculty:</p>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Stephen V. Liu, MD</p>
                          <p>Director, Thoracic Oncology</p>
                          <p>Georgetown University</p>
                          <p>Washington, DC</p>
                          <p className="mt-2 font-medium">Stephen V. Liu, MD, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> AbbVie, Amgen, Inc., AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Bristol-Myers Squibb Company, Daiichi Sankyo Company, Ltd., Genentech/Roche, Gilead, GlaxoSmithKline, Guardant Health, Inc., Jazz Pharmaceuticals plc, Johnson & Johnson, Lilly USA, Merck & Co., Inc., Merus, Mirati Therapeutics, Natera, Inc., Novartis Pharmaceuticals Corporation, OSE Immunotherapeutics, Pfizer, Inc., Regeneron Pharmaceuticals, Inc., Revolution Medicines, Takeda, Yuhan</p>
                          <p><span className="font-medium">Contracted research:</span> AbbVie, Alkermes, AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, Cogent Biosciences, Duality, Elevation Oncology, Ellipses, Genentech, Inc., Gilead, Medilink, Nuvalent, OSE Immunotherapeutics, PUMA Biotechnology, RAPT, Synthekine, SystImmune Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Patrick Forde, MBBCH</p>
                          <p>Professor</p>
                          <p>Trinity College/Johns Hopkins</p>
                          <p>Baltimore, MD</p>
                          <p className="mt-2 font-medium">Patrick Forde, MBBCh, has reported the following relevant financial relationships or relationships with ineligible companies of any amount during the past 24 months:</p>
                          <p><span className="font-medium">Consultant:</span> Amgen, Ascenta Therapeutics, Inc., AstraZeneca Pharmaceuticals LP, BioNTech, Bristol-Myers Squibb Company, Curevac, F Star, Flame, Fosun, G1 Therapeutics, Genelux, Gritstone, Iteos, Janssen Pharmaceuticals, Inc., Merck & Co., Inc., Novartis Pharmaceuticals Corporation, Regeneron Pharmaceuticals, Inc., Sanofi, Synthekine, Tavotek, Teva Pharmaceuticals</p>
                          <p><span className="font-medium">Contracted research:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, BionTech, Regeneron Pharmaceuticals, Inc.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Jaime E. Chaft, MD, FASCO</p>
                          <p>Attending Physician</p>
                          <p>Memorial Sloan Kettering Cancer Center</p>
                          <p>New York, NY</p>
                          <p className="mt-2 font-medium">Jamie E. Chaft, MD, FASCO, reported a financial interest/relationship or affiliation in the form of Consultant, Bristol-Myers Squibb Company, AstraZeneca Pharmaceuticals LP, Boehringer Ingelheim, Genentech/Roche, Lilly USA, Merck & Co., Inc., Natera, Inc., Contracted research to institution, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Bristol-Myers Squibb Company, Genentech, Inc., Lilly USA., Merck & Co., Inc.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Reviewers/Content Planners/Authors:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Tim Person has no relevant relationships to disclose.</li>
                        <li>Wilma Guerra has no relevant relationships to disclose.</li>
                        <li>Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</li>
                        <li>Marilyn L. Haas, PhD, RN, CNS, ANP-BC has no relevant relationships to disclose</li>
                        <li>Adrienne N. Nedved, PharmD., MPA., BCOP has no relevant relationships to disclose</li>
                        <li>Melissa Duffy, PA-C has no relevant relationships to disclose</li>
                      </ul>
                    </div>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div className="space-y-6">
                    <p>AXIS Medical Education requires faculty, instructors, authors, planners, directors, managers, peer reviewers, and other individuals who are in a position to control the content of this activity to disclose all personal financial relationships they may have in the past 24 months with ineligible companies. An ineligible entity is any organization whose primary business is producing, marketing, selling, re-selling, or distributing healthcare products used by or on patients. All relevant financial relationships are identified and mitigated prior to initiation of the planning phase for an activity.</p>
                    
                    <p>AXIS has mitigated and disclosed to learners all relevant financial relationships disclosed by staff, planners, faculty/authors, peer reviewers, or others in control of content for this activity. Disclosure of a relationship is not intended to suggest or condone bias in any presentation but is made to provide participants with information that might be of potential importance to their evaluation of a presentation or activity. Disclosure information for faculty, authors, course directors, planners, peer reviewers, and/or relevant staff is provided with this activity.</p>
                    
                    <p>The faculty reported the following relevant financial relationships or relationships they have with ineligible companies of any amount during the past 24 months:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Jorge E. Cortes, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> Novartis Pharmaceuticals, Pfizer, Takeda Oncology, Sun Pharma, Tern Pharma, Ascentage, Bio Path Holdings, Nerviano</p>
                        <p><span className="font-medium">Research/Grants:</span> Novartis Pharmaceuticals, Sun Pharma, Ascentage, CytoAgents, Kuro</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Gabriela Hobbs, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisory board/consulting:</span> Bristol-Myers Squibb Company, GlaxoSmithKline, Pfizer, Novartis Pharmaceuticals Corporation, MorphoSys, PharmaEssentia, Cogent, Incyte Corporation, Sobi</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Moshe Talpaz, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisory board:</span> Novartis Pharmaceuticals Corporation-Ended, Sumitomo-Ended.</p>
                        <p><span className="font-medium">Contracted research:</span> Bristol-Myers Squibb Company</p>
                        <p><span className="font-medium">Research grant:</span> Bristol-Myers Squibb Company</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Richard A. Larson, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant or Advisor:</span> Amgen, Ariad/Takeda (DMC), Astellas Pharma US, Celgene/BMS (DMC), CVS/Caremark, Epizyme (DMC), ImmunoGen, MedPace, MorphoSys, Novartis Pharmaceuticals Corporation, Servier</p>
                        <p><span className="font-medium">Received income in any amount to do editing:</span> Royalties from UpToDate, Inc.</p>
                        <p><span className="font-medium">Contracted research paid to institution:</span> Astellas Pharma US, Biomea, Celgene Corporation, Cellectis, Daiichi-Sankyo, Forty Seven/Gilead, Novartis Pharmaceuticals Corporation, Rafael Pharmaceuticals</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Daniel J. DeAngelo, MD, PhD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> Amgen, Autolus, Blueprint, Gilead, Jazz Pharmaceuticals plc, Novartis Pharmaceuticals Corporation, Pfizer, Inc., Servier, Takeda Oncology</p>
                        <p><span className="font-medium">Research grant:</span> AbbVie, Novartis Pharmaceuticals Corporation, Blueprint, GlycoMimetics, Inc.</p>
                      </div>
                    </div>
                    
                    <p>The directors, planners, managers, peer reviewers, and relevant staff reported the following financial relationships they have with any ineligible company of any amount during the past 24 months: Linda Gracie-King, MS; Wilma Guerra, BELS; Marilyn L. Haas-Haseman, PhD, RN, CNS, ANP-BC; Melissa Duffy, PA-C; Adrienne N. Nedved, PharmD, MPA, BCOP; and Dee Morgillo, MEd., MT(ASCP), CHCP, hereby state that they do not have any financial relationships or relationships with any ineligible company of in any amount during the past 24 months. Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div className="space-y-6">
                    <p>AXIS Medical Education requires faculty, instructors, authors, planners, directors, managers, peer reviewers, and other individuals who are in a position to control the content of this activity to disclose all personal financial relationships they may have in the past 24 months with ineligible companies. An ineligible entity is any organization whose primary business is producing, marketing, selling, re-selling, or distributing healthcare products used by or on patients. All relevant financial relationships are identified and mitigated prior to initiation of the planning phase for an activity.</p>
                    
                    <p>AXIS has mitigated and disclosed to learners all relevant financial relationships disclosed by staff, planners, faculty/authors, peer reviewers, or others in control of content for this activity. Disclosure of a relationship is not intended to suggest or condone bias in any presentation but is made to provide participants with information that might be of potential importance to their evaluation of a presentation or activity. Disclosure information for faculty, authors, course directors, planners, peer reviewers, and/or relevant staff is provided with this activity.</p>
                    
                    <p>The faculty reported the following relevant financial relationships or relationships they have with ineligible companies of any amount during the past 24 months:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Tycel J. Phillips, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisor:</span> AbbVie, ADCT, AstraZeneca Pharmaceuticals LP, Bayer HealthCare, Inc., BeiGene LTD, Bristol-Myers Squibb Company, Eli Lilly and Company, Genmab, Genentech, Inc., Ipsen Pharmaceuticals, Incyte Corporation, Morphosys, Pharmacyclics, Inc., Xencor & Sobi.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Tatyana Feldman, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> ADCT, AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, Epizyme, Genmab, Seagen, Pharmacyclics, Inc., Gilead Sciences.</p>
                        <p><span className="font-medium">Speaker:</span> Seagen, Genmab.</p>
                        <p><span className="font-medium">Ownership interest:</span> Genomic Testing Cooperative OMI.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Craig Okada, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisor:</span> ADC Therapeutics, ONO Pharmaceutical Co., LTD.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Julio C. Chavez, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> AstraZeneca Pharmaceuticals LP, Autolus, BeiGene LTD, Bristol-Myers Squibb Company, Genentech, Inc., GenMab, Kite/Gilead, Lilly USA., Novartis Pharmaceuticals Corporation.</p>
                        <p><span className="font-medium">Serve(d) as a speaker or a member of a speakers bureau for:</span> Lilly USA.</p>
                        <p><span className="font-medium">Research grant:</span> GenMab, Kite/Gilead, Merck & Co., Inc.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Joshua D. Brody, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Contracted research:</span> Seagen, Bristol-Myers Squibb Company, Genentech/Roche, Merck & Co., Inc., ADC Therapeutics, Pfizer, Inc., AstraZeneca Pharmaceuticals LP, AbbVie, Genmab, Innate Pharma.</p>
                      </div>
                    </div>
                    
                    <p>The directors, planners, managers, peer reviewers, and relevant staff reported the following financial relationships they have with any ineligible company of any amount during the past 24 months: Linda Gracie-King, MS; Jocelyn Timko, BS; Marilyn L. Haas-Haseman, PhD, RN, CNS, ANP-BC; Melissa Duffy, PA-C; and Adrienne N. Nedved, PharmD, MPA, BCOP, hereby state that they do not have any financial relationships or relationships with any ineligible company of in any amount during the past 24 months. Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div className="space-y-6">
                    <p>AXIS Medical Education requires faculty, instructors, authors, planners, directors, managers, peer reviewers, and other individuals who are in a position to control the content of this activity to disclose all personal financial relationships they may have in the past 24 months with ineligible companies. An ineligible entity is any organization whose primary business is producing, marketing, selling, re-selling, or distributing healthcare products used by or on patients. All relevant financial relationships are identified and mitigated prior to initiation of the planning phase for an activity.</p>
                    
                    <p>AXIS has mitigated and disclosed to learners all relevant financial relationships disclosed by staff, planners, faculty/authors, peer reviewers, or others in control of content for this activity. Disclosure of a relationship is not intended to suggest or condone bias in any presentation but is made to provide participants with information that might be of potential importance to their evaluation of a presentation or activity. Disclosure information for faculty, authors, course directors, planners, peer reviewers, and/or relevant staff is provided with this activity.</p>
                    
                    <p>The faculty reported the following relevant financial relationships or relationships they have with ineligible companies of any amount during the past 24 months.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Matthew S. Davids, MD, MMSc, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> AbbVie, Ascentage Pharma, Adaptive Biotechnologies, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Bristol-Myers Squibb Company, Lilly, Genentech, Inc., Genmab, Janssen, Merck, MEI Pharma, Nuvalent, SecuraBio, Takeda Oncology & TG Therapeutics, Inc.</p>
                        <p><span className="font-medium">Research grant:</span> Novartis Pharmaceuticals Corporation, Ascentage Pharma & MEI Pharma.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Catherine Coombs, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> AbbVie, Allogene, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Genentech, Inc., Janssen Oncology, Lilly USA, MEI Pharma, Mingsight & Octapharma.</p>
                        <p><span className="font-medium">Speaker:</span> AbbVie, AstraZeneca Pharmaceuticals LP, BeiGene LTD, Genentech, Inc. & Lilly USA.</p>
                        <p><span className="font-medium">Research grant honorarium paid to institution:</span> AbbVie, CarnaBio & Lilly USA.</p>
                        <p><span className="font-medium">Ownership interest:</span> Pfizer, Inc., Geron, Bluebird Bio, Inc.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">John C. Byrd, MD, FACP, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Research support:</span> Eileen Therapeutics, Newave, Orange Grove Bio & Orbimed.</p>
                        <p><span className="font-medium">Consultant:</span> Eilean Therapeutics, Orbimed, OSU Drug Devel Inst, Kartos & AstraZeneca Pharmaceuticals LP.</p>
                        <p><span className="font-medium">Stockholder:</span> Vincerx Pharma, Eileen Therapeutics, & Kurome.</p>
                        <p><span className="font-medium">Advisory board:</span> Vincerx Pharma, Eileen Therapeutics Newave, Orange Grove Bio, Kurome, Kartos & Abbvie.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Reem Karmali, MD, MS, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisory board:</span> Miltenyi, BeiGene LTD, AstraZeneca Pharmaceuticals LP, Roche/Genentech, AbbVie & Genmab.</p>
                        <p><span className="font-medium">Speaker:</span> BeiGene LTD, Ipsen Pharmaceuticals, AstraZeneca Pharmaceuticals LP & Incyte Corporation.</p>
                        <p><span className="font-medium">Research grant:</span> BeiGene LTD & AbbVie.</p>
                      </div>
                    </div>
                    
                    <p>The directors, planners, managers, peer reviewers, and relevant staff reported the following financial relationships they have with any ineligible company of any amount during the past 24 months: Linda Gracie-King, MS: Jocelyn Timko, BS; Marilyn L. Haas-Haseman, PhD, RN, CNS, ANP-BC; Melissa Duffy, PA-C; Adrienne N. Nedved, PharmD, MPA, BCOP; and Dee Morgillo, MEd, MT(ASCP), CHCP hereby state that they do not have any financial relationships or relationships with any ineligible company of in any amount during the past 24 months. Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div className="space-y-6">
                    <p>AXIS Medical Education requires faculty, instructors, authors, planners, directors, managers, peer reviewers, and other individuals who are in a position to control the content of this activity to disclose all personal financial relationships they may have in the past 24 months with ineligible companies. An ineligible entity is any organization whose primary business is producing, marketing, selling, re-selling, or distributing healthcare products used by or on patients. All relevant financial relationships are identified and mitigated prior to initiation of the planning phase for an activity.</p>
                    
                    <p>AXIS has mitigated and disclosed to learners all relevant financial relationships disclosed by staff, planners, faculty/authors, peer reviewers, or others in control of content for this activity. Disclosure of a relationship is not intended to suggest or condone bias in any presentation but is made to provide participants with information that might be of potential importance to their evaluation of a presentation or activity. Disclosure information for faculty, authors, course directors, planners, peer reviewers, and/or relevant staff is provided with this activity.</p>
                    
                    <p>The faculty reported the following relevant financial relationships or relationships they have with ineligible companies of any amount during the past 24 months:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Adam Brufsky, MD, PhD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> AstraZeneca Pharmaceuticals LP, Agendia, Blueprint Medicines, Caris, Daiichi-Sankyo, Inc., Epic Biosciences, Genentech/Roche, Gilead, Lilly, Merck & Co., Inc., Myriad Genetics, Inc., Novartis Pharmaceuticals Corporation, Pfizer, Inc., PUMA, Sanofi, SeaGen & Tempus.</p>
                        <p><span className="font-medium">Research grant:</span> Agendia.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Aditya Bardia, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Research grant:</span> Genentech, Inc., Merck & Co., Inc., Novartis Pharmaceuticals Corporation, Pfizer, Inc., Sanofi, Menarini Pharma, Gilead, Daiichi-Sankyo, Inc./Astra Zeneca & Eli Lilly and Company.</p>
                        <p><span className="font-medium">Received income in any amount from:</span> Pfizer, Inc., Novartis Pharmaceuticals Corporation, Genentech, Inc., Merck & Co., Inc., Menarini Pharma, Gilead, Sanofi, Daiichi-Sankyo, Inc/Astra Zeneca & Eli Lilly and Company.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Andrew D. Seidman, MD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Speaker/Consultant:</span> Eli Lilly and Company, Gilead, Novartis Pharmaceuticals Corporation, Stemline, Merck & Co., Inc., AstraZeneca Pharmaceuticals LP, Genentech, Inc. & Exact Sciences.</p>
                        <p><span className="font-medium">Research grant:</span> SeaGen.</p>
                        <p><span className="font-medium">Contracted research:</span> SeaGen (Pfizer).</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Reshma L. Mahtani, DO, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> Agendia, AstraZeneca Pharmaceuticals LP, Daiichi-Sankyo, Inc., Eisai Inc., Genentech, Inc., Gilead, Hologic, Lilly, Novartis Pharmaceuticals Corporation, Pfizer, Inc., Sanofi, SeaGen & Stemline.</p>
                        <p><span className="font-medium">Research grant:</span> Gilead.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Komal Jhaveri, MD, FACP, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> AbbVie, AstraZeneca Pharmaceuticals LP, Blueprint Medicines, Bristol-Myers Squibb Company, Daiichi-Sankyo, Inc., Eisai Inc., Genentech - A member of the Roche Group, Gilead Sciences, Jounce Therapeutics, Loxo Oncology, Inc, a wholly-owned subsidiary of Eli Lilly & Company, Menarini Group, Novartis Pharmaceuticals Corporation, Olema Oncology, Pfizer, Inc., Scorpion Therapeutics, Seagen Inc, Stremline Therapeutics Inc, Sun Pharma Advanced Research Company Ltd & Taiho Pharmaceutical Co.</p>
                        <p><span className="font-medium">Contracted research:</span> AstraZeneca Pharmaceuticals LP, Debiopharm, Genentech - A member of the Roche Group, Gilead Sciences, Loxo Oncology, Inc, a wholly-owned subsidiary of Eli Lilly & Company, Merck & Co, Inc., Novartis Pharmaceuticals Corporation, Pfizer, Inc., PUMA Biotechnology, Scorpion Therapeutics & Zymeworks Inc.</p>
                      </div>
                    </div>
                    
                    <p>The directors, planners, managers, peer reviewers, and relevant staff reported the following financial relationships they have with any ineligible company of any amount during the past 24 months: Linda Gracie-King, MS: Jocelyn Timko, BS; Marilyn L. Haas-Haseman, PhD, RN, CNS, ANP-BC; Melissa Duffy, PA-C; and Adrienne N. Nedved, PharmD, MPA, BCOP, hereby state that they do not have any financial relationships or relationships with any ineligible company of in any amount during the past 24 months. Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</p>
                  </div>
                ) : activity.id === 9 ? (
                  <div className="space-y-6">
                    <p>AXIS Medical Education requires faculty, instructors, authors, planners, directors, managers, peer reviewers, and other individuals who are in a position to control the content of this activity to disclose all personal financial relationships they may have in the past 24 months with ineligible companies. An ineligible entity is any organization whose primary business is producing, marketing, selling, re-selling, or distributing healthcare products used by or on patients. All relevant financial relationships are identified and mitigated prior to initiation of the planning phase for an activity.</p>
                    
                    <p>AXIS has mitigated and disclosed to learners all relevant financial relationships disclosed by staff, planners, faculty/authors, peer reviewers, or others in control of content for this activity. Disclosure of a relationship is not intended to suggest or condone bias in any presentation but is made to provide participants with information that might be of potential importance to their evaluation of a presentation or activity. Disclosure information for faculty, authors, course directors, planners, peer reviewers, and/or relevant staff is provided with this activity.</p>
                    
                    <p>The faculty reported the following relevant financial relationships or relationships they have with ineligible companies of any amount during the past 24 months:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Mark A. Socinski, MD reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Speaker:</span> AstraZeneca Pharmaceuticals LP, Jazz Pharmaceuticals plc, Janssen Pharmaceuticals, Genentech, Inc.</p>
                        <p><span className="font-medium">Contracted research:</span> Cullinan, Spectrum Pharmaceuticals, Inc., AstraZeneca Pharmaceuticals LP.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Alice T. Shaw, MD, PhD, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> Pfizer, Inc., Nuvalent, Triana & Tango.</p>
                        <p><span className="font-medium">Serve(d) as an employee, for an ineligible company (e.g., pharmaceutical company):</span> Novartis (ended).</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Joshua E. Reuss, MD reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Advisor:</span> AstraZeneca Pharmaceuticals LP, Bristol-Myers Squibb Company, Arcus, AbbVie, Daiichi Sankyo Company, Ltd., Catalym, Seagen, Gilead, Janssen Pharmaceuticals, Inc., Novocure, Regeneron Pharmaceuticals, Inc., Summit Therapeutics & Pfizer, Inc.</p>
                        <p><span className="font-medium">Received research grant from (Institution):</span> Genentech/Roche, Verastem Inc., Nuvalent, Exelixis, Inc. & Arcus.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">Karen L. Reckamp, MD, MS, reported a financial interest/relationship or affiliation in the form of</p>
                        <p><span className="font-medium">Consultant:</span> Amgen, Inc., AstraZeneca Pharmaceuticals LP, Blueprint Medicines, Daiichi-Sankyo, Inc., EMD Serono, Inc., Genentech, Inc., GlaxoSmithKline, Janssen Oncology, Lilly USA, Mirati Therapeutics, & Novucare.</p>
                        <p><span className="font-medium">Research funding to institution:</span> Blueprint Medicines, Calithera Biosciences Inc., Daiichi-Sankyo, Inc., Elevation Oncology, Genentech, Inc. & Janssen Oncology.</p>
                      </div>
                    </div>
                    
                    <p>The directors, planners, managers, peer reviewers, and relevant staff reported the following financial relationships they have with any ineligible company of any amount during the past 24 months: Linda Gracie-King, MS; Bing-E Xu, PhD; Marilyn L. Haas-Haseman, PhD, RN, CNS, ANP-BC; Melissa Duffy, PA-C; Adrienne N. Nedved, PharmD, MPA, BCOP; and Dee Morgillo, MEd, MT(ASCP), CHCP, hereby state that they do not have any financial relationships or relationships with any ineligible company of in any amount during the past 24 months. Robert Mocharnuk, MD, reports a financial interest/relationship or affiliation in the form of Common stock: Merck during the past 24 months.</p>
                  </div>
                ) : (
                  <div>
                    <p>[Disclosure content for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Learning Objectives */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('learningObjectives')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Learning Objectives</h3>
              <span className="text-gray-400">
                {expandedSections.learningObjectives ? '−' : '+'}
              </span>
            </button>
            {expandedSections.learningObjectives && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p className="mb-3">Upon completion of this activity, learners should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Identify the clinico-pathologic rationale for perioperative immunotherapy in early-stage, resectable NSCLC</li>
                      <li>Apply multidisciplinary biomarker- and evidence-based decision-making strategies to select patients with stage II-IIIB NSCLC for perioperative therapy</li>
                      <li>Incorporate case-based and expert-derived perioperative immunotherapy principles into early-stage NSCLC patient management in an interprofessional, community-based care setting</li>
                      <li>Develop interprofessional strategies for early detection and management of immune-related adverse events in patients with NSCLC receiving perioperative immunotherapy</li>
                    </ul>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div>
                    <p className="mb-3">Upon completion of this activity, learners should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Identify the clinico-pathologic rationale for perioperative immunotherapy in early-stage, resectable NSCLC</li>
                      <li>Apply multidisciplinary biomarker- and evidence-based decision-making strategies to select patients with stage II-IIIB NSCLC for perioperative therapy</li>
                      <li>Incorporate case-based and expert-derived perioperative immunotherapy principles into early-stage NSCLC patient management in an interprofessional, community-based care setting</li>
                      <li>Develop interprofessional strategies for early detection and management of immune-related adverse events in patients with NSCLC receiving perioperative immunotherapy</li>
                    </ul>
                  </div>
                ) : activity.id === 3 ? (
                  <div>
                    <p className="mb-3">Upon completion of this activity, learners should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Identify the clinico-pathologic rationale for perioperative immunotherapy in early-stage, resectable NSCLC</li>
                      <li>Apply multidisciplinary biomarker- and evidence-based decision-making strategies to select patients with stage II-IIIB NSCLC for perioperative therapy</li>
                      <li>Incorporate case-based and expert-derived perioperative immunotherapy principles into early-stage NSCLC patient management in an interprofessional, community-based care setting</li>
                      <li>Develop interprofessional strategies for early detection and management of immune-related adverse events in patients with NSCLC receiving perioperative immunotherapy</li>
                    </ul>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <p className="mb-3">After participating in this educational activity, participants should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Apply various TKI treatment options in the frontline setting based on updated guidelines, emerging trial data, and changes in real-world evidence when developing personalized treatment approaches for CML patients</li>
                      <li>Integrate BCR-ABL transcript and mutational testing and other team-based strategies to inform TKI selection and achieve EMR, MMR, and DMR in patients with CML to potentially lead to treatment-free remission</li>
                      <li>Plan effective team-based strategies for mitigation and management of potential AEs and drug resistance resulting from CML treatment, while optimizing adherence</li>
                    </ul>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p className="mb-3">After participating in this educational activity, participants should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Differentiate the mechanism of action, delivery method, and dosing protocols for approved and investigational CD3 X CD20 bispecific antibodies in patients with R/R FL</li>
                      <li>Incorporate evidence-based treatment with bispecific antibody therapies into coordinated care planning based on disease characteristics for patients with R/R FL</li>
                      <li>Develop interprofessional strategies for community-based clinicians in the administration, dosing, and management of bispecific antibody therapies in R/R FL</li>
                      <li>Integrate team-based management and care coordination tactics for AEs, including CRS and ICANS, associated with bispecific antibodies for R/R FL in the community setting</li>
                    </ul>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p className="mb-3">After participating in this educational activity, participants should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Compare the novel mechanism of action and selectivity of reversible, non-covalent BTK inhibitors to that of irreversible, covalent BTK inhibitors</li>
                      <li>Apply real-world clinical evidence and clinical trial data on the efficacy and tolerability of reversible, non-covalent BTK inhibitors to the planning of evidence-driven treatment sequencing for patients with CLL/SLL or MCL</li>
                      <li>Integrate monitoring and management strategies for adverse events related to the use of reversible, non-covalent BTK inhibitors</li>
                    </ul>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p className="mb-3">After participating in this educational activity, participants should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Utilize consensus-based guidelines to identify patients at high risk of recurrence</li>
                      <li>Apply guidelines and evidence for CDK4/6 inhibitors in combination with ET to reduce recurrence in patients with high-risk HR+/HER2- early breast cancer</li>
                      <li>Develop team-based mitigation and management strategies for CDK 4/6 inhibitor-related and ET-related adverse events to reduce toxicities and treatment discontinuation</li>
                      <li>Employ collaborative team-based communication strategies to foster patient engagement, adherence, and persistence of therapy</li>
                    </ul>
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <p className="mb-3">After participating in this educational activity, participants should be better able to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Identify ALK-positive patients with early-stage NSCLC at high risk for recurrence post resection across the interprofessional care team</li>
                      <li>Incorporate therapeutic strategies for biomarker-driven treatment of early-stage patients with ALK-positive NSCLC post resection</li>
                      <li>Develop clinical practice skills and team-based strategies to adopt use of targeted therapies in the adjuvant setting in patients with early-stage NSCLC</li>
                      <li>Recognize the clinical value of oncology-relevant endpoints beyond overall survival in patients with early-stage NSCLC post resection</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p>[Learning objectives for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

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
                  <div>
                    <p>This activity is designed to meet the educational needs of Medical, Surgical and Radiation Oncologists as well as all other physicians, physician assistants, nurse practitioners, nurses, pharmacists, and other members of the interprofessional team who are involved in the management of patients with NSCLC.</p>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div>
                    <p>This activity is designed to meet the educational needs of Medical, Surgical and Radiation Oncologists as well as all other physicians, physician assistants, nurse practitioners, nurses, pharmacists, and other members of the interprofessional team who are involved in the management of patients with NSCLC.</p>
                  </div>
                ) : activity.id === 3 ? (
                  <div>
                    <p>This activity is designed to meet the educational needs of Medical, Surgical and Radiation Oncologists as well as all other physicians, physician assistants, nurse practitioners, nurses, pharmacists, and other members of the interprofessional team who are involved in the management of patients with NSCLC.</p>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <p>This initiative is designed for hematologists, hematology oncologists, pathologists/lab professionals, oncology nurses, nurse practitioners, pharmacists, physician assistants, and other healthcare professionals who are part of the interprofessional team responsible for the therapeutic management of patients with chronic myeloid leukemia (CML).</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p>This educational activity is designed for community-based oncologists, hematologists, hematology oncologists, nurse practitioners, physician assistants, pharmacists (APPs), and other HCPs with a role of treating and managing patients with R/R FL.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p>This educational activity is designed for US community-based hematologists/oncologists, pathologists, advanced practitioners, lab professionals and nurses who are part of the interprofessional care team responsible for the therapeutic management of patients with relapsed or refractory MCL and/or CLL/SLL.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p>This educational activity is designed for community-based medical oncologists, breast oncologists, and advanced practice nurses, physician assistants, and pharmacists.</p>
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <p>Community-based medical oncologists, pathologists, lab professionals, advanced practitioners and other HCPs who are part of the interprofessional care team involved in the treatment/management of ALK-positive NSCLC.</p>
                  </div>
                ) : (
                  <div>
                    <p>[Target audience for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Accreditation Statements */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('accreditationStatements')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Accreditation Statements</h3>
              <span className="text-gray-400">
                {expandedSections.accreditationStatements ? '−' : '+'}
              </span>
            </button>
            {expandedSections.accreditationStatements && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                                      <div className="space-y-4">
                      <div className="flex items-center">
                        <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                        <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                      </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 6 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 7 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 8 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : activity.id === 9 ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img src="/logos/jointac.png" alt="Joint Accreditation" className="h-12 mr-3" />
                      <p className="text-sm">In support of improving patient care, AXIS Medical Education is jointly accredited by the Accreditation Council for Continuing Medical Education (ACCME), the Accreditation Council for Pharmacy Education (ACPE), and the American Nurses Credentialing Center (ANCC), to provide continuing education for the healthcare team.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <img src="/logos/ipc.png" alt="IPCE Credit" className="h-12 mr-3" />
                      <p className="text-sm">This activity was planned by and for the healthcare team, and learners will receive 1.0 Interprofessional Continuing Education (IPCE) credit for learning and change.</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>[Accreditation statements for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Credit Designation Statement */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('creditDesignation')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Credit Designation Statement</h3>
              <span className="text-gray-400">
                {expandedSections.creditDesignation ? '−' : '+'}
              </span>
            </button>
            {expandedSections.creditDesignation && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div className="space-y-4">
                    <p>Global Learning Collaborative (GLC) designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>. Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <p>Global Learning Collaborative (GLC) designates this activity for 1.0 nursing contact hour(s). Nurses should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div className="flex items-center my-3">
                      <img src="/logos/cpe.png" alt="CPE Monitor" className="h-12 mr-3" />
                      <p>Global Learning Collaborative (GLC) designates this activity for 1.0 contact hour(s) CEUs of pharmacy contact hour(s).</p>
                    </div>
                    
                    <p>The Universal Activity Number for this program is JA0006235-9999-25-076-L01-P this learning activity is live. Your CE credits will be electronically submitted to the NABP upon successful completion of the activity. Pharmacists with questions can contact NABP customer service (custserv@nabp.net).</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                  <div>
                          <p className="font-medium">PAs, IF LIVE (DO NOT INCLUDE THIS TEXT)</p>
                          <p className="text-sm">Global Learning Collaborative (GLC) has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit(s) for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credit(s). PAs should claim only the credit commensurate with the extent of their participation in the activity.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <div>
                          <p className="font-medium">PAs, IF ENDURING (DO NOT INCLUDE THIS TEXT)</p>
                          <p className="text-sm">Global Learning Collaborative (GLC) has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit(s) for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credit(s). Approval is valid until 12/31/25. PAs should claim only the credit commensurate with the extent of their participation in the activity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div className="space-y-4">
                    <p>Global Learning Collaborative (GLC) designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>. Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <p>Global Learning Collaborative (GLC) designates this activity for 1.0 nursing contact hour(s). Nurses should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div className="flex items-center my-3">
                      <img src="/logos/cpe.png" alt="CPE Monitor" className="h-12 mr-3" />
                      <p>Global Learning Collaborative (GLC) designates this activity for 1.0 contact hour(s) CEUs of pharmacy contact hour(s).</p>
                    </div>
                    
                    <p>The Universal Activity Number for this program is JA0006235-9999-25-076-L01-P this learning activity is live. Your CE credits will be electronically submitted to the NABP upon successful completion of the activity. Pharmacists with questions can contact NABP customer service (custserv@nabp.net).</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <div>
                          <p className="font-medium">PAs, IF LIVE (DO NOT INCLUDE THIS TEXT)</p>
                          <p className="text-sm">Global Learning Collaborative (GLC) has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit(s) for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credit(s). PAs should claim only the credit commensurate with the extent of their participation in the activity.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <div>
                          <p className="font-medium">PAs, IF ENDURING (DO NOT INCLUDE THIS TEXT)</p>
                          <p className="text-sm">Global Learning Collaborative (GLC) has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit(s) for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credit(s). Approval is valid until 12/31/25. PAs should claim only the credit commensurate with the extent of their participation in the activity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div className="space-y-4">
                    <p>AXIS Medical Education designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>.</p>
                    <p>Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Physician Assistants</p>
                      <div className="flex items-center mb-3">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <p className="text-sm">AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credits. Approval is valid until 12/31/2025. PAs should only claim credit commensurate with the extent of their participation.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Pharmacists</p>
                      <p>This application-based activity is approved for 1.0 contact hour of continuing pharmacy education JA4008106-0000-24-072-L01-P.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Nursing</p>
                      <p>AXIS Medical Education designates this continuing nursing education activity for 1.0 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Laboratory Professionals</p>
                      <p>This continuing medical laboratory education activity is recognized by the American Society for Clinical Pathology as meeting the criteria for 1.0 CMLE credit. ASCP CMLE credits are acceptable to meet the continuing education requirement for the ASCP Board of Registry Certification Maintenance Program.</p>
                    </div>
                  </div>
                ) : activity.id === 6 ? (
                  <div className="space-y-4">
                    <p>AXIS Medical Education designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>.</p>
                    <p>Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Physician Assistants</p>
                      <div className="flex items-center mb-3">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <p className="text-sm">AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credits. Approval is valid until 12/31/2025. PAs should only claim credit commensurate with the extent of their participation.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Pharmacists</p>
                      <p>This application-based activity is approved for 1.0 contact hour of continuing pharmacy education credit UAN JA4008106-0000-25-004-L01-P.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Nursing</p>
                      <p>AXIS Medical Education designates this continuing nursing education activity for 1.0 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                  </div>
                ) : activity.id === 7 ? (
                  <div className="space-y-4">
                    <p>AXIS Medical Education designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>.</p>
                    <p>Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Physician Assistants</p>
                      <div className="flex items-center mb-3">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <p className="text-sm">AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credits. Approval is valid until 12/31/2024. PAs should only claim credit commensurate with the extent of their participation.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Pharmacists</p>
                      <p>This application-based activity is approved for 1.0 contact hour of JA4008106-0000-24-024-L01-P.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Nursing</p>
                      <p>AXIS Medical Education designates this continuing nursing education activity for 1.0 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Laboratory Professionals</p>
                      <p>This continuing medical laboratory education activity is recognized by the American Society for Clinical Pathology as meeting the criteria for 1.0 CMLE credit. ASCP CMLE credits are acceptable to meet the continuing education requirement for the ASCP Board of Registry Certification Maintenance Program.</p>
                    </div>
                  </div>
                ) : activity.id === 8 ? (
                  <div className="space-y-4">
                    <p>AXIS Medical Education designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em>.</p>
                    <p>Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Physician Assistants</p>
                      <div className="flex items-center mb-3">
                        <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                        <p className="text-sm">AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credits. Approval is valid until 12/31/2024. PAs should only claim credit commensurate with the extent of their participation.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Pharmacists</p>
                      <p>This application-based activity is approved for 1.0 contact hour of continuing pharmacy education JA4008106-0000-24-019-L01-P.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Nursing</p>
                      <p>AXIS Medical Education designates this continuing nursing education activity for 1.0 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                  </div>
                ) : activity.id === 9 ? (
                  <div className="space-y-4">
                    <div className="flex items-center mb-3">
                      <img src="/logos/pa.png" alt="PA Logo" className="h-12 mr-3" />
                      <div>
                        <p>AXIS Medical Education designates this live activity for a maximum of 1.0 <em>AMA PRA Category 1 Credit(s)™</em></p>
                        <p className="text-sm">Physicians should claim only the credit commensurate with the extent of their participation in the activity.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p>AXIS Medical Education has been authorized by the American Academy of PAs (AAPA) to award AAPA Category 1 CME credit for activities planned in accordance with AAPA CME Criteria. This activity is designated for 1.0 AAPA Category 1 CME credits. Approval is valid until 3/31/2025. PAs should only claim credit commensurate with the extent of their participation.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Pharmacists</p>
                      <p>This application-based activity is approved for 1.0 contact hour of continuing pharmacy education JA4008106-0000-24-069-L01-P.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Nursing</p>
                      <p>AXIS Medical Education designates this continuing nursing education activity for 1.0 contact hour.</p>
                      <p className="text-sm italic">Learners are advised that accredited status does not imply endorsement by the provider or ANCC of any commercial products displayed in conjunction with an activity.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Credit Designation for Laboratory Professionals</p>
                      <p>This continuing medical laboratory education activity is recognized by the American Society for Clinical Pathology as meeting the criteria for 1.0 CMLE credit. ASCP CMLE credits are acceptable to meet the continuing education requirement for the ASCP Board of Registry Certification Maintenance Program.</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>[Credit designation for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Provider */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('provider')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Provider</h3>
              <span className="text-gray-400">
                {expandedSections.provider ? '−' : '+'}
              </span>
            </button>
            {expandedSections.provider && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p className="mb-3">AXIS is committed to enhancing the knowledge, competence and practice skills/strategy of the interprofessional cancer care team through the continuing medical education activities we provide. Our approach to instructional design will foster evidence translation that is applicable to clinical practice and patient-centered care, resulting in improved patient outcomes.</p>
                    <p className="italic text-sm">&lt;AXIS powered by GLC logo&gt;</p>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div>
                    <p className="mb-3">AXIS is committed to enhancing the knowledge, competence and practice skills/strategy of the interprofessional cancer care team through the continuing medical education activities we provide. Our approach to instructional design will foster evidence translation that is applicable to clinical practice and patient-centered care, resulting in improved patient outcomes.</p>
                    <p className="italic text-sm">&lt;AXIS powered by GLC logo&gt;</p>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <img src="/logos/axis.png" alt="AXIS Medical Education" className="h-12" />
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <img src="/logos/axis.png" alt="AXIS Medical Education" className="h-12" />
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <img src="/logos/axis.png" alt="AXIS Medical Education" className="h-12" />
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <img src="/logos/axis.png" alt="AXIS Medical Education" className="h-12" />
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <img src="/logos/axis.png" alt="AXIS Medical Education" className="h-12" />
                  </div>
                ) : (
                  <div>
                    <p>[Provider information for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Commercial Support */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('commercialSupport')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Commercial Support</h3>
              <span className="text-gray-400">
                {expandedSections.commercialSupport ? '−' : '+'}
              </span>
            </button>
            {expandedSections.commercialSupport && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p>This activity is supported by independent educational grants from Bristol Myers Squibb and Merck Sharp & Dohme LLC.</p>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                    <div>
                    <p>This activity is supported by independent educational grants from Bristol Myers Squibb and Merck Sharp & Dohme LLC.</p>
                    </div>
                ) : activity.id === 3 ? (
                    <div>
                    <p>This activity is supported by independent educational grants from Bristol Myers Squibb and Merck Sharp & Dohme LLC.</p>
                    </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <p>This activity is supported by an educational grant from Novartis Pharmaceuticals</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p>This activity is supported by an educational grant from Genmab US, Inc., who has had no influence on, control of, nor input into the development or performance of the activity.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p>This activity is supported by an educational grant from Lilly.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p>This activity is supported by an educational grant from Lilly.</p>
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <p>Supported by an educational grant from Genentech, a member of the Roche Group.</p>
                  </div>
                ) : (
                  <div>
                    <p>[Commercial support for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleSection('disclaimer')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">Disclaimer</h3>
              <span className="text-gray-400">
                {expandedSections.disclaimer ? '−' : '+'}
              </span>
            </button>
            {expandedSections.disclaimer && (
              <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p className="text-sm mb-3">The views and opinions expressed in this educational activity are those of the faculty and do not necessarily represent the views of GLC and AXIS Medical Education. This presentation is not intended to define an exclusive course of patient management; the participant should use his/her clinical judgment, knowledge, experience, and diagnostic skills in applying or adopting for professional use any of the information provided herein. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patients' conditions and contraindications or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities. Links to other sites may be provided as additional sources of information. Once you elect to access a site outside of AXIS Medical Education you are subject to the terms and conditions of use, including copyright and licensing restriction, of that site.</p>
                    
                    <p className="font-semibold mt-4 mb-2">Reproduction Prohibited</p>
                    <p className="text-sm">Reproduction of this material is not permitted without written permission from the copyright owner.</p>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div>
                    <p className="text-sm mb-3">The views and opinions expressed in this educational activity are those of the faculty and do not necessarily represent the views of GLC and AXIS Medical Education. This presentation is not intended to define an exclusive course of patient management; the participant should use his/her clinical judgment, knowledge, experience, and diagnostic skills in applying or adopting for professional use any of the information provided herein. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patients' conditions and contraindications or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities. Links to other sites may be provided as additional sources of information. Once you elect to access a site outside of AXIS Medical Education you are subject to the terms and conditions of use, including copyright and licensing restriction, of that site.</p>
                    
                    <p className="font-semibold mt-4 mb-2">Reproduction Prohibited</p>
                    <p className="text-sm">Reproduction of this material is not permitted without written permission from the copyright owner.</p>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Disclaimer</p>
                        <p className="text-sm">Participants have an implied responsibility to use the newly acquired information to enhance patient outcomes and their own professional development. The information presented in this activity is not meant to serve as a guideline for patient management. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patient's conditions and possible contraindications and/or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Disclosure of Unlabeled Use</p>
                        <p className="text-sm">This educational activity may contain discussion of agents that are not approved for use by the FDA and/or investigational ("off-label") uses of agents that are approved by the FDA. The planners of this activity do not recommend the use of any agent outside of its labeled indications. The opinions expressed in the educational activity are those of the faculty and do not necessarily represent the views of the planners. Please refer to the official prescribing information for each agent for information on its approved indications, contraindications, warnings, and other, related information.</p>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Disclaimer</p>
                        <p className="text-sm">Participants have an implied responsibility to use the newly acquired information to enhance patient outcomes and their own professional development. The information presented in this activity is not meant to serve as a guideline for patient management. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patient's conditions and possible contraindications and/or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Disclosure of Unlabeled Use</p>
                        <p className="text-sm">This educational activity may contain discussion of agents that are not approved for use by the FDA and/or investigational ("off-label") uses of agents that are approved by the FDA. The planners of this activity do not recommend the use of any agent outside of its labeled indications. The opinions expressed in the educational activity are those of the faculty and do not necessarily represent the views of the planners. Please refer to the official prescribing information for each agent for information on its approved indications, contraindications, warnings, and other, related information.</p>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Disclaimer</p>
                        <p className="text-sm">Participants have an implied responsibility to use the newly acquired information to enhance patient outcomes and their own professional development. The information presented in this activity is not meant to serve as a guideline for patient management. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patient's conditions and possible contraindications and/or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Disclosure of Unlabeled Use</p>
                        <p className="text-sm">This educational activity may contain discussion of agents that are not approved for use by the FDA and/or investigational ("off-label") uses of agents that are approved by the FDA. The planners of this activity do not recommend the use of any agent outside of its labeled indications. The opinions expressed in the educational activity are those of the faculty and do not necessarily represent the views of the planners. Please refer to the official prescribing information for each agent for information on its approved indications, contraindications, warnings, and other, related information.</p>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Disclaimer</p>
                        <p className="text-sm">Participants have an implied responsibility to use the newly acquired information to enhance patient outcomes and their own professional development. The information presented in this activity is not meant to serve as a guideline for patient management. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patient's conditions and possible contraindications and/or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Disclosure of Unlabeled Use</p>
                        <p className="text-sm">This educational activity may contain discussion of agents that are not approved for use by the FDA and/or investigational ("off-label") uses of agents that are approved by the FDA. The planners of this activity do not recommend the use of any agent outside of its labeled indications. The opinions expressed in the educational activity are those of the faculty and do not necessarily represent the views of the planners. Please refer to the official prescribing information for each agent for information on its approved indications, contraindications, warnings, and other, related information.</p>
                      </div>
                    </div>
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Disclaimer</p>
                        <p className="text-sm">Participants have an implied responsibility to use the newly acquired information to enhance patient outcomes and their own professional development. The information presented in this activity is not meant to serve as a guideline for patient management. Any procedures, medications, or other courses of diagnosis or treatment discussed or suggested in this activity should not be used by clinicians without evaluation of their patient's conditions and possible contraindications and/or dangers in use, review of any applicable manufacturer's product information, and comparison with recommendations of other authorities.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Disclosure of Unlabeled Use</p>
                        <p className="text-sm">This educational activity may contain discussion of agents that are not approved for use by the FDA and/or investigational ("off-label") uses of agents that are approved by the FDA. The planners of this activity do not recommend the use of any agent outside of its labeled indications. The opinions expressed in the educational activity are those of the faculty and do not necessarily represent the views of the planners. Please refer to the official prescribing information for each agent for information on its approved indications, contraindications, warnings, and other, related information.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>[Disclaimer for other activities]</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Additional */}
          <div className="border-b pb-4">
              <button
              onClick={() => toggleSection('additional')}
                className="w-full flex justify-between items-center text-left"
              >
              <h3 className="text-lg font-semibold text-gray-800">Additional</h3>
                <span className="text-gray-400">
                {expandedSections.additional ? '−' : '+'}
                </span>
              </button>
            {expandedSections.additional && (
                <div className="mt-4 text-gray-600">
                {activity.id === 1 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 2 || activity.id === 3 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 4 || activity.id === 5 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 6 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 7 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 8 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : activity.id === 9 ? (
                  <div>
                    <p className="font-semibold mb-2 text-red-600">AXIS Contact Information</p>
                    <p className="mb-4">For information about the certification of this activity, please contact AXIS at <a href="mailto:info@axismeded.com" className="text-blue-600 underline">info@axismeded.com</a></p>
                    
                    <p className="font-medium">There is no fee for this educational activity.</p>
                  </div>
                ) : (
                  <div>
                    <p>[Additional information for other activities]</p>
                </div>
              )}
            </div>
            )}
        </div>

        </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t bg-gray-50 text-center">
          <p className="text-gray-600 mb-2 text-sm">Provided by AXIS Medical Education</p>
          <img src="/axis.png" alt="AXIS Medical Education" className="h-8 mx-auto" />
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
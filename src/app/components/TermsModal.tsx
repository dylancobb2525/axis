'use client';

import { useState, useEffect } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
        <h1 className="text-2xl font-bold text-gray-800">Terms and Conditions of Use</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close Terms and Conditions"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            
            {/* Table of Contents */}
            <section>
              <ul className="list-disc list-inside space-y-1">
                <li>AXISMedEd Terms and Conditions of Use</li>
                <li>TCU Modifications</li>
                <li>Information on our Sites and Apps</li>
                <li>Use License</li>
                <li>User Communications on the Sites and Apps</li>
                <li>Intellectual and Other Property</li>
                <li>Copyright Violations</li>
                <li>Links to Third Party Sites and Apps</li>
                <li>Other Prohibited Conduct</li>
                <li>Indemnity</li>
                <li>Username/Password Protection</li>
                <li>Disclaimer</li>
                <li>Limitations on Damages</li>
                <li>Privacy Policy for the Sites</li>
                <li>Governing Law</li>
                <li>Comments & Feedback</li>
                <li>Miscellaneous</li>
                <li>Revision Date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AXISMedEd.com Terms and Conditions of Use</h2>
              <p>
                U.S. HealthConnect, Inc. ("USHC" or "us" or "we" or "our") owns and operates AXISMedEd, which includes axismeded.com ("Site"). These Terms and Conditions of Use ("TCU") govern your access to and use of the Site and any other website or app where this Policy is posted or published. To the extent permitted by applicable law, this Policy also governs any interactions you may have with axismeded.com, including through social media, over the phone, in writing, in person, through advertising services we help provide on our Sites, Apps, or through third-party websites or other online properties, or through any other interactions you may have with USHC (all of which will be referred to collectively, together with the Site, as the "Services").
              </p>
              <p>
                These TCU apply only to the Services identified above. Other sites, apps, services or content may have their own terms and conditions of use and should be reviewed.
              </p>
              <p>
                <strong>IMPORTANT, PLEASE READ CAREFULLY:</strong> By clicking "ACCEPT" or otherwise accessing or using the Services, you represent and warrant that you are eighteen (18) years of age or older and acknowledge that you have read, understood, and agree to be bound by these TCU without modification. If you do not accept these TCU and agree to be so bound, you are not authorized to use the Services. These TCU constitute a legal contract between you and USHC and govern your access to and use of the Services. Do not access or use the Services if you are unwilling or unable to be bound by these TCU. Your continued use constitutes your automatic agreement to the applicable provisions in these TCU. Your rights to use the Services are limited by applicable federal, state, and local laws and regulations.
              </p>
              <p>
                USHC may offer promotions, sweepstakes, contests, or features that have their own terms, and to the extent any portion of those special terms conflict with these TCU, the special terms control for that specific portion unless stated otherwise.
              </p>
              <p>
                In accordance with 47 U.S.C. § 230, parents should be aware that there are parental control protections (such as computer hardware, software, or filtering services) that are commercially available and may assist them in limiting access to material that is harmful to minors. Examples of some of these protection services include Qustodio, Net Nanny and Kaspersky Safe Kids. Please note that USHC in no way endorses or is responsible for these services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">TCU Modifications</h2>
              <p>
                USHC reserves the right to modify or revise these TCU at any time without notice. You should visit the Sites and Apps from time to time to review the current TCU. Any such modification will be effective upon our posting of the new TCU. You understand and agree that by using the Services subsequent to any modification of these TCU, you are agreeing to be bound by the modifications in the version of these TCU which is then current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information on our Sites and Apps</h2>
              <p>
                The material available on our Sites, Apps and through other Services consists of information intended for health care professionals, for educational purposes only. Our Services do not provide medical advice, nor are they designed to provide information for non-health care professionals upon which any decision of any kind, medical or otherwise, should be based. Consumers and other users who are not health care providers should refer to their own health care professionals or, if appropriate, seek emergency medical care, to address their own concerns, issues, symptoms, or questions. Health care professionals must rely upon their own clinical and professional judgment before taking any action or rendering any advice of any kind regarding information contained on or through our Services. To put it more succinctly, if you are a patient or prospective patient, our Services are not a substitute for professional medical care. If you are a health care professional, our Services do not substitute for your own professional judgment.
              </p>
              <p>
                You agree that you will only use the Services for their intended purposes, and not for other commercial ventures without first seeking approval from USHC.
              </p>
              <p>
                By using the Services, you may need to interact with other users of the Services. USHC is not responsible for the conduct of any other user who may interact with you, regardless of whether it is done through the Services.
              </p>
              <p>
                Any and all reliance on the Services for medical information is done at your own risk. While USHC will try its best to make the content on the Services useful, USHC does not warrant that any content on the Services will be useful or reliable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
              <p>
                USHC hereby grants you a revocable and nonexclusive right and license to use and access the Site and other Services (including any underlying software) in a manner that is consistent with the other terms in these TCU and the intended purposes of the Services. USHC reserves the right to terminate this license for any or no reason and at any time without notice to you, including, but not limited to, for breach of any term contained in these TCU.
              </p>
              <p>
                Unless otherwise expressly specified, you are permitted to temporarily download one copy of the materials (information or software) available on our Sites or Apps for personal, non-commercial transitory viewing only. You agree this is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on or through our Services; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.
              </p>
              <p>
                This license shall automatically terminate if you violate any of these restrictions, or it may be terminated by USHC at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
              <p>
                By participating in a live event, you grant USHC and its designees the right to photograph, record and/or videotape you at such event and further grant USHC and its designees the right to display, edit, alter, retouch, use, reproduce, distribute, display, publish and/or otherwise exploit, including prepare derivative works based upon, your name, face, likeness, voice, and appearance, in all media, whether now known or hereafter devised, including in computer or other device applications, online webcasts, television programming, motion pictures, films, newspapers, and magazines) and in all forms including digitized images or video, forever, whether for advertising, publicity, training, promotional, sale or resale or any other commercial purposes, including publication of the event, including social and other forms of on-line media, without compensation or further approval, all to the fullest extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Communications on the Site</h2>
              <p>
                The Site and certain other Services may utilize various methods for users to upload or post content on or through such Services and to communicate with other users, health care providers, vendors, and third parties, such as forums, chatrooms, messaging or electronic mail. The content created of such interactions is referred to collectively as "user generated content" ("UGC"). Any and all UGC on our Sites, Apps or other Services are subject to these TCU.
              </p>
              <p>
                Any UGC you upload/post to the Sites or Apps or through other USHC Services is done on a non-proprietary and non-confidential basis, and you agree that USHC has a royalty-free, perpetual, irrevocable, sublicensable, worldwide, non-exclusive right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display any UGC for the purpose of operating and/or marketing the Sites, Apps or any related Services. This license includes any right of publicity rights that may be present in the UGC.
              </p>
              <p>
                USHC is not required to treat any UGC as confidential. UGC that you share or post on or through the Services may be seen by other users of the Services (including off of the Services if another user copies and reposts your UGC).
              </p>
              <p>
                When you utilize our Services for communications you further expressly agree as follows:
              </p>
              <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>USHC is not responsible for any UGC. We do not vouch for the accuracy, completeness or usefulness of any UGC. Any opinions stated are those of the individual user and not USHC.</li>
                <li>We may remove any UGC from the Services if in our sole discretion we believe it to be objectionable.</li>
                <li>We will not permit the posting of any abusive, obscene, vulgar, slanderous, defamatory, knowingly false, inaccurate, hateful, threatening, or harassing material. Nor will we tolerate content that is invasive of a person's privacy, sexually-oriented or content which may violate applicable laws. Any advertisements or solicitations of business are likewise prohibited. You are permitted to post links to other sites, but you may not post any material which you either do not own or do not have the express consent of the owner to use. In the event of any legitimate legal dispute over your UGC, we will reveal your identity and the address from which your content was posted.</li>
                <li>If you violate any provision of these TCU, we reserve the right to immediately and permanently ban you from participating in our Services, as well as notifying your service provider and any other entities involved.</li>
                <li>You are solely liable and responsible for any UGC you upload or post on or through the Services. We reserve the right to take over the exclusive defense of any claim related to your UGC for which we are entitled to indemnification. In such event, you shall provide us with such cooperation as is reasonably requested by us.</li>
                <li>No physician-patient relationship can be created via the use of the Services. Not even a protracted chatroom dialogue or extended message thread on any of our Services constitutes medical advice of any kind. Once again, there is no substitute for a face-to-face medical examination or emergency room visit.</li>
                <li>We reserve the right to record, edit or remove any content, as well as investigate any allegation that a post does not conform to law or these TCU.</li>
              </ol>
              <p>
                You further agree that you shall be solely liable for any damages, royalties, or fees resulting from any infringement of rights or any other harm resulting from any UGC you upload/post.
              </p>
              <p>
                You further represent and warrant that: (i) you own all right, title, and interest, including the intellectual property rights, to any UGC uploaded/posted by you to the Services or you have granted the right by the respective owner to upload/post the UGC; and (ii) your UGC does not violate the intellectual property rights, privacy rights, publicity rights, contract rights or any other rights of any person or entity.
              </p>
              <p>
                USHC reserves the right to comply and cooperate with any and all legal requirements, legal authorities, and/or law enforcement agencies regarding the investigation of, or request to disclose, information related to your UGC.
              </p>
              <p>
                USHC reserves the right to refuse, delete, or edit any UGC without cause and without notice for any or no reason. USHC is under no duty to, and does not represent it will, monitor, edit, or remove any UGC. If you send USHC unsolicited content or ideas, you agree that USHC may use such content and ideas in any way USHC wishes without any compensation to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual and Other Property</h2>
              <p>
                Other than the exceptions referenced in these TCU or noted elsewhere, the major exception being UGC uploaded/posted by users of the Services which remains the property of the users, all other content on the Sites or Apps is the property of USHC including, but not limited to, all marks, logos, names, text, data, documents, messages, pictures, images, video, audio, graphics, links, software and its underlying code, domain names, or other electronic files (referred to hereafter as "USHC Content"). You may not use USHC Content from our Sites, Apps, or any related Services commercially without our express permission.
              </p>
              <p>
                Certain elements of the Services, including but not limited to, text, graphics, photos, images, video, audio, color selections, organization and layout, are copyright protected under United States and international copyright laws. Any USHC Content protected by intellectual property laws may not be copied, republished, posted, modified, edited, transmitted, distributed, used to create derivative works of, or reverse engineered without permission.
              </p>
              <p>
                You acknowledge that you have no right, title, or interest in or to the Site, other Services, and/or USHC Content.
              </p>
              <p>
                US HealthConnect and AXISMedEd are marks of USHC. Other marks, names, and logos available on or through the Services are the property of their respective owners.
              </p>
              <p>
                There may be other content located on the Services not owned by USHC, and you should respect those property rights as well. All rights not expressly granted herein are reserved to USHC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Copyright Violations</h2>
              <p>
                If you believe any content available on the Sites or Apps violates your copyright and you want the content removed from the Sites or Apps, please send a detailed message with the following information (under the Digital Millennium Copyright Act, the following information must be included in the message) to USHC's designated agent for notice of claims of copyright infringement:
              </p>
              <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                <li>Complete identification of work claimed to have been infringed upon, or, if multiple works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
                <li>Identification of the allegedly infringing material on the Sites or Apps or the material that is the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit USHC to locate the material;</li>
                <li>Your contact information in a form reasonably sufficient to permit USHC to contact you as the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted;</li>
                <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
                <li>Your signed statement as follows: "Under penalty of perjury, and subject to the penalties of 18 Pa. Cons. Stat. §4904 relating to unsworn falsification to authorities, the information I have provided is accurate. I am the copyright owner or I am authorized to act on the copyright owner's behalf; and my signature and/or the authorized copyright holder's signature appears below."</li>
              </ol>
              <p>USHC's Designated Agent is:</p>
              <p>Copyright Agent</p>
              <p>1301 Virginia Drive, Ste 300</p>
              <p>Fort Washington, PA 19034</p>
              <p>Phone: 215.358.0555</p>
              <p><a href="mailto:info@ushealthconnect.com" className="text-blue-600 hover:text-blue-800">info@ushealthconnect.com</a></p>
              <p>
                USHC takes copyright and other intellectual property issues seriously, and will terminate any accounts and/or users on the Site that are connected to valid and repeat copyright infringement complaints.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Links to Third Party Sites and Apps</h2>
              <p>
                The Services contain links to external websites or other third-party online properties not controlled and/or affiliated with USHC. If you use these links, you will leave the Site. USHC provides these links to you only as a convenience. USHC is not responsible for the content at the linked sites, including, without limitation, links displayed on such sites. You access any linked sites at your own risk.
              </p>
              <p>
                The display of links are not meant to imply that USHC guarantees, approves, recommends, or endorses the linked sites or any information, content and/or products/services available on those linked sites. The links are not meant to indicate any association with USHC. USHC is not responsible or liable for any linked site nor does USHC warrant that the linked sites or any goods, services, or information on the sites are current, accurate, or error-free. If you access the linked sites, you will be subject to the terms of use, privacy, and other policies applicable to those sites.
              </p>
              <p>
                Some of our Services may contain sponsored information, advertisements or other third-party content for the placement of which a fee has been paid to USHC. If you choose to interact with content or information available through the links to external websites or other third-party online properties that are embedded in such Services, or if you do business with any of our advertisers, you are subject to whatever contractual language, warranties, representations, or terms and conditions that are imposed or negotiated by and between yourself and that third-party advertiser. Under no circumstances are we liable for any losses attributable to your transactions or relations with our advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Prohibited Conduct</h2>
              <p>In connection with your access to and/or use of the Services, you agree not to:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Violate any federal, state, or local laws or regulations.</li>
                <li>Upload/post anything that imposes an unreasonable or disproportionately large strain on USHC's network or computer infrastructure.</li>
                <li>Engage in any behavior that is designed to hack into or gain unauthorized access to protected areas of the Services and/or USHC's computers, servers or networks, and/or any computers or systems used by other users of the Services.</li>
                <li>Upload/post anything that could destroy, damage, or impair any portion of the Services or any computers, systems, hardware, or software used by USHC or other users.</li>
                <li>Make unauthorized attempts to modify any information stored on the Services.</li>
                <li>Make attempts to defeat or circumvent security features, or to utilize the Services for any purpose other than its intended purposes.</li>
                <li>Discuss, incite, or promote illegal activity.</li>
                <li>Upload/post any unsolicited or unauthorized advertising, promotional materials, spam emails, chain letters, pyramid schemes, or any other form of such solicitations.</li>
                <li>Use any automated technology such as a robot, spider, or scraper to access, scrape, or data mine the Services.</li>
                <li>Use the Services to send spam or unsolicited bulk email.</li>
                <li>Provide false or misleading information when signing up for an account on the Sites or Apps or otherwise upload/post any false or misleading information or content on or through the Services.</li>
              </ul>
              <p>
                The previous list of prohibitions is not exclusive. USHC reserves the right to terminate your access to the Site or any USHC Services for any reason.
              </p>
              <p>
                By accepting these TCU, you waive and hold harmless USHC from any claims resulting from any action taken by USHC during or as a result of USHC's investigation and/or from any actions taken as a consequence of investigations by either USHC or law enforcement related to your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Indemnity</h2>
              <p>
                You agree to indemnify, defend and hold harmless USHC, its wholly owned subsidiaries, affiliates and suppliers, including their officers, directors, employees, agents, licensors, representatives, attorneys, and business partners ("Indemnified Parties"), from and against any and all claims, demands, losses, costs, damages, liabilities, judgments, awards, and expenses (including attorneys' fees, costs of defense, and direct, indirect, punitive, incidental, consequential, or exemplary damages) USHC or any of the Indemnified Parties suffer in relation to, arising from, or for the purpose of avoiding, any claim or demand from a third party that relates to your use of the Site and/or any products or Services offered or rendered on or through the Site, any UGC you upload or post on or through the Services, your breach of these TCU, use of the Services by any person using your username and password, or any violation of an applicable law or regulation by you. Your indemnification obligation shall survive the termination of these TCU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Username/Password Protection</h2>
              <p>
                In order to perform certain actions on the Site, you will need to set up an account with a username and password. You are responsible for maintaining the confidentiality of your password and username, and agree to notify USHC if your password is lost, stolen, disclosed to an unauthorized party, or otherwise may have been compromised. You are responsible for all activities that occur under your account. You must set up any account for the Sites or Apps in your own name. You agree to immediately notify USHC at <a href="mailto:info@ushealthconnect.com" className="text-blue-600 hover:text-blue-800">info@ushealthconnect.com</a> of any unauthorized use of your account or any other breach of security in relation to the Sites or Apps known to you.
              </p>
              <p>
                You may cancel your account for the Sites or Apps at any time by contacting <a href="mailto:info@axismeded.com" className="text-blue-600 hover:text-blue-800">info@axismeded.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
              <p><strong>YOUR USE OF THE SITE AND/OR ANY OTHER USHC SERVICES IS AT YOUR OWN RISK.</strong></p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE SITE, OTHER USHC SERVICES AND ANY RELATED CONTENT, INCLUDING ANY PRODUCTS, INFORMATION OR MATERIALS PROVIDED ON OR THROUGH OUR SERVICES, ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS AND, TO THE EXTENT PERMITTED BY LAW, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, USHC, ITS WHOLLY OWNED SUBSIDIARIES, AFFILIATES AND SUPPLIERS, INCLUDING THEIR OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, REPRESENTATIVES, ATTORNEYS, BUSINESS PARTNERS, AND ANY THIRD-PARTY SUPPLIER OR SERVICE PROVIDER THAT PROVIDES OR ASSISTS USHC IN PROVIDING THE SITES, APPS, AND ANY RELATED SERVICES (COLLECTIVELY "THE DISCLAIMING PARTIES") MAKE NO WARRANTIES, REPRESENTATIONS OR ENDORSEMENTS WHATSOEVER, WHETHER EXPRESSED OR IMPLIED, WITH RESPECT TO THE SERVICES OR ANY PRODUCTS, INFORMATION OR MATERIALS OFFERED ON OR THROUGH THE SERVICES.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE DISCLAIMING PARTIES HEREBY EXPRESSLY DISCLAIM AND NEGATE ALL WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SECURITY, COMPLETENESS, TIMELINESS, APPROPRIATENESS, ACCURACY, FITNESS FOR A PARTICULAR PURPOSE, FREEDOM FROM COMPUTER VIRUSES, TITLE, AND/OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE DISCLAIMER OF WARRANTIES APPLIES TO THE SERVICES, THEIR CONTENT, AND ANY PRODUCTS, INFORMATION OR MATERIALS OFFERED ON OR THROUGH THE SERVICES. THE DISCLAIMING PARTIES DO NOT WARRANT THAT THE FUNCTIONS OR CONTENT ON THE SERVICES WILL BE UNINTERRUPTED, TIMELY, OR SECURE.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE DISCLAIMING PARTIES DO NOT WARRANT OR MAKE ANY REPRESENTATIONS CONCERNING THE ACCURACY, COMPLETENESS, LIKELY RESULTS, OR RELIABILITY OF THE USE OF THE MATERIALS ON OUR SERVICES OR OTHERWISE RELATING TO SUCH MATERIALS OR ON ANY ONLINE LOCATIONS LINKED TO THE SITES, APPS, OR OTHER USHC SERVICES. TO THE EXTENT PERMITTED BY LAW, THE DISCLAIMING PARTIES DO NOT WARRANT THAT THE SERVICES AND/OR THEIR CONTENT WILL BE ERROR-FREE, THAT ANY ERRORS FOUND ON OR THROUGH THE SERVICES WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS USED TO HOST THEM ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ONCE AGAIN, THE SERVICES ARE NOT A SUBSTITUTE FOR APPROPRIATE MEDICAL CARE, AND THERE IS NO MEDICAL ADVICE OFFERED HEREBY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitations on Damages</h2>
              <p>
                YOU ASSUME THE ENTIRE COST OF ALL NECESSARY REPAIRS IN THE EVENT YOU EXPERIENCE ANY LOSS OR DAMAGE ARISING FROM THE USE OF THE SERVICES OR ANY PRODUCTS, INFORMATION AND MATERIALS OFFERED ON OR THROUGH THE SERVICES. ALTHOUGH WE INTEND TO TAKE REASONABLE STEPS TO PREVENT THE INTRODUCTION OF VIRUSES, WORMS, "TROJAN HORSES" OR OTHER DESTRUCTIVE MATERIALS TO THE SITES AND APPS, THE DISCLAIMING PARTIES DO NOT GUARANTEE OR WARRANT THAT THE SERVICES OR ANY MATERIALS THAT MAY BE DOWNLOADED FROM THE SERVICES DO NOT CONTAIN SUCH DESTRUCTIVE FEATURES. WE ARE NOT LIABLE FOR ANY DAMAGES OR HARM ATTRIBUTABLE TO SUCH FEATURES.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE DISCLAIMING PARTIES MAKE NO WARRANTIES THAT YOUR USE OF THE SERVICES WILL NOT INFRINGE THE RIGHTS OF OTHERS AND ASSUME NO LIABILITY FOR SUCH INFRINGEMENT.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE DISCLAIMING PARTIES BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE, ACTUAL, OR OTHER DAMAGES, INCLUDING FOR LOSS OF DATA OR GOODWILL, BUSINESS INTERRUPTION, PAIN AND SUFFERING, EMOTIONAL DISTRESS OR SIMILAR DAMAGES, EVEN IF THE DISCLAIMING PARTIES HAVE BEEN ADVISED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGES, ARISING OUT OF: (1) THE USE OR INABILITY TO USE THE SERVICES OR ANY PRODUCTS, INFORMATION OR MATERIALS AVAILABLE ON OR THROUGH THE SERVICES; (2) ANY TRANSACTION CONDUCTED THROUGH OR FACILITATED BY THE SERVICES; (3) ANY CLAIM ATTRIBUTABLE TO ERRORS, OMISSIONS, OR INACCURACIES AVAILABLE ON OR THROUGH THE SERVICES; AND/OR (4) ANY OTHER MATTER RELATING TO THE SERVICES, ANY PRODUCT, INFORMATION OR MATERIAL AVAILABLE ON OR THROUGH THE SERVICES AND/OR ANY LINKS AVAILABLE ON OR THROUGH THE SERVICES.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE COLLECTIVE LIABILITY OF THE DISCLAIMING PARTIES AND/OR BUSINESS PARTNERS, OR ANY AFFILIATED ORGANIZATION, PRODUCTION OR TRANSMISSION OF THE SERVICES, TO ANY PARTY, REGARDLESS OF THE TYPE OF ACTION WHETHER IN CONTRACT, TORT, OR OTHERWISE, EXCEED THE GREATER OF $100.00 OR THE AMOUNT YOU PAID TO THE DISCLAIMING PARTIES FOR THE APPLICABLE SERVICES OUT OF WHICH THE LIABILITY AROSE.
              </p>
              <p>
                IF YOU ARE DISSATISFIED WITH THESE TCU OR THE SERVICES, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy for the Sites</h2>
              <p>
                You agree that USHC may access, store, process and use any information and personal data that you provide in accordance with the Privacy Policy located at https://axismeded.com/pages/privacy/. The Privacy Policy is incorporated by reference into these TCU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
              <p>
                YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY AGREE that any claim relating to the Services and/or any products, information or materials offered on or through the Services, are governed by, and shall be interpreted in accordance with, the laws of the Commonwealth of Pennsylvania, without regard to any conflict of laws provisions.
              </p>
              <p>
                YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY CONSENT to submit to the exclusive jurisdiction of the Court of Common Pleas of Montgomery County, Pennsylvania or the United States District Court for the Eastern District of Pennsylvania for any disputes or litigation arising out of or relating to these TCU or the use of the Services.
              </p>
              <p>
                YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY CONSENT to waive any objection to the venue of any such litigation in Commonwealth of Pennsylvania courts.
              </p>
              <p>
                YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY AGREE not to plead or claim in any Commonwealth of Pennsylvania court that such litigation brought therein has been brought in an inconvenient forum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments & Feedback</h2>
              <p>
                In compliance with your rights under California Civil Code § 1789.3, you have the right to contact USHC with any complaints or to seek additional information. You may email us at <a href="mailto:info@axismeded.com" className="text-blue-600 hover:text-blue-800">info@axismeded.com</a>. You may also call 215.358.0552. For any physical documents, you may send mail to 1301 Virginia Drive | Suite 300 | Fort Washington, PA 19034.
              </p>
              <p>
                If California users have any questions or complaints about USHC they may also contact The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs through writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834 or telephone at (916) 445-1254 or (800) 952-5210. Hearing impaired persons may call (916) 928-1227 or (800) 326-2297 via TTY device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Miscellaneous</h2>
              <p>
                <strong>ANY RELIANCE ON ANY OPINIONS OR RECOMMENDATIONS OFFERED ON OR THROUGH THE SERVICES IS DONE AT YOUR RISK.</strong>
              </p>
              <p>
                <strong>YOU AGREE THAT USHC IS NOT LIABLE</strong> to you or anyone else for any harm that might arise as a result of using and/or implementing in any manner any of the opinions or recommendations found on or through the Services.
              </p>
              <p>
                If any part of these TCU is determined by a court of competent jurisdiction to be invalid or unenforceable, it will not impact any other provision of these TCU, all of which will remain in full force and effect to the extent permitted by law.
              </p>
              <p>
                These TCU constitute the entire agreement of the parties with respect to the Services, and supersede all prior communications, promises and proposals, whether oral, written, or electronic, between you and USHC, with respect to the Services.
              </p>
              <p>
                USHC's failure to enforce any portion of these TCU is not a waiver of such portion.
              </p>
              <p>
                The proprietary rights, disclaimer of warranties, representations made by you, indemnities, limitations of liability, and any other relevant language in these TCU are meant to remain in effect after this Agreement ends shall survive the termination of these TCU.
              </p>
              <p>
                USHC reserves the right, without notice and reason, to take down or terminate the Sites, Apps or otherwise revoke any and all access granted to you related to the Services. You agree that USHC is not liable to you or any other third party for this action.
              </p>
              <p>
                Certain software elements of the Sites, Apps and related Services may be subject to U.S. export laws and controls. As such, no software may be downloaded or exported to any country or foreign citizen that is under a U.S. embargo or that would otherwise violate U.S. law or regulations.
              </p>
              <p>
                If you need to contact USHC for any reason not already specified in these TCU, please use the following contact information:
              </p>
              <p>1301 Virginia Drive, Ste 300</p>
              <p>Fort Washington, PA 19034</p>
              <p>Phone: 215.358.0555</p>
              <p><a href="mailto:info@axismeded.com" className="text-blue-600 hover:text-blue-800">info@axismeded.com</a></p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Revision date:</strong> This document was last updated on December 1, 2022.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 
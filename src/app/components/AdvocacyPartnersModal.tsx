'use client';

import { useEffect } from 'react';

interface AdvocacyPartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdvocacyPartnersModal({ isOpen, onClose }: AdvocacyPartnersModalProps) {
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
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Advocacy Partners</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <p className="text-lg">
              AXIS Medical Education recognizes the need to provide trusted patient and caregiver resources as a part of our educational mission to 
              improve the outcomes of patients. As such, AXIS partners with many renowned advocacy groups/associations. Clinicians who 
              participate in our educational activities find value in having access to recommended patient education and caregiver resources in specific 
              disease areas. AXIS finds value in these partnerships because they round out our core clinical curriculum with validated and relevant 
              supplemental resources for busy clinicians and their patients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">American Liver Foundation</h2>
            <p className="italic mb-4">Your Liver. Your Life.</p>
            <p>
              The American Liver Foundation takes a leadership role in advocating on behalf of the millions of Americans living with liver disease 
              and their families. Their mission is to facilitate, advocate and promote education, support and research for the prevention, treatment 
              and cure of liver disease.
            </p>
            <p>
              To learn more about The American Liver Foundation, visit www.liverfoundation.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Axis Advocacy</h2>
            <p>
              Axis Advocacy is a 501c in California that is uniquely positioned to address the Sickle Cell Disease community and Stakeholders 
              with the purpose of addressing their broad needs and concerns. From advocating for federal laws to assisting individual patients at 
              multiple points of care, Axis is committed to improving the lives of patients and community members nationwide. This is more 
              important now as we are in the intersection of racial bias and inequities, financial burdens, political division, opioid hysteria, and new 
              medical advancements.
            </p>
            <p>
              To learn more about Axis Advocacy, visit www.axisadvocacy.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bladder Cancer Advocacy Network</h2>
            <p>
              Bladder Cancer Advocacy Network's (BCAN) mission is to increase public awareness about bladder cancer, advance bladder cancer 
              research, and provide educational and support services for the bladder cancer community.
            </p>
            <p>
              BCAN serves as the leading voice for bladder cancer in the U.S., providing resources to not only those diagnosed with the disease 
              but their families, caregivers and the medical community united in support of people touched by the disease. The organization is 
              setting the agenda for bladder cancer by promoting lifesaving collaboration and cutting-edge research programs and providing 
              critical patient support and education services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancer Care</h2>
            <p>
              Founded in 1944, CancerCare® is the leading national organization providing free, professional support services and information to 
              help people manage the emotional, practical and financial challenges of cancer. Our comprehensive services include counseling 
              and support groups over the phone, online and in-person, educational workshops, publications and financial and co-payment 
              assistance. All CancerCare services are provided by oncology social workers and world-leading cancer experts.
            </p>
            <p>
              CancerCare programs and services help 170,000 people each year, in addition to welcoming 1.5 million visits to our websites and 
              distributing 800,000 publications. In the past year, CancerCare provided more than $22.3 million in financial assistance.
            </p>
            <p>
              To learn more about CancerCare, visit www.cancercare.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Colon Cancer Alliance</h2>
            <p>
              The Colon Cancer Alliance is the leading national patient advocacy organization dedicated to increasing screening rates and 
              survivorship. Its vision is for a world where everyone values early detection and treatment lead to Survivorship for all. 
              The pillars of Colon Cancer Alliance are: 1) Prevention; 2) Research — an agenda that includes the following: advancing biomarker 
              research, understanding why those under 50 are increasingly diagnosed with colon cancer, decreasing late-state diagnosis of high-
              risk populations, closing the referral gap for screening and diagnostic testing, and advancing long-term survivorship psychosocial 
              concerns; and 3) Patient Support featuring the latest information, expert resources, and cutting-edge tools to help patients make it 
              through their diagnosis.
            </p>
            <p>
              To learn more about colon Cancer Alliance, visit www.ccalliance.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Debbie's Dream Foundation</h2>
            <p>
              Debbie's Dream Foundation: Curing Stomach Cancer (DDF) is a 501(c)(3) non-profit organization dedicated to raising awareness 
              about stomach cancer, advancing funding for research, and providing education and support internationally to patients, families, and 
              caregivers. Debbie's Dream Foundation seeks as its ultimate goal to make the cure for stomach cancer a reality.
            </p>
            <p>
              DDF was founded in 2009 by Debbie Zelman after she was diagnosed with stage IV incurable stomach cancer in 2008 and given 
              only weeks to live. Zelman immediately began to educate herself about this disease and to seek the best available care.
            </p>
            <p>
              To learn more about DDF, please visit us at www.DebbiesDream.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fight Colorectal Cancer</h2>
            <p>
              Fight Colorectal Cancer (Fight CRC) is a leading patient-empowerment and advocacy organization in the United States, providing 
              balanced and objective information on colon and rectal cancer research, treatment, and policy. We are relentless champions of 
              hope, focused on funding promising, high-impact research endeavors while equipping advocates to influence legislation and policy 
              for the collective good. Learn more at FightCRC.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gastric Cancer Foundation</h2>
            <p>
              The Gastric Cancer Foundation (GCF) is focused exclusively on helping people fight gastric cancer. Through education, research, 
              support and advocacy, the organization is dedicated to improving the lives of people who are affected by the disease and working 
              with leading researchers to find a cure.
            </p>
            <p>
              With relatively little funding historically directed toward gastric cancer, there has not been adequate research to study the genetics 
              of the disease or its underlying biology. GCF has stepped in to bridge this gap and advance the field of gastric cancer research.
            </p>
            <p>
              To learn more about Gastric Cancer Foundation, visit www.gastriccancer.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">GRACE</h2>
            <p>
              The Global Resource for Advancing Cancer Education (GRACE) is a nonprofit organization that was developed as a means of 
              improving the overall medical care for cancer patients by democratizing cutting edge information on optimal cancer management 
              and providing it directly to patients. GRACE recognizes that while there is an overwhelming amount of new information available to 
              physicians -- actually more than they can integrate -- patients and their families often have a deep interest in their own care and 
              often have the time and motivation to ensure that they are receiving the best treatment possible.
            </p>
            <p>
              GRACE provides a forum for patient and caregiver discussions that are evidence-based and offers a wealth of thought leader-led 
              updates regarding the transformation of cancer care and important treatment updates. To learn more about GRACE, visit 
              www.cancergrace.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Imerman Angels</h2>
            <p>
              To provide personalized connections that enable one-on-one support among cancer fighters, survivors and caregivers. Through our 
              unique matching process, Imerman Angels partners anyone seeking cancer support with someone just like you — a "Mentor Angel". 
              A Mentor Angel is a cancer survivor or caregiver who is the same age, same gender, and most importantly who has faced 
              the same type of cancer. Our service is absolutely free and helps anyone touched by any type of cancer, at any cancer stage level, at 
              any age, living anywhere in the world.
            </p>
            <p>
              These one-on-one relationships give a cancer fighter or caregiver the chance to ask personal questions and get support from 
              someone who has been there before.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Kidney Cancer Association</h2>
            <p>
              The Kidney Cancer Association (KCA) is a charitable organization made up of patients, family members, physicians, researchers, and 
              other health professionals globally. It is the world's first international charity dedicated specifically to the eradication of death and 
              suffering from renal cancers. It is also by far the largest organization of its kind, with members in more than 100 countries.
            </p>
            <p>
              To learn more about The Kidney Cancer Association, visit www.kidneycancer.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mesothelioma Hope</h2>
            <p>
              Mesothelioma Hope was founded by a group of medical and legal advocates whose goal is to provide a comprehensive database for 
              people diagnosed with mesothelioma. Today, Mesothelioma Hope works to assist those directly affected by mesothelioma and 
              helps families, siblings, and other caregivers provide support.
            </p>
            <p>
              To learn more about Mesothelioma Hope, visit https://www.mesotheliomahope.com/resources/support-groups/
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Mesothelioma Veterans Center</h2>
            <p>
              The Mesothelioma Veterans Center provides information about treatment, clinical trials, and VA benefits to veterans suffering from 
              asbestos-related illnesses. We've had the honor of helping hundreds of veterans pursue compensation after developing 
              mesothelioma or asbestos-related lung cancer from their asbestos exposure in the military.
            </p>
            <p>
              To learn more about The Mesothelioma Veterans Center, visit https://www.mesotheliomaveterans.org/veterans/
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">MPN Advocacy and Education International</h2>
            <p>
              MPN Advocacy and Education International is dedicated to providing the knowledge, support, and resources patients will need as 
              they adjust to living with an MPN through educational symposia in several cities each year, website access, free webcasts of each 
              program, collateral materials, and direction to people, resources and other organizations that can help.
            </p>
            <p>
              To learn more about MPN A&EI, visit www.mpnadvocacy.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">National Cervical Cancer Foundation</h2>
            <p>
              NCCC was founded in 1996 as a grassroots nonprofit organization dedicated to serving women with, or at risk for, cervical cancer 
              and HPV disease. In 2011, NCCC merged with American Sexual Health Association (ASHA), a nonprofit with a 100-year history of 
              educating and raising awareness on sexual health issues.
            </p>
            <p>
              For more information about NCCC, please visit www.nccc-online.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pancreatic Cancer Action Network</h2>
            <p>
              The Pancreatic Cancer Action Network (PanCAN) is dedicated to fighting the world's toughest cancer. In our urgent mission to save 
              lives, we attack pancreatic cancer on all fronts: research, clinical initiatives, patient services and advocacy. Our effort is amplified by a 
              nationwide network of grassroots support. We are determined to improve patient outcomes today and to double survival by 2020.
            </p>
            <p>
              Visit pancan.org for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Platelet Disorder Support Association</h2>
            <p>
              Since 1998, the Platelet Disorder Support Association (PDSA) has been successfully fulfilling its mission of enhancing the lives of 
              patients with immune thrombocytopenia (ITP) and other platelet disorders through education, advocacy, research, and support.
            </p>
            <p>
              Each year, PDSA serves tens of thousands of patients, caregivers, and medical professionals in more than 130 countries through its 
              website, support groups, online discussion groups, educational booklets and research articles, patient hotline, and national patient 
              conference.
            </p>
            <p>
              To learn more about PDSA visit www.pdsa.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Sarcoma Foundation of America</h2>
            <p>
              The mission of the Sarcoma Foundation of America (SFA) is to advocate for sarcoma patients by funding research, by educating 
              patients and caregivers and by increasing awareness about the disease. The organization raises money to privately fund grants for 
              sarcoma researchers and conducts education and advocacy efforts on behalf of sarcoma patients.
            </p>
            <p>
              Sarcoma is a form of cancer rare in adults, but rather prevalent in children, accounting for about 15 percent of all childhood cancers. 
              Currently, over 50,000 people are living with Sarcoma and every year about 14,000 new cases are diagnosed with about 6,000 
              people dying from it.
            </p>
            <p>
              To learn more about the organization, please visit www.curesarcoma.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Skin Cancer Foundation</h2>
            <p>
              Since its founding in 1979, The Skin Cancer Foundation has set the standard for educating the public and the medical profession 
              about skin cancer, its prevention by means of sun protection, the need for early detection, and prompt, effective treatment. It is the 
              only international organization devoted solely to combating the world's most common cancer, now occurring at epidemic levels.
            </p>
            <p>
              Skin cancer is the most common cancer in the world, with more than 13 million cases diagnosed annually. One of every three 
              cancers diagnosed is a skin cancer, and up to 65,161 people die every year from skin cancer.
            </p>
            <p>
              For more information, visit www.SkinCancer.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Tuberous Sclerosis Alliance</h2>
            <p>
              The Tuberous Sclerosis Alliance (TS Alliance) is a national voluntary health nonprofit dedicated to finding a cure for tuberous 
              sclerosis complex (TSC) while improving the lives of those affected. We provide support and information for individuals and families 
              living with the disease, raise awareness, advocate for federal TSC research dollars, and fund and drive scientific breakthroughs.
            </p>
            <p>
              For more information, visit www.tsalliance.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">URO Today</h2>
            <p>
              UroToday® publishes online articles on all Genitourinary topics organized by conditions, treatments, and evidence-based guidelines 
              including GU oncology, men's health, voiding function and dysfunctions, stone disease, minimally invasive procedures and pediatric 
              treatments.
            </p>
            <p>
              Our mission is to provide free, accurate, timely, evidence-based news and information to help healthcare providers stay up-to-date 
              on relevant conditions and to patients for better understanding of symptoms and treatments – Empowering both groups to access 
              evidence-based diagnosis and treatment solutions from anywhere in the world.
            </p>
            <p>
              To learn more about Uro Today, visit www.urotoday.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
} 
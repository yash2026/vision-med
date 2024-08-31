import Image from "next/image";
import * as SamarkandPageLayout from "./section-card/section-card";
import * as SamarkandPageLayout2 from "./common-layout";
import BookAppointment from "./book-appointment";
import { TickGernator } from "./section-card/welcome-section";
import SamarkandPageFaqData from "@/data/accordian.json";
import FaqBuilder from "./faq-builder";
import SidebarLinkCard from "./sidebar-link-card";

const tickData = [
  `Samarkand state medical university is following all the rules and regulations framed by national medical commission of india. The duration of the course is 6 years (5+1) including internship.`,
  `The campus has all the premium world class facilities.`,
  `The institution has study programs focussed on n practical training that allows them to understand the concepts thoroughly, through modern medical equipment, including ultrasound diagnostic devices, ECG, Echocardiography, Echoencephalography, Endoscopy, gamma scanners, laser therapy equipment, operating microscope, video-endoscopic devices, incubators, anaesthesia apparatus etc.`,
  `The institution has a scientific medical library with over 200000 books, with regular scientific publications, including foreign ones and e-textbooks for increasing quality of education process. The scientific medical library is equipped with modern techniques, computers and internet and other resources including texts of lectures, e-textbooks, e-magazines, multimedia, CDs etc.`,
  `It has collaborations and partnerships with many international and educational organizations of USA, Germany, Japan, South Korea, Holland, Spain, Russia, Ukraine, Kazakhstan and Kyrgyzstan.`,
  `The University have faculty members being sent to other Universities and Research Centres of foreign countries for scientific study course and exchange of experience. This increases teaching and learning experience for students.`,
  `The institution has a team of professors and tutors, who are masters in their fields and can put to use the basis of modern techniques and new technologies of training to ensure high quality training of specialists with higher medical education.`,
];

export default function SamarkandPage() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <SamarkandPageLayout.Root>
        <SamarkandPageLayout.FlexChildLayout>
          <Image
            src="/images/Samarkand-University.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </SamarkandPageLayout.FlexChildLayout>
        <SamarkandPageLayout.FlexChildLayout className="flex flex-col gap-4 text-sm  leading-10">
          <SamarkandPageLayout.ContentHeading className="text-[25px] text-left">
            Samarkand State Medical University, Uzbekistan
          </SamarkandPageLayout.ContentHeading>
          <SamarkandPageLayout.Paragraph>
            The Samarkand State Medical University is the first medical
            university in Central Asia. The main goal of the University is to
            train highly qualified medical personnel meeting the requirements of
            world standards.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph>
            The history of the University dates back to1930. Over the years, the
            University has made an invaluable contribution to the development of
            medical science, not only at the local but also at the world level.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph>
            Moving with the times, the University actively introduces innovative
            modular and electronic training technologies in the education
            process. Since 2013, the University has implemented a credit-module
            education system based on and meeting the requirements of ECTS,
            which makes it possible to actively attract foreign students.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph>
            The University has very rich material and technical foundation.
            There are all the required conditions for obtaining high-quality
            medical education, accommodation, and leisure activities for
            students.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph>
            The stability and prestige of the University are determined by the
            development strategy, namely, a stable position in the group of
            higher education institutions-leaders in the training of health
            professionals, formed on the basis of the best traditions of quality
            teaching.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph>
            Top Rank Government Medical University of Uzbekistan. It was founded
            in 1930. Officially accredited & recognized by the Ministry of
            Higher and Secondary Specialized Education, Uzbekistan.
          </SamarkandPageLayout.Paragraph>
        </SamarkandPageLayout.FlexChildLayout>
      </SamarkandPageLayout.Root>
      <SamarkandPageLayout2.Root>
        <SamarkandPageLayout2.LeftSection>
          <SamarkandPageLayout.ContentHeading className="text-2xl mb-3">
            Top Rank Government Medical University of Uzbekistan.
          </SamarkandPageLayout.ContentHeading>
          <SamarkandPageLayout.Paragraph>
            Located in the medium-sized city of Samarkand, a UNESCO World
            Heritage Site for it&apos;s location .
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.ContentHeading className="text-2xl mt-7">
            Advantages of studying in Samarkand State Medical University,
            Uzbekistan
          </SamarkandPageLayout.ContentHeading>
          <div className="flex flex-col gap-3 mt-3">
            <TickGernator data={tickData} />
          </div>
          <SamarkandPageLayout.ContentHeading className="text-2xl mt-14">
            Add features to your MBBS dream at the Samarkand State Medical
            University Uzbekistan
          </SamarkandPageLayout.ContentHeading>
          <SamarkandPageLayout.Paragraph className="mt-3">
            Want to study MBBS abroad in one of the oldest medical universities
            in Central Asia? Then the Samarkand State medical university
            Uzbekistan should be your ultimate destination. We at the MD House
            are experts in placing Indian Students in this medical university in
            Uzbekistan and we pre-book an MBBS seat in your name, well ahead of
            the placement procedure in India. Being a reputed and well
            established medical education consultants in India to have helped
            thousands of Indian students in the past to get placed in the best
            foreign medical universities.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.ContentHeading className="text-2xl mt-14">
            About Samarkand State Medical University:
          </SamarkandPageLayout.ContentHeading>
          <SamarkandPageLayout.Paragraph className="mt-3">
            This university is one of the oldest and the top rank medical
            University in the country. It is in operation since 1930 and has
            since then made invaluable contributions in the field of medical
            science and research at the global leve
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph className="mt-3">
            The University is teamed by world-class faculty members, excellent
            infrastructure, modular and electronic training materials, and
            international student exchange programs. This medical university has
            its own hospital with more than 500 beds for training students and
            also offers internships in other super-specialty hospitals in
            Uzbekistan. The university also has implemented a credit-module
            education system, so as to meet the requirements of the ECTS and to
            attract foreign students.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph className="mt-3">
            The medium of education is completely in English and the University
            offers separate hostel facilities for international students with
            quality food. The total fee for the course including the hostel fee
            is about INR 2,10,000. The duration of the course is about 6 years
            which includes a year of internship.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.ContentHeading className="text-2xl mt-14">
            Course Eligibility and Application process:
          </SamarkandPageLayout.ContentHeading>
          <SamarkandPageLayout.Paragraph className="mt-3">
            The eligible candidate should have completed 17 years of age, before
            seeking admission at the Samarkand State medical university
            Uzbekistan. He should have a minimum of 50% aggregate marks at the
            PCB subjects at the higher secondary level. He should have a valid
            NEET score at the time of admission.
          </SamarkandPageLayout.Paragraph>
          <SamarkandPageLayout.Paragraph className="mt-3">
            Students have to be vigilant and apply online to the University at
            the prescribed time with
          </SamarkandPageLayout.Paragraph>
          <div className="mt-3 flex flex-col gap-3">
            <TickGernator
              data={[
                "Academic mark sheet",
                "School leaving certificate",
                "Medical reports including HIV reports",
                "Health and life insurances as required",
                "A valid passport copy",
                "Decla ration of financial support etc.",
              ]}
            />
          </div>
          <SamarkandPageLayout.Paragraph className="mt-3">
            The MD house helps students with the appropriate application process
            for an MBBS degree at the Samarkand State medical university
            Uzbekistan. With us, you can be sure of your MBBS seat, as we block
            a seat in the university at your name well in advance. We make sure
            that the entire admission process stays as smooth as a cakewalk for
            you at the most affordable cost and through our credible and
            transparent services.
          </SamarkandPageLayout.Paragraph>
          <FaqBuilder
            faqData={SamarkandPageFaqData?.samarkand}
            heading="Important FAQs - Samarkand State Medical University"
          />
        </SamarkandPageLayout2.LeftSection>
        <SamarkandPageLayout2.RightSection className="flex flex-col gap-10">
          <BookAppointment />
          <SidebarLinkCard
            heading="Hostel Facilities at University of Samarkand State Medical"
            links={[
              {
                label: "Large hostels",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Spacious rooms",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Rooms on sharing basis",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Affordable accommodation",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Easily available",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "No traveling cost attached, as the campus is near",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Canteen with clean and healthy food",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Pure and distilled water 24X7",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "CCTV surveillance",
                link: "/samarkand-state-medical-university",
              },
              {
                label: "Guard and other officials for security purposes.",
                link: "/samarkand-state-medical-university",
              },
            ]}
          />
        </SamarkandPageLayout2.RightSection>
      </SamarkandPageLayout2.Root>
    </div>
  );
}

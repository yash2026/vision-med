import Image from "next/image";
import * as BukovinianPageLayout from "./section-card/section-card";
import * as BukovinianPageLayout2 from "./common-layout";
import BookAppointment from "./book-appointment";
import SidebarLinkCard from "./sidebar-link-card";
import { TickGernator } from "./section-card/welcome-section";
import { ComponentPropsWithoutRef } from "react";
import FaqBuilder from "./faq-builder";
import BukovinianPageFaqData from "@/data/accordian.json";

export default function BukovinianPage() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <BukovinianPageLayout.Root>
        <BukovinianPageLayout.FlexChildLayout>
          <Image
            src="/images/Bukovinian-Ukraine.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </BukovinianPageLayout.FlexChildLayout>
        <BukovinianPageLayout.FlexChildLayout className="flex flex-col gap-4">
          <BukovinianPageLayout.ContentHeading className="text-[25px] text-left">
            Bukovinian State Medical University
          </BukovinianPageLayout.ContentHeading>
          <BukovinianPageLayout.Paragraph>
            Bukovinian State Medical University (BSMU) is one of the largest
            higher educational establishments in Chernivtsi. It is a fully
            governmental multistructural educational institution of the highest
            level of accreditation providing educational programmes of different
            levels. BSMU included into the general register of the WHO, Magna
            Charta Universitatum (Bologna, Italy), European University
            Association (EUA), Association of the Carpathian Region
            Universities.
          </BukovinianPageLayout.Paragraph>
          <BukovinianPageLayout.Paragraph>
            Over the years of its existence (1944-2021) the University has
            trained more than 30 000 specialists including the following
            specialties: General Medicine, Dentistry, Pharmacy, Nursing,
            Pediatrics, Medical Psychology, Clinical Pharmacy.
          </BukovinianPageLayout.Paragraph>
        </BukovinianPageLayout.FlexChildLayout>
      </BukovinianPageLayout.Root>
      <BukovinianPageLayout2.Root>
        <BukovinianPageLayout2.LeftSection>
          <BukovinianPageLayout.ContentHeading className="text-2xl">
            Course Eligibility and Application process:
          </BukovinianPageLayout.ContentHeading>
          <div className="flex flex-col gap-3 mt-3">
            <TickGernator
              data={[
                "6 faculties (four medical, stomatological, pharmacological);",
                "educational-scientific institute of post-graduate education;",
                "49 departments;",
                "center of simulation medicine and innovation technologies;",
                "educational-producing chemist;",
                "college",
              ]}
            />
          </div>
          <BukovinianPageLayout.ContentHeading className="text-2xl mt-7">
            Directions of training and specialties
          </BukovinianPageLayout.ContentHeading>
          <BukovinianPageLayout.Paragraph className="mt-3">
            Candidate must have the following documents translated into Polish
            before going for the admission process:
          </BukovinianPageLayout.Paragraph>
          <div className="flex gap-5 items-start mt-3 max-[500px]:flex-col">
            <HighLightedCard className="flex flex-col gap-3">
              <TickGernator
                data={[
                  "Medicine (Doctor of Philosophy, Master);",
                  "General Medicine (Specialist);",
                  "Pediatrics (Doctor of Philosophy, Specialist)",
                  "Stomatology (Doctor of Philosophy, Master, Specialist, Junior Bachelor);",
                  "Medical Psychology (Master);",
                ]}
              />
            </HighLightedCard>
            <HighLightedCard className="flex flex-col gap-3">
              <TickGernator
                data={[
                  "Medical and Psychological Rehabilitation (Master);",
                  "Pharmacy, Industrial Pharmacy (Master, Specialist, Junior specialist);",
                  "Nursing (Doctor of Philosophy, Master, Bachelor, Junior Specialist);",
                  "Technology of Medical Diagnostics and Treatment (Bachelor);",
                  "Biology (doctor of philosophy).",
                ]}
              />
            </HighLightedCard>
          </div>
          <BukovinianPageLayout.Paragraph className="mt-6">
            Forms of education: day-time and correspondence (specialty
            “Pharmacy, Industrial Pharmacy”). Number of students: 5800 including
            1800 foreign citizens. Teaching is provided by the Ukrainian and
            English languages (for foreigners).
          </BukovinianPageLayout.Paragraph>
          <BukovinianPageLayout.Paragraph className="mt-3">
            Material-technical base. The material-technical base of the
            University is located in 15 buildings, and 33 municipal and regional
            medical establishments are used for Clinical Departments. Lecture
            halls, classrooms, educational-practical pharmacy and laboratories
            are equipped with modern technical aids to ensure educational
            process and scientific work, and linked up with Internet.
          </BukovinianPageLayout.Paragraph>
          <BukovinianPageLayout.ContentHeading className="text-2xl mt-14">
            Advantages of MBBS at Bukovinian State Medical University
          </BukovinianPageLayout.ContentHeading>
          <div className="flex flex-col gap-3 mt-3">
            <TickGernator
              data={[
                "The university is accredited by WHO, NMC, Magna Charta Universitatum (Bologna, Italy), European University Association (EUA), and Association of Carpathian Regions.",
                "The professional teaching staff is experienced and trained professionals, ensuring students receive quality instruction.",
                "A well-equipped laboratory for practicing the latest technologies is available.",
                "The university also emphasizes the complete development of its students.",
                "The MBBS degree earned at Bukovinian State Medical University is recognized around the world.",
                "With a few steps, you can apply for admission to a low-cost university.",
                "As of the world ranking, Bukovinian State Medical University is 6407th.",
              ]}
            />
          </div>
          <BukovinianPageLayout.ContentHeading className="text-2xl mt-14">
            Hostel And Accommodation At Bukovinian State Medical University
          </BukovinianPageLayout.ContentHeading>
          <BukovinianPageLayout.Paragraph className="mt-3">
            There are seven different hostels at the Bukovinian State Medical
            University. The hostels have separate rooms for men and women, and
            the rooms are well furnished. There are blankets, pillows, shelves,
            beds, chairs, tables, fans, washing machines, etc. All facilities on
            campus are available such as a supermarket, café, clinic, pharmacy,
            etc. Throughout the day, CCTV cameras monitor the hostel. The cost
            of these facilities is low for all students. There is a library in
            hostel no. 5 that contains logical and systematic manuals
          </BukovinianPageLayout.Paragraph>
          <BukovinianPageLayout.ContentHeading className="text-2xl mt-14">
            Benefits of Studying MBBS in Bukovinian Medical University
          </BukovinianPageLayout.ContentHeading>
          <BukovinianPageLayout.Paragraph className="mt-3">
            Medical education at Bukovinian State Medical University is
            cost-effective and internationally recognized. The benefits of
            pursuing an MD/MBBS education at University are:
          </BukovinianPageLayout.Paragraph>
          <div className="flex gap-5 items-start mt-6 max-[500px]:flex-col">
            <HighLightedCard className="flex flex-col gap-3">
              <TickGernator
                data={[
                  "Cultural exposure is provided for an international student who come to study MBBS at BSMU.",
                  "Snack bars and cafes are located in the campus of the university.",
                  "The cost of living for MBBS students in Ukraine is quite affordable.",
                  "Student exchange programs with countries like Russia, Germany, Poland, USA are organized by Bukovinian State Medical University.",
                  "At BSMU, tuition fees is low. So, it is easy for a student to get an admission in the university.",
                ]}
              />
            </HighLightedCard>
            <HighLightedCard className="flex flex-col gap-3">
              <TickGernator
                data={[
                  "Bukovinian State Medical University provides an opportunity for students to enhance their knowledge and vision.",
                  "Student from BSMU can work in leading scientific research labs with reputed scientists and practitioners.",
                  "There is employment assistance provided to each graduate with aid Bukovinian State Medical University.",
                  "The university offers excellent learning and master practical skills for medical practitioners.",
                  "Assistance is provided by the university for the students to search for a job in relevant fields.",
                ]}
              />
            </HighLightedCard>
          </div>
          <FaqBuilder
            heading="Frequently Asked Questions"
            faqData={BukovinianPageFaqData.bukvonian}
          />
        </BukovinianPageLayout2.LeftSection>
        <BukovinianPageLayout2.RightSection className="flex flex-col gap-10">
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
        </BukovinianPageLayout2.RightSection>
      </BukovinianPageLayout2.Root>
    </div>
  );
}

function HighLightedCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`bg-green-100 rounded-md p-5 ${className}`} {...props} />
  );
}

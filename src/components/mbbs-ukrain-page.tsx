import { ComponentPropsWithoutRef } from "react";
import BookAppointment from "./book-appointment";
import * as MbbsUkrainPageLayout from "./common-layout";
import FaqBuilder from "./faq-builder";
import { ContentHeading, Paragraph } from "./section-card/section-card";
import { TickGernator } from "./section-card/welcome-section";
import SidebarLinkCard from "./sidebar-link-card";
import { TableCell, TableRow } from "./table";
import accordianData from "@/data/accordian.json";
import Link from "next/link";

const whyYouShouldData = [
  `The Course Fee and cost of living are affordable in Ukraine for Indian students.`,
  `You can get direct admission in MBBS in any of the recognized Medical Universities in Ukraine`,
  `If comparing cost of MBBS in India, it is far lower (approx 70% lower) in Ukraine`,
  `Quality of education for MBBS is very high.`,
  `Medical Universities in Ukraine have pool of medical professors, experienced faculties and lecturers`,
  `There is no need of clear TOEFL or IELTS for admission in Ukraine Medical Universities.`,
  `Medical degrees from recognized medical universities are recognized everywhere in the world`,
  `MBBS or other medical degrees are accepted by MCI (Medical Council of India) UNESCO, WHO and FAIMER.`,
  `Medical Universities in Ukraine are known for their ranking at global level`,
  `If you are pursuing Medical Degree or have completed from any of the universities in Ukraine, you are eligible for MCI Screening Test, PLAB (UK), USMLE (USA) and other international licensing exams.`,
  `There is no donation required or hidden fee in Ukrainian medial universities.`,
  `Top Universities in Ukraine have strict criteria to follow to hire professors and faculty for better educational environment.`,
  `English is the mode of instructions and study MBBS in Ukraine or any other medical course.`,
  `1 teacher on 14 students is the ratio that creates a wonderful educational environment.`,
  `Every student gets individual attention`,
  `More than 4000 students from India are pursuing MBBS.`,
  `Top Universities in Ukraine to Study MBBS or Other Medical Degrees`,
];

export default function MbbsUkrainPage() {
  return (
    <MbbsUkrainPageLayout.Root className="mt-20">
      <MbbsUkrainPageLayout.LeftSection>
        <ContentHeading className="text-2xl">
          MBBS in Ukraine Fee Structure 2024-25
        </ContentHeading>
        <Paragraph className="mt-3">
          The cost of studying MBBS in Ukraine is very less compared with
          private medical colleges in India. The total cost of MBBS education
          for six years in Ukraine is about 16.25 Lacs. The fee split up for the
          MBBS course in Ukraine is as follows.
        </Paragraph>
        <div className="mt-4 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee 3900 USD/Year",
              "Hostel Fee 500 USD/ Year",
              "Total Fee 4400 USD/ Year",
            ]}
          />
        </div>
        <Paragraph className="mt-3">
          The Tuition fees can be paid at the university account directly and
          can be paid in two installments, semester wise. There is no donation
          or any hidden fee incurred for MBBS admission in Ukrainian medical
          universities. The Vision Medicos will not charge any additional fee
          for booking an MBBS seat in Ukraine.
        </Paragraph>
        <div className="mt-3">
          <TableRow>
            <TableCell>MBBS in Ukraine Fee</TableCell>
            <TableCell>16.25 Lacs for 6 Year</TableCell>
          </TableRow>
          <CenterHeading className="mt-7">
            MBBS / GENERAL MEDICINE / MD PHYSICIAN 6 YEARS
          </CenterHeading>
          {[
            {
              key: "Tuition Fee",
              value: "3900 USD Per Year",
            },
            {
              key: "Hostel Fee",
              value: "500 USD Per Year",
            },

            {
              key: "Total Per Year",
              value: "4400 USD Per Year",
            },
          ].map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee can be paid directly to University account",
              "Tuition fee can be paid in two easy instalments of 6 months semester wise",
            ]}
          />
        </div>
        <CenterHeading className="mt-7">BDS / DENTISTRY 5 YEARS</CenterHeading>
        {[
          {
            key: "Tuition Fee",
            value: "4300 USD Per Year",
          },
          {
            key: "Hostel Fee",
            value: "500 USD Per Year",
          },

          {
            key: "Total Per Year",
            value: "4800 USD Per Year",
          },
        ].map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.key}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee can be paid directly to University account",
              "Tuition fee can be paid in two easy instalments of 6 months semester wise",
            ]}
          />
        </div>
        <CenterHeading className="mt-7">
          PHARMACY, INDUSTRIAL PHARMACY-MASTERS 5 YEARS
        </CenterHeading>
        {[
          {
            key: "Tuition Fee",
            value: "3900 USD Per Year",
          },
          {
            key: "Hostel Fee",
            value: "500 USD Per Year",
          },

          {
            key: "Total Per Year",
            value: "4400 USD Per Year",
          },
        ].map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.key}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}

        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee can be paid directly to University account",
              "Tuition fee can be paid in two easy instalments of 6 months semester wise",
            ]}
          />
        </div>
        <CenterHeading className="mt-7">NURSING- BACHELOR 1 YEAR</CenterHeading>
        {[
          {
            key: "Tuition Fee",
            value: "2400 USD Per Year",
          },
          {
            key: "Hostel Fee",
            value: "500 USD Per Year",
          },

          {
            key: "Total Per Year",
            value: "2900 USD Per Year",
          },
        ].map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.key}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee can be paid directly to University account",
              "Tuition fee can be paid in two easy instalments of 6 months semester wise",
            ]}
          />
        </div>
        <CenterHeading className="mt-7">
          NURSING- JUNIOR SPECIALIST 3 YEARS
        </CenterHeading>
        {[
          {
            key: "Tuition Fee",
            value: "2000 USD Per Year",
          },
          {
            key: "Hostel Fee",
            value: "500 USD Per Year",
          },

          {
            key: "Total Per Year",
            value: "2500 USD Per Year",
          },
        ].map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.key}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Tuition Fee can be paid directly to University account",
              "Tuition fee can be paid in two easy instalments of 6 months semester wise",
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Reserve a Seat in MBBS Ukraine Admission 2024
        </ContentHeading>
        <Paragraph className="mt-3">
          The Vision Medicos is one of the best MBBS career counselors for
          Indian Students, looking forward to pursuing foreign medical degrees.
          We help them to get direct admission for MBBS, based on the 12 th
          marks, even before their NEET scores are announced. Through Vision
          Medicos, Indian students can block an MBBS degree in Ukrainian
          Universities and start practicing in India after clearing the
          screening test proposed by the Medical Council of India.
        </Paragraph>
        <Paragraph className="mt-3">
          Our experience and knowledge in MBBS admission, visa laws, immigration
          laws, and career counseling have transformed us to be a trusted MBBS
          admission partner by thousands of Indian students and parents. We have
          successfully placed more than 2000 students from India in Ukrainian
          Medical Universities. We serve as a reliable companion and a trusted
          ally for all MBBS related queries for students. Our experts will
          render customized solutions to our MBBS aspirants and we are an
          authorized representative of the MCI approved universities in Europe.
        </Paragraph>
        <Paragraph className="mt-3">
          Contact us to reserve a seat in the best MCI approved medical colleges
          in Ukraine. We are one of the oldest MBBS consultants in India and
          incur no hidden expenses and facts in our attempt to place students in
          Ukrainian medical colleges. We have laid a strong foundation of trust
          in India and guide our students thorough transparent information and
          credible advice.
        </Paragraph>
        <ContentHeading className="text-2xl mt-7">
          Duration of MBBS
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Time - Total time for Medical study or study MBBS is five years & eight months",
              "Medical Universities in Ukraine open admission in September and March for MBBS or other medical courses",
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Eligibility Criteria to Study MBBS in Ukraine
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Students must be complete their secondary education in PCB with minimum 50% marks in general",
              "Category to get admission in MBBS in Ukraine in top University",
              "SC/OBC/ST candidates have scored 40% in 12th",
              "Minimum age to apply is 17 years by 31st December of the Admission Year",
              "He / She have qualified NEET (National eligibility cum entrance test) of India.",
              "Only regular students can apply not from open school.",
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Document Required For Admission to Study MBBS in Ukraine
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "An Application form - filled with your name, age, education and required details",
              "A document (original and a copy of 12th grade certificate on which based admission shall be made)",
              "A copy of passport",
              "6 Photos having size 3 x 4 cm",
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          WHY THE Vision Medicos? WHY BSMU?
        </ContentHeading>
        <Paragraph className="mt-3">
          THE Vision Medicos” IS OFFICIAL AUTHORIZED REPRESENTATIVE OF
          “BUKOVINIAN STATE MEDICAL UNIVERSITY
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              "Bukovinian State Medical University (BSMU) is 75 years old Government university which holds Top Rank among medical universities of World.",
              "BSMU has highest results in FMGE-MCI exam",
              "BSMU is located in the magnificent core of Chernovtsy city in Western Ukraine.",
              "More than 1700 Indian students are studying presently at BSMU.",
              "BSMU has 9 Government hostels with best facilities attached to it where all Indian students live happily.",
              "Indian food is available cooked by professional Indian cooks in university hostels at BSMU",
              "BSMU is one of the first medical university wo started teaching Indian students in English Medium",
              "BSMU is the only university of Ukraine to have separate Girls Hostel for Indian girls.",
              "BSMU has most active Indian Students Society which works for the welfare of Indian students studying in university",
              "The Vision Medicos is official Authorized Representative of BSMU in Asia which is operated by its one of the graduate & alumni from India.",
              "BSMU is the only university of Ukraine where students may pay Tuition fee directly to university account from the very beginning.",
              "BSMU has the largest Alumni of more than 800 Indian doctors working in Government & Private hospitals in all states of India after successfully passing MCI exam in their 1st attempts.",
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Why Should You Study MBBS in Ukraine
        </ContentHeading>
        <Paragraph className="mt-3">
          Ukrainian Medical Universities provide you lower fee structure and
          world-class educational environment. Some other reasons to pursue MBBS
          in Ukraine are given below:
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator data={whyYouShouldData} />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Advantages of studying MBBS in Ukraine
        </ContentHeading>
        <Paragraph className="mt-3">
          There are various reasons that will persuade you to plan MBBS in
          Ukraine from one of the recognized universities.
        </Paragraph>
        <Paragraph className="mt-3">
          Affordable Tuition Fee - Amount paid as annual fee is far lower in
          comparison to private medical colleges in India. The total tuition
          fees of the universities in Ukraine are between USD 3500 -5000. You
          can check MBBS Fee.
        </Paragraph>
        <Paragraph className="mt-3">
          Quality of Education - Quality of Education is far better than what
          one expects. Experienced professors and doctors create a world-class
          educational environment to help you in completing your study in smart
          way. You can know more from Global Medical Foundation about the
          quality of education.
        </Paragraph>
        <Paragraph className="mt-3">
          Admission Test - No Need to Worry about It .You do&apos;t have to
          worry about clearing your entrance exam or English Tests that are
          required for foreign education like IELTS/TOEFL/GMAT and different
          others.
        </Paragraph>
        <Paragraph className="mt-3">
          For MBBS, Admission process is far easier. You can also check the
          process in one of the recognized universities.
        </Paragraph>
        <Paragraph className="mt-3">
          The Bologna Process - It is a series of ministerial meetings and
          agreements between European Countries that is designed to ensure
          comparability of the standards and quality of education qualification
          that is important for high quality of education.
        </Paragraph>
        <Paragraph className="mt-3">
          Ranking at Global Level - Choosing one of the best medical
          universities is important for admission in MBBS in Ukraine. Some of
          the top Universities like Bukovinian State Medical University have
          made their presence at global level.
        </Paragraph>
        <Paragraph className="mt-3">
          Get Globally Recognized Degrees - MBBS degree is recognized globally
          by International Organizations like Medical Council of India (MCI),
          World Health Organization, FAIMER, UNESCO and AMEE. Indian Students
          are eligible for applying for Internet Licensing Exams like USMLE
          (USA), PLAB (UK) and other licensing exams throughout the world.
        </Paragraph>
        <Paragraph className="mt-3">
          Annual Feel Payment Option - You will get annual feel payment option
          of paying entire fee at once. You can pay tuition fee semester wise;
          while hostel feel can be paid annually. Mess charges are paid monthly.
          Fee for MBBS is paid directly to the University - not to any agent or
          consultancy in India.
        </Paragraph>
        <Paragraph className="mt-3">
          FMGE Coaching (Provided in Ukraine) - Students pursuing (or planning)
          to complete MBBS will get FMGE or MCI Screening Test coaching by
          Indian Teachers at the University Campus in Ukraine.
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `English is the primary mode of education and instructions for MBBS in Ukraine. However, you will also learn local language that is necessary during your clinical.`,
              `Teacher student ratio also makes universities in Ukraine popular. It is 1 teacher on 15 students with small size classes.`,
              `You will get on campus assistance as every student goes to Ukraine through Global Medical`,
              `Foundation - provided with on campus assistance through Indian partners.`,
              `More Students, even more than 10000 students are studying MBBS.`,
            ]}
          />
        </div>
        <ContentHeading className="mt-7 text-2xl">
          Special Features of the Educational Process to Study MBBS in Ukraine
        </ContentHeading>
        <div className="flex flex-col gap-3 mt-3">
          <TickGernator
            data={[
              `Low Cost for MBBS or other medical degree`,
              `Prominent Faculty members with English taught MBBS programs and other medical courses`,
              `Simple admission process without any entrance test in top university`,
              `Special Routine Classes for FMGE - MCI exam for MBBS in Ukraine`,
              `Separate hostels for both girls and boys`,
              `80 - 90% result in FMGE - MCI exam in 1st attempt for MBBS`,
              `Medical universities in Ukraine are recommend by MCI/WHO/UK/USA/ECFMG for medical education or MBBS`,
              `24 x 7 Assistance during whole stay by Indian students society to complete MBBS`,
              `Affordable accommodation with Indian food by Indian cooks in Ukraine`,
            ]}
          />
        </div>
        <Paragraph className="mt-3">
          Medical Faculties in these universities are experienced and create a
          better educational environment. They work and try their best together
          with other Departments of the Universities - mainly to improve quality
          of education.
        </Paragraph>
        <ContentHeading className="mt-7 text-2xl">
          Responsibilities Of Universities For Foreign Students Studying MBBS In
          Ukraine
        </ContentHeading>
        <Paragraph className="mt-3">
          Training of foreign citizens is carried out at different departments
          of the Universities by highly qualified and experienced teacher who
          teach MBBS in Ukraine. Most classrooms are equipped with modern
          informative and visual materials, computer and video projection
          devices, mannequins, phantoms, simulators, etc. Students in top
          medical university in Ukraine obtain practical skills at the clinical
          departments of the University, which are based in different medical
          departments of the city and in the University Clinic in Ukraine.
          Students for MBBS or other medical education deal with causes of
          diseases, their signs and symptoms, classic and modern principles of
          laboratory and instrumental diagnostics, medical and procedural ways
          of treatment. Students for MBBS in top universities have a unique
          possibility to communicate with patients and use the acquired
          knowledge and skills in practice, and while studying surgical
          specialties - to observe surgical interventions.
        </Paragraph>
        <Paragraph className="mt-3">
          Foreign students pass successfully state licensing examination - Krok
          - 1” and “krok - 2”. It is possible through the results of these exams
          in Ukraine that hold the leading position in the list of the medical
          universities of Ukraine for MBBS or other Medical Degrees. Moreover,
          foreign graduates in Ukraine complete successfully the procedure of
          diploma verification in their countries. For example, more than 50% of
          Indian graduates pass MCl screening test from the first attempt,
          confirming their countries. For example, more than 50% of Indian
          graduates pass MCl screening test from the first attempt, confirming
          their knowledge and skills and gaining the right to continue medical
          practice in India.
        </Paragraph>
        <Paragraph className="mt-3">
          For the years of its existence the Universities in Ukraine for MBBS or
          other medical degrees provided training to good number of students of
          medical and pharmaceutical specialists from up to 70 countries for
          MBBS or other medical degrees in Ukraine.
        </Paragraph>
        <ContentHeading className="mt-7 text-2xl">
          Medical Universities in Ukraine Provide Degrees in
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Medicine`,
              `Dentistry`,
              `Pharmacy`,
              `Nursing`,
              `Medical and Psychological Rehabilitation`,
            ]}
          />
        </div>
        <ContentHeading className="mt-7 text-2xl">
          MBBS in Ukraine - A Better Alternative for Indian Students
        </ContentHeading>
        <Paragraph className="mt-3">
          For Indian Students, medical degree is one of the prestigious and
          globally accepted degrees. However, fee structure and clearing NEET
          exam are two main reasons that often keep Indian students on back seat
          to drop their idea of pursuing medical degree. entrance exam or pay
          higher fee.
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Direct admission is provided to you on basis of your 12th marks and subject. You have to clear MCI screening test to become a certified medical practitioner in India.`,
              `After completing MBBS in Ukraine or any other degree like MD, MS or dentistry, you are eligible to apply in hospitals or start your own clinic anywhere in the world.`,
              `Total tenure of completing MBBS in Ukraine is 6 years; where you don't have to worry about passing entrance examination to get admission in any of the recognized medical universities in Ukraine.`,
            ]}
          />
        </div>
        <Paragraph className="mt-3">
          Depending on your preferred category, you can take admission for MBBS
          in Ukraine in General medicine, Pediatrics, Pharmacy, Dentistry and
          Surgery.
        </Paragraph>
        <ContentHeading className="mt-7 text-2xl">
          Know More About Ukraine
        </ContentHeading>
        <Paragraph className="mt-3">
          Being second largest nation in Europe and maintaining its position as
          46th biggest nation in the world, Ukraine is the most beautiful and
          charming country in Eastern Europe - located at the northwest end of
          the Black Sea and Russia to the East. It is surrounded by beautiful
          countries like Slovakia, Hungary, Romania, Moldova and different
          others. In the last couple of years, Ukraine has become the most
          popular nation in Europe - because of Medical Professionals (Post
          graduates) - ranking on 4th position in Europe. There are different
          cities like Kyiv, Lviv, Odessa, Chernivtsi, Vinnytsia, Poltava, etc.,
          are well known for globally renowned medical universities. In this
          way, MBBS degree from Ukraine will be the best way of giving your
          career the right dimension.
        </Paragraph>
        <Paragraph className="mt-3">
          Its increasing popularity graph of having medical professional is
          proud for the nation. The credit of this achievement goes to top
          Medical Universities - offering MBBS and Post Graduate degrees like
          MD, MS and different others. One of the proud facts about these
          universities is that they are MCI Approved and accredited by WHO,
          UNESCO and similar other big names in this domain. For Indian
          Students, who cannot afford the medical degree fee in top ranked
          private medical colleges in India (that may be upto 1.5 Crore), MBBS
          in Ukraine is the best option to fulfill their desire to become a
          doctor. Study MBBS in Ukraine from one of the recognized and MCI
          Approved Medical University will pave ways for better career in this
          domain.
        </Paragraph>
        <ContentHeading className="mt-7 text-2xl">
          Application Process
        </ContentHeading>
        <ContentHeading className="mt-3 text-red-500">
          Apply for MBBS in Ukraine Admission 2024-25 Through The Vision Medicos
          Today!
        </ContentHeading>
        <Paragraph className="mt-3">
          We have two ways to apply for admission -
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              <>
                Online -
                <Link className="text-blue-400" href={"/contact-us"}>
                  Online Registration
                </Link>
              </>,
              // <>
              //   Personal Visit to Our Nearest Office -
              //   <Link className="text-blue-400" href={"#"}>
              //     Offices Near You
              //   </Link>
              // </>,
              <>
                You may send us email for any of your queries at{" "}
                <Link
                  className="text-blue-400"
                  href={"mailto:visionmedicos333@gmail.com"}
                >
                  visionmedicos333@gmail.com
                </Link>
              </>,
            ]}
          />
        </div>
        <ContentHeading className="mt-7 text-2xl">
          Top Medical Universities in Ukraine
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3 mb-14">
          <TickGernator
            data={[
              <>
                <Link
                  className="text-blue-400"
                  href={"/bukovinian-state-medical-university"}
                >
                  Bukovinian State Medical University
                </Link>
              </>,
            ]}
          />
        </div>
        <FaqBuilder
          heading="FAQs For MBBS in Ukraine"
          faqData={accordianData["ukraine"]}
        />
      </MbbsUkrainPageLayout.LeftSection>
      <MbbsUkrainPageLayout.RightSection className="flex flex-col gap-10">
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
      </MbbsUkrainPageLayout.RightSection>
    </MbbsUkrainPageLayout.Root>
  );
}

export function CenterHeading({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex items-center justify-center text-[#a97c25] w-full p-2 ${className}`}
      {...props}
    />
  );
}

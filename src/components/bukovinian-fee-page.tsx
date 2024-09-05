import * as BukovinianFeePageLayout from "@/components/common-layout";
import BookAppointment from "./book-appointment";
import { ContentHeading, Paragraph } from "./section-card/section-card";
import { TickGernator } from "./section-card/welcome-section";
import { CenterHeading } from "./mbbs-ukrain-page";
import { TableCell, TableRow } from "./table";
import FaqBuilder from "./faq-builder";
import faqData from "@/data/accordian.json";

export default function BukovinianFeePage() {
  return (
    <BukovinianFeePageLayout.Root className="mt-20">
      <BukovinianFeePageLayout.LeftSection>
        <ContentHeading className="text-2xl">
          Why Bukovinian State Medical University?
        </ContentHeading>
        <div className="mt-3">
          <TickGernator
            data={[
              "Bukovinian State Medical University (BSMU) is 75 years old Government university which holds Top Rank among medical universities of World.",
              "BSMU has highest results in FMGE-MCI exam",
              `BSMU is located in the magnificent core of Chernovtsy city in Western Ukraine.`,
              `More than 1700 Indian students are studying presently at BSMU.`,
              `BSMU has 9 Government hostels with best facilities attached to it where all Indian students live happily.`,
              `Indian food is available cooked by professional Indian cooks in university hostels at BSMU`,
              `BSMU is one of the first medical university wo started teaching Indian students in English Medium`,
              `BSMU is the only university of Ukraine to have separate Girls Hostel for Indian girls.`,
              `BSMU has most active Indian Students Society which works for the welfare of Indian students studying in university`,
              `The MD House is official Authorized Representative of BSMU in Asia which is operated by its one of the graduate & alumni from India.`,
              `BSMU is the only university of Ukraine where students may pay Tuition fee directly to university account from the very beginning.`,
              `BSMU has the largest Alumni of more than 800 Indian doctors working in Government & Private hospitals in all states of India after successfully passing MCI exam in their 1st attempts.`,
            ]}
          />
        </div>
        <ContentHeading className="text-[24px] mt-7">
          “THE MD HOUSE” IS OFFICIAL AUTHORIZED REPRESENTATIVE OF “BUKOVINIAN
          STATE MEDICAL UNIVERSITY” IN ASIA
        </ContentHeading>
        <ContentHeading className="text-2xl mt-7">
          Fees to Study MBBS at the BSMU:
        </ContentHeading>
        <Paragraph className="mt-3">
          The Bukovinian state medical university fees are very affordable and
          the standard of living here is also cheap. Thus the course becomes a
          dream come true for Indian students and their families. The fee split
          up for 6 years MBBS course in BSMU is as follows:
        </Paragraph>
        <Paragraph>COURSES & FEE DETAILS</Paragraph>
        <CenterHeading>
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
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Tuition Fee can be paid directly to University account`,
              `Tuition fee can be paid in two easy instalments of 6 months semester wise`,
            ]}
          />
        </div>
        <CenterHeading>BDS / DENTISTRY 5 YEARS</CenterHeading>
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
              `Tuition Fee can be paid directly to University account`,
              `Tuition fee can be paid in two easy instalments of 6 months semester wise`,
            ]}
          />
        </div>
        <CenterHeading>
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
              `Tuition Fee can be paid directly to University account`,
              `Tuition fee can be paid in two easy instalments of 6 months semester wise`,
            ]}
          />
        </div>
        <CenterHeading>NURSING- BACHELOR 1 YEAR</CenterHeading>
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
              `Tuition Fee can be paid directly to University account`,
              `Tuition fee can be paid in two easy instalments of 6 months semester wise`,
            ]}
          />
        </div>
        <CenterHeading>NURSING- JUNIOR SPECIALIST 3 YEARS</CenterHeading>
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
              `Tuition Fee can be paid directly to University account`,
              `Tuition fee can be paid in two easy instalments of 6 months semester wise`,
            ]}
          />
        </div>
        <div className="mt-7 flex flex-col gap-3">
          <TickGernator
            data={[
              `The total fees to study MBBS in the BSMU for six years in 3900X6=23,400 USD.`,

              ` For a Bachelor of Dentistry degree, the total fees at the Bukovinian State Medical University are 4800 USD per year or Rs. 3,50,400.`,

              `The course fee for studying pharmacy course is 4400 USD per year or Rs. 3,21,200.`,

              `The fees for studying bachelor's degree in nursing is 2900 USD per year or Rs. 2,11,700.`,

              `The fees for Nursing, the junior specialist course is 2500 USD for a year or Rs. 1,82,500.`,
            ]}
          />
        </div>
        <Paragraph className="mt-3 mb-14">
          The best way to seek MBBS admission in the BSMU is through The MD
          House. They serve as a credible career partner for Indian students to
          study MBBS in Ukraine and do not incur any donations or hidden fees
          for the admission process. Students can seek their help to block a
          medical seat in this university in advance and pursue their dream of
          becoming a doctor.
        </Paragraph>
        <FaqBuilder
          heading="Bukovinian State Medical University Ukraine - Important FAQs"
          faqData={faqData["bukvonian-info"]}
        />
      </BukovinianFeePageLayout.LeftSection>
      <BukovinianFeePageLayout.RightSection>
        <BookAppointment />
      </BukovinianFeePageLayout.RightSection>
    </BukovinianFeePageLayout.Root>
  );
}

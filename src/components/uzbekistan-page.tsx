import Link from "next/link";
import BookAppointment from "./book-appointment";
import * as UzbekistanPageLayout from "./common-layout";
import { ContentHeading, Paragraph } from "./section-card/section-card";
import { TickGernator } from "./section-card/welcome-section";
import { TableCell, TableRow } from "./table";
import FaqBuilder from "./faq-builder";
import accordianData from "@/data/accordian.json";

export default function UzbekistanPage() {
  return (
    <UzbekistanPageLayout.Root className="mt-20">
      <UzbekistanPageLayout.LeftSection>
        <ContentHeading className="text-2xl">
          Why study MBBS in Uzbekistan
        </ContentHeading>
        <Paragraph className="mt-3">
          Every year many students are giving preference to the medical
          universities for MBBS in Uzbekistan. Some of the reasons are:
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `High quality of education`,
              `Learning diagnostics`,
              `International standards`,
              `Well experienced professors`,
              `High-class infrastructureSafe and Friendly Environment:`,
              `Modern Transportation and communications facilities`,
            ]}
          />
        </div>
        <Paragraph className="mt-3">
          Along with the above factors, other reasons are like religious
          freedom, law defence, favourable climate, safe society, easy
          availability of regular health insurance etc. Between the time span
          from 1992 and 2018, the Government in Uzbekistan has done a lot of
          effort to provide the quality training opportunity to medical
          students.
        </Paragraph>
        <ContentHeading className="text-2xl mt-7">
          Quick information MBBS in Uzbekistan
        </ContentHeading>
        <div className="mt-3">
          {[
            {
              key: "Recognition",
              value: "NMC and WHO approved",
            },
            {
              key: "Eligibility",
              value: "50% in Physics, Chemistry and Biology Aggregate",
            },

            {
              key: "Course Duration",
              value: "6 Years",
            },
            {
              key: "Minimum Tuition Fee with Hostel",
              value: "₹ 14,35,000",
            },
            {
              key: "Maximum Tuition Fee with Hostel",
              value: "₹ 17,00,000",
            },
            {
              key: "NEET",
              value: "Yes, compulsory",
            },
            {
              key: "IELTS/TOFEL",
              value: "Not Required",
            },
            {
              key: "Medium of Teaching",
              value: "English",
            },
          ].map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </div>
        <ContentHeading className="text-2xl mt-7">
          Advantages of MBBS in Uzbekistan
        </ContentHeading>
        <Paragraph className="mt-3">
          Studying MBBS in Uzbekistan comes with numerous advantages, some of
          which include:
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `There are several medical colleges funded by the government in Uzbekistan and bodies such as WHO and MCL perceive several such medical colleges.`,
              `The quality of education in Uzbekistan is quite reliable and the medical training expenses of the country are very low. .`,
              `The language in which guidance is provided to the students is English. Hence, it becomes easy for Indian students to study in Uzbekistan.`,
              `The MBBS course in Uzbekistan has more accentuation within the logical parts of training.`,
              `The climate of Uzbekistan is delightful and it has an excellent framework.`,
              `The cost of essentials in Uzbekistan is also comparatively low.`,
              `Both hostel and apartment facilities are present and students can choose any one of them for safe living with high-class faculty.`,
              `Traveling from India to Uzbekistan is quite easy as there are several non-stop flights between the two countries.`,
              `More or less every school and college in Uzbekistan has a group of Indian students and so new Indian students have no problem adjusting to the new environment.`,
              `Almost every new student looks for a part-time job to manage their expenses and for other reasons. So there is no particular requirement to go from door to door in search of a job. Colleges already have low-maintenance occupations. Students just need to apply for those.`,
              `Students studying MBBS in Uzbekistan get early exposure to different types of medical practice through practical training and internship at different hospitals.`,
              `All the universities in Uzbekistan are equipped with modern facilities and infrastructure that allow the students to develop in the best learning environment.`,
              `In more or less every country an entrance exam is present that decides whether or not you can get into the university. However, in Uzbekistan, after NEET no entrance exam is required for admission into the MBBS process. This further simplifies the admission process.`,
              `The degree provided at Uzbekistani medical university is recognized worldwide. Thus graduates from Uzbekistani University can practice in any country after clearing the needed licensing exam.`,
              `As discussed before, the cost of living is particularly low here making it an affordable option for students.`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Cost of study for MBBS in Uzbekistan 2024-25
        </ContentHeading>
        <Paragraph className="mt-3">
          The cost of study for MBBS in Uzbekistan 2024-25 isn&apos;t much. The
          cost of education for more or less all the medical universities in the
          country is approximately 15-20 lakh for the entire course.
        </Paragraph>
        <ContentHeading className="text-2xl mt-7">
          MBBS in Uzbekistan Fees Structure 2024-25
        </ContentHeading>
        <Paragraph className="mt-3">
          For Enrolling into any medical college in Uzbekistan the minimum fee
          is 1600 USD per year.
        </Paragraph>
        <div className="mt-3">
          {[
            {
              key: "Name of college",
              value: "Total Tuition Fees 6 years (In US Dollar)",
              value2: "Total Tuition Fees 6 years (In Indian Currency)",
              applyLink: "Apply",
            },
            {
              key: "Samarkand State Medical University",
              value: "$19,200",
              value2: "₹15,93,600",
              applyLink: (
                <>
                  <Link className="text-blue-500" href={"#"}>
                    Apply now
                  </Link>
                </>
              ),
            },
          ].map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value}</TableCell>
              <TableCell>{item.value2}</TableCell>
              <TableCell>{item.applyLink}</TableCell>
            </TableRow>
          ))}
        </div>
        <Paragraph>Note:</Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `USD is calculated above according to exchange rate of 83 INR per dollar`,
              `$1 = ₹83(might vary)`,
              `Provided fees are the approximate value and might change due to a change in currency.`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          MBBS in Uzbekistan for Indian Students
        </ContentHeading>
        <Paragraph className="mt-3">
          Uzbekistan is an Asian country surrounded by Tadzhikistan,
          Afghanistan, and Kazakhstan. The capital of Uzbekistan is Tashkent and
          in terms of population, it is the 42nd most populous city. The Country
          consists of exceptionally trained individuals who consider training an
          important part of everyday life. The most commonly spoken and local
          language of Uzbekistan is Uzbek. However in recent times, there has
          been huge growth in the tourism industry in the country and as a
          result, the people there now speak fluent English. Currently, there is
          a high degree of customary and social flourishing within the nation,
          people who are focused and fixated on their way of life. The city of
          Uzbekistan is quite amazing. Its history is instructive, careful, and
          incredible. The population of Uzbekistan consists of 90% Muslims and
          the remaining 10% of Buddhists, Hindus, and Christians.
        </Paragraph>
        <Paragraph className="mt-3">
          Many Indian students and students throughout the world who want to
          complete their medical training decide to study MBBS in Uzbekistan. It
          can be said that Indian students see Uzbekistan as the most adored
          country for pursuing MBBS. Both assorted practice and bilingual
          investigation are provided at the MBBS facilities in Uzbekistan and as
          a result, Indians are treated with regard and adoration here.
          Uzbekistan is one of the most peaceful and safe places throughout the
          globe allowing the students to explore the well-known objections and
          way of life. For this reason, Indian students often consider studying
          MBBS in Uzbekistan. These reasons have been further listed in the
          following.
        </Paragraph>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Several universities including the Medical Council of India (MCI), WHO, and other universities support practicing medicine from any place they can as the degree is permitted throughout the world.`,
              `Numerous Indian and global students are coming to study MBBS in Uzbekistan as the nature and living facilities are too cordial here.`,
              `Many students who appeared for NEET and didn't get confirmation in India, initially dropped their thoughts. However, after they came to Uzbekistan they have been able to complete their dreams in pitiful school places.`,
              `Currently, the universities and colleges in Uzbekistan have become quite accomplished, and experienced teachers and staff have been integrated into the facilities.`,
              `The Colleges have a 5+1 year course. One year is to go through an internship program. The colleges and schools further provide them with an entry-level program for positioning.`,
              `There are around 7000+ students from within India in the worldwide student exchange. So the biological system of their schooling is very important.`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Best Medical University in Uzbekistan
        </ContentHeading>
        <ContentHeading className="text-xl mt-3">
          Samarkand State Medical University is the 1st Rank Medical University
          in Uzbekistan.
        </ContentHeading>
        <Paragraph className="mt-3">
          Samarkand State Medical University of Uzbekistan is one of the best
          medical universities in the world. The university is located in
          Samarkand. The university offers a variety of programs that can help
          students become doctors. The university has a strong reputation for
          its medical education. The university has a variety of programs that
          can help students become doctors. The university has a strong
          reputation for its medical education.
        </Paragraph>
        <Paragraph className="mt-3">
          Samarkand State Medical University of Uzbekistan offers a variety of
          programs that can help students become doctors. The programs include
          medical sciences, medical training, and medical research. The
          university has a strong reputation for its medical education. The
          university has a variety of programs that can help students become
          doctors. The programs include medical sciences, medical training, and
          medical research.
        </Paragraph>
        <Paragraph className="mt-3">
          MBBS of Uzbekistan offers a variety of programs that can help students
          become doctors. The programs include medical sciences, medical
          training, and medical research. The university has a strong reputation
          for its medical education.
        </Paragraph>
        <ContentHeading className="text-2xl mt-7">
          Top Rank Medical University of Uzbekistan
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Samarkand State Medical University`,
              `Bukhara State Medical Institute`,
              `Tashkent State Dental Institute`,
              `First Tashkent State Medical Institute`,
              `Second Tashkent State Medical Institute`,
              `Akfa University Medical School`,
              `Fergana State University Medical Centre`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Eligibility Criteria- For MBBS in Uzbekistan:
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Students must complete the 10+2 examination with a percentage of 50% for General category students.`,
              `Age of the candidate should be 17 years as on 31St December of the year of the admission process.`,
              `Subjects should be Physics, Chemistry & Biology`,
              `Students must have cleared the NEET examinations`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          Admission requirements are mentioned below:-
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3">
          <TickGernator
            data={[
              `Admission fee`,
              `50% rating scores`,
              `Paying capacity`,
              `Passport with appropriate entry visa`,
              `Medical references`,
              `Mark sheets`,
              `Invitation letter`,
              `Birth certificate`,
              `Medical certificate`,
              `8 Passport size photographs`,
            ]}
          />
        </div>
        <ContentHeading className="text-2xl mt-7">
          The MD House- Your best counsellor & guide:
        </ContentHeading>
        <Paragraph className="mt-3">
          The MD House is the organisation which helps the students in many ways
          to get admission in the countries like Uzbekistan. They will guide for
          admission in Top MCI result University in Uzbekistan. They are also
          working with the medical university in Uzbekistan. Not only this, The
          MD House is the official representative of the Samarkand State Medical
          University, Uzbekistan. They have successfully placed more than 3500
          students from all over India to Top rank university in Uzbekistan as
          well as in other countries. They work with the lifelong vision for
          student&apos;s career growth. Students can get all fact and details
          from their experienced, tried and tested career counsellors.
        </Paragraph>
        <ContentHeading className="text-2xl mt-7">
          Top Medical Universities in Uzbekistan
        </ContentHeading>
        <div className="mt-3 flex flex-col gap-3 mb-14">
          <TickGernator
            data={[
              <>
                <Link
                  className="text-blue-500"
                  href={"/samarkand-state-medical-university"}
                >
                  Samarkand State Medical University
                </Link>
              </>,
            ]}
          />
        </div>
        <FaqBuilder
          heading="MBBS in Uzbekistan - Important FAQs"
          faqData={accordianData.uzbekistan}
        />
      </UzbekistanPageLayout.LeftSection>
      <UzbekistanPageLayout.RightSection>
        <BookAppointment />
      </UzbekistanPageLayout.RightSection>
    </UzbekistanPageLayout.Root>
  );
}

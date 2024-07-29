import Image from "next/image";
import WidthWrapper from "../width-wrapper";
import * as WelcomeSectionLayout from "./section-card";
import TickIcon from "@/icons/tickIcon";

const data = [
  "Excellent Experience of 20 years",
  "Assisting 3500+ MBBS Admissions",
  "1200 guided doctors working in India",
  "We follow NMC rules strictly",
  "Transparency in Procedures",
  "Official Admisison Partners",
  "100 % Guaranteed Admissions",
  "Personalised Guidance",
];

export default function WelcomeSection() {
  return (
    <WidthWrapper>
      <WelcomeSectionLayout.Root>
        <WelcomeSectionLayout.FlexChildLayout className="flex flex-col gap-4 text-sm">
          <WelcomeSectionLayout.ContentHeading className="text-[25px]">
            Welcome To MBBS With MD House
          </WelcomeSectionLayout.ContentHeading>
          <p className="leading-7">
            The MD House has guided more than 3500 MBBS students from India 1200
            MBBS students completed degrees and practicing in India & Abroad,
            The Md House helps students in saving valuable money, We always try
            to control overall expenses.The Md House works with the lifelong
            vision for student’s career growth. The MD House has been identified
            as the most trusted career partner by thousands of satisfied
            students and parents.
          </p>
          <AboutMD />
          <div className="flex gap-10 justify-around pt-4">
            <Image
              src="/30-Years-image.webp"
              alt="30 years celebrating"
              width={100}
              height={100}
            />
            <Image
              src="/isocertified-image.webp"
              alt="iso certified image"
              width={100}
              height={100}
            />
            <Image
              src="/graduationcap-image.webp"
              alt="graduation cap"
              width={100}
              height={100}
            />
          </div>
        </WelcomeSectionLayout.FlexChildLayout>
        <WelcomeSectionLayout.FlexChildLayout>
          <Image
            src="/welcome-section-image.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
          />
        </WelcomeSectionLayout.FlexChildLayout>
      </WelcomeSectionLayout.Root>
    </WidthWrapper>
  );
}

function AboutMD() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div className="flex gap-1">
            <TickIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

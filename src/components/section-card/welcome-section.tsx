import Image from "next/image";
import WidthWrapper from "../width-wrapper";
import * as WelcomeSectionLayout from "./section-card";
import TickIcon from "@/icons/tickIcon";
import { ReactNode } from "react";

const data = [
  "Excellent Experience",
  "Assisting 1000+ MBBS Admissions",
  "200 guided doctors working in India",
  "We follow NMC rules strictly",
  "Transparency in Procedures",
  "Official Admisison Partners",
  "100 % Guaranteed Admissions",
  "Personalised Guidance",
];

export default function WelcomeSection() {
  return (
    <WidthWrapper className="max-[1250px]:px-10 max-[600px]:px-4">
      <WelcomeSectionLayout.Root>
        <WelcomeSectionLayout.FlexChildLayout className="flex flex-col gap-8 text-sm">
          <WelcomeSectionLayout.ContentHeading className="text-[25px]">
            Welcome To MBBS With Vision Medicos
          </WelcomeSectionLayout.ContentHeading>
          <p className="leading-7">
            The Vision Medicos has guided more than 1000 MBBS students from
            India 200 MBBS students completed degrees and practicing in India &
            Abroad, The Vision Medicos helps students in saving valuable money,
            We always try to control overall expenses.The Vision Medicos works
            with the lifelong vision for student’s career growth. The Vision
            Medicos has been identified as the most trusted career partner by
            thousands of satisfied students and parents.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <TickGernator data={data} />
          </div>
          {/* <div className="flex gap-10 justify-around pt-4">
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
          </div> */}
        </WelcomeSectionLayout.FlexChildLayout>
        <WelcomeSectionLayout.FlexChildLayout>
          <Image
            src="/images/welcome_page_doctor.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </WelcomeSectionLayout.FlexChildLayout>
      </WelcomeSectionLayout.Root>
    </WidthWrapper>
  );
}

export function TickGernator({
  data,
}: Readonly<{ data: (string | ReactNode)[] }>) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex items-start gap-1">
          <div className="w-[20px] translate-y-[2px]">
            <TickIcon />
          </div>
          <WelcomeSectionLayout.Paragraph>
            {item}
          </WelcomeSectionLayout.Paragraph>
        </div>
      ))}
    </>
  );
}

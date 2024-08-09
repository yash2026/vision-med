import React from "react";
import WidthWrapper from "../width-wrapper";
import Choosecards from "./choose-cards";

export type WhyDataType = {
  icon: string;
  digit: number;
  title: string;
  description: string;
};
const chooseusData: WhyDataType[] = [
  {
    icon: "/rewards.svg",
    digit: 1,
    title: "Rewarding Color",
    description:
      "Students pursuing higher education from abroad can have a rewarding career promising the benefit of higher and stable earnings with endless growth in the modern day life.",
  },
  {
    icon: "/easyadm.svg",
    digit: 2,
    title: "Easy Admission Process",
    description:
      "The admission process for study abroad is free from hassle. It is a few step procedures that an applicant need to follow for admission to MBBS and other courses.",
  },
  {
    icon: "/culture.svg",
    digit: 3,
    title: "International Culture",
    description:
      "Indian students get the opportunity to interact with students from different nations and learn about the different international culture. It gives exposure to International Culture. ",
  },
  {
    icon: "/education.svg",
    digit: 4,
    title: "World Class Education",
    description:
      "The universities and colleges abroad provide the opportunity of world-class education to the international students interested in higher studies top ranked educational institutions.",
  },
];

function Whychooseus() {
  return (
    <div className="bg-violet-950 pt-8 pb-8">
      <WidthWrapper>
        <div className="flex flex-col gap-3 mb-8">
          <p className="text-white">WHY CHOOSE US</p>
          <div className="grid grid-cols-2">
            <p className="text-white font-bold text-[30px]">
              The favourable reasons to choose us.
            </p>
            <p className="leading-7 text-white">
              MBBS With MD House as a dependable education abroad consultant in
              India believes in rendering the satisfactory admission abroad
              support and solution for various courses abroad. We value your
              career more than anything else.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          {chooseusData.map((item, index) => (
            <Choosecards key={index} {...item} />
          ))}
        </div>
      </WidthWrapper>
    </div>
  );
}

export default Whychooseus;

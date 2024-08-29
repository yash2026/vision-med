import React from "react";
import WidthWrapper from "./width-wrapper";
import OurReach from "@/icons/ourreach";
import SuccessStories from "@/icons/successstories";
import GraduateCap from "@/icons/graduatecap";
import UniversityIcon from "@/icons/university";

const heroCardData = [
  {
    icon: <GraduateCap width={61} />,
    name: "MBBS Abroad",
  },
  {
    icon: <UniversityIcon width={50} />,
    name: "Universities",
  },
  {
    icon: <OurReach width={45} />,
    name: "Our Reach",
  },
  {
    icon: <SuccessStories width={45} />,
    name: "Success Stories",
  },
];

export default function HeroCard() {
  return (
    <WidthWrapper>
      <div className="grid grid-cols-4 shadow-lg border rounded-md max-[750px]:grid-cols-2 max-[400px]:grid-cols-1">
        {heroCardData.map((item) => (
          <div
            className="flex flex-col gap-2 items-center p-3 border-r border-b"
            key={item?.name}
          >
            {item?.icon}
            <h3 className="text-lg font-semibold">{item?.name}</h3>
          </div>
        ))}
      </div>
    </WidthWrapper>
  );
}

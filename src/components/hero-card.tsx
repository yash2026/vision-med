import React from "react";
import WidthWrapper from "./width-wrapper";
import OurReach from "@/icons/ourreach";
import SuccessStories from "@/icons/successstories";
import GraduateCap from "@/icons/graduatecap";
import UniversityIcon from "@/icons/university";
import TruthyRenderer from "./truthy-renderer";

const heroCardData = [
  {
    icon: <GraduateCap fill="#a97c25" width={61} />,
    name: "MBBS Abroad",
  },
  {
    icon: <UniversityIcon fill="#a97c25" width={50} />,
    name: "Universities",
  },
  {
    icon: <OurReach fill="#a97c25" width={45} />,
    name: "Our Reach",
  },
  {
    icon: <SuccessStories fill="#a97c25" width={45} />,
    name: "Success Stories",
  },
] as const;

export default function HeroCard({ firstName }: { firstName?: string }) {
  return (
    <WidthWrapper>
      <div className="grid grid-cols-4 shadow-lg border rounded-md max-[750px]:grid-cols-2 max-[400px]:grid-cols-1">
        {heroCardData.map((item, index) => (
          <div
            className="flex flex-col gap-2 items-center p-3 border-r border-b hover:bg-black/5"
            key={item?.name}
          >
            {item?.icon}
            <TruthyRenderer value={index === 0}>
              <h3 className="text-lg font-semibold">
                {firstName || item?.name}
              </h3>
            </TruthyRenderer>
            <TruthyRenderer value={index !== 0}>
              <h3 className="text-lg font-semibold">{item?.name}</h3>
            </TruthyRenderer>
          </div>
        ))}
      </div>
    </WidthWrapper>
  );
}

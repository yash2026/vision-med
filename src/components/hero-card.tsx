import React from "react";
import WidthWrapper from "./width-wrapper";
import OurReach from "@/icons/ourreach";
import SuccessStories from "@/icons/successstories";
import GraduateCap from "@/icons/graduatecap";
import UniversityIcon from "@/icons/university";
import TruthyRenderer from "./truthy-renderer";

const heroCardData = [
  {
    icon: (
      <GraduateCap
        fill="#a97c25"
        className="w-[61px] max-[750px]:w-[51px] max-[450px]:w-[35px]"
      />
    ),
    name: "MBBS Abroad",
  },
  {
    icon: (
      <UniversityIcon
        fill="#a97c25"
        className="w-[50px] max-[750px]:w-[40px] max-[450px]:w-[27px]"
      />
    ),
    name: "Universities",
  },
  {
    icon: (
      <OurReach
        fill="#a97c25"
        className="w-[45px] max-[750px]:w-[35px] max-[450px]:w-[25px]"
      />
    ),
    name: "Our Reach",
  },
  {
    icon: (
      <SuccessStories
        fill="#a97c25"
        className="w-[45px] max-[750px]:w-[35px] max-[450px]:w-[25px]"
      />
    ),
    name: "Success Stories",
  },
] as const;

export default function HeroCard({ firstName }: { firstName?: string }) {
  return (
    <WidthWrapper>
      <div className="grid grid-cols-4  shadow-lg border rounded-md max-[750px]:grid-cols-2  -translate-y-8 max-[400px]:translate-y-0 max-[400px]:my-4">
        {heroCardData.map((item, index) => (
          <div
            className="flex flex-col gap-2 max-[450px]:gap-1 items-center justify-center p-3 border-r border-b hover:bg-black/5"
            key={item?.name}
          >
            {item?.icon}
            <TruthyRenderer value={index === 0}>
              <h3 className="text-lg font-semibold max-[750px]:text-sm max-[400px]:text-xs max-[450px]:tracking-tighter text-center">
                {firstName || item?.name}
              </h3>
            </TruthyRenderer>
            <TruthyRenderer value={index !== 0}>
              <h3 className="text-lg font-semibold max-[750px]:text-sm max-[400px]:text-xs max-[450px]:tracking-tighter text-center">
                {item?.name}
              </h3>
            </TruthyRenderer>
          </div>
        ))}
      </div>
    </WidthWrapper>
  );
}

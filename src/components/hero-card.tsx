import React from "react";
import WidthWrapper from "./width-wrapper";

const heroCardData = [
  {
    icon: <p>icon</p>,
    name: "MBBS Abroad",
  },
  {
    icon: <p>icon</p>,
    name: "Universities",
  },
  {
    icon: <p>icon</p>,
    name: "Our Reach",
  },
  {
    icon: <p>icon</p>,
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

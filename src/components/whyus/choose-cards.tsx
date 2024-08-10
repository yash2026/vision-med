import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { WhyDataType } from "./why-choose-us";

function Choosecards({ description, digit, icon, title }: WhyDataType) {
  return (
    <Card className="hover:-translate-y-2 transition-all hover:border-b-8 hover:border-b-[#a97c25] flex-grow group">
      <CardBody>
        <div className="flex flex-col text-sm m-2 my-4">
          <div className="flex justify-between mb-5 items-center pt-4">
            <img
              src={icon}
              className="h-16 w-16 justify-self-center svg-color group-hover:svg-hover"
              alt={title}
            />
            <p className="text-[80px] font-bold text-[#EAEDF5] pr-2">
              0{digit}
            </p>
          </div>
          <p className="font-bold mb-2 mt-3 text-lg text-[#2f4688]">{title}</p>
          <p className="leading-7">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default Choosecards;

import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { WhyDataType } from "./why-choose-us";

function Choosecards({ description, digit, icon, title }: WhyDataType) {
  return (
    <Card className="hover:-translate-y-2 transition-all hover:border-b-5 hover:border-b-[#a97c25] flex-grow">
      <CardBody>
        <div className="flex flex-col text-sm p-4 mb-0 ">
          <div className="flex justify-between mb-5 items-center pt-4">
            <img
              src={icon}
              className="h-16 w-16 justify-self-center text-[#2F4688]"
            />
            <p className="text-[70px] font-bold text-black/25 pr-2">0{digit}</p>
          </div>
          <p className="font-bold mb-2 mt-3 text-lg text-[#2f4688]">{title}</p>
          <p className="leading-7">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default Choosecards;

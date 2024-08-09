import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { WhyDataType } from "./why-choose-us";

function Choosecards({ description, digit, icon, title }: WhyDataType) {
  return (
    <div className="hover:-translate-y-2 transition-all">
      <Card>
        <CardBody>
          <div className="flex flex-col p-4 text-sm">
            <div className="flex justify-between mb-5 items-center pt-4">
              <img
                src={icon}
                className="h-16 w-16 justify-self-center text-[#2F4688]"
              />

              <p className="text-[70px] font-bold text-black/25">0{digit}</p>
            </div>
            <p className="font-bold mb-4 text-[#2f4688]">{title}</p>
            <p className="leading-7">{description}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Choosecards;

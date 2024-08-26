import { Card } from "@nextui-org/react";
import React, { ReactNode } from "react";
type OurservicesProps = {
  icon: string;
  title: string;
  // paragraph: string;
};
function Ourservicescards({ icon, title }: OurservicesProps) {
  return (
    <Card>
      <div className="flex p-4 flex-col gap-2 items-center text-center">
        <img src={icon} alt="" className="h-10 w-10" />
        <h3 className="font-semibold text-medium">{title}</h3>
        {/* <p className="text-xs font-medium">{paragraph}</p> */}
      </div>
    </Card>
  );
}

export default Ourservicescards;

import { Card } from "@nextui-org/react";
import React, { ReactNode } from "react";
type OurservicesProps = {
  icon: ReactNode;
  title: string;
  paragraph: string;
};
function Ourservicescards({ icon, paragraph, title }: OurservicesProps) {
  return (
    <Card>
      <div className="flex p-4 flex-col gap-2 items-center text-center">
        <span>{icon}</span>
        <h3 className="font-semibold text-medium">{title}</h3>
        <p className="text-xs font-medium">{paragraph}</p>
      </div>
    </Card>
  );
}

export default Ourservicescards;

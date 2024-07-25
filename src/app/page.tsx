"use client";

import { Card } from "@/components/why-choose-us/card";
import Reward from "@/icons/reward";

export default function Home() {
  return (
    <div className="pt-[80px] flex items-center justify-center">
      <Card
        key={"1"}
        width={"250px"}
        height={"300px"}
        iconComp={Reward}
        numbering={"01"}
        cardTitle={"Rewarding Career"}
        cardContent={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit reprehenderit, iure iste est fugiat"
        }
      />
    </div>
  );
}

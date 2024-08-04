import React from "react";
import WidthWrapper from "../width-wrapper";
import Ourservicescards from "./ourservices-cards";
import Counseling from "@/icons/counseling";
import AdmSupport from "@/icons/admSupport";
import University from "@/icons/university";
import VisaIcon from "@/icons/visaicon";
import TravelIcon from "@/icons/travelIcon";
import AccomdationIcon from "@/icons/accomdationIcon";
import Briefing from "@/icons/briefing";

const sizeAttributes = {
  height: 40,
  width: 40,
};

const services = [
  {
    icon: <Counseling {...sizeAttributes} />,
    title: "Free Career Counselling Upto PG",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <AdmSupport {...sizeAttributes} />,
    title: "Admission Guidelines",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <University {...sizeAttributes} />,
    title: "University Selection",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <AdmSupport {...sizeAttributes} />,
    title: "Documentation",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <VisaIcon {...sizeAttributes} />,
    title: "Visa",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <TravelIcon {...sizeAttributes} />,
    title: "Travel",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <AccomdationIcon {...sizeAttributes} />,
    title: "Accommodation",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: <Briefing {...sizeAttributes} />,
    title: "Briefings",
    paragraph:
      "Bukovinian State Medical University (BSMU) is one of the largest",
  },
];

function Ourservices() {
  return (
    <WidthWrapper className="my-20">
      <div className=" mt-5 flex flex-col gap-20">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-semibold text-[30px]">Our Services</h2>
          <p className="text-center max-w-[600px]">
            we provide 100% services right from application to food and
            accomodation throughout your course duration.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {services.map((item, index) => (
            <Ourservicescards key={index} {...item} />
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
}

export default Ourservices;

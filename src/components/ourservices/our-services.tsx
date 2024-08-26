import React from "react";
import WidthWrapper from "../width-wrapper";
import Ourservicescards from "./ourservices-cards";

const sizeAttributes = {
  height: 40,
  width: 40,
};

const services = [
  {
    icon: "/counseling.svg",
    title: "Free Career Counselling Upto PG",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/guidelines.svg",
    title: "Admission Guidelines",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/university.svg",
    title: "University Selection",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/documentation.svg",
    title: "Documentation",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/visaIcon.svg",
    title: "Visa",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/travelIcon.svg",
    title: "Travel",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/accomodation.svg",
    title: "Accommodation",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
  },
  {
    icon: "/briefing.svg",
    title: "Briefings",
    // paragraph:
    // "Bukovinian State Medical University (BSMU) is one of the largest",
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
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1 gap-5">
          {services.map((item, index) => (
            <Ourservicescards key={index} {...item} />
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
}

export default Ourservices;

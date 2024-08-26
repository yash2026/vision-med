import React, { ReactNode } from "react";
import WidthWrapper from "../width-wrapper";
import Image from "next/image";
import Testimonialcards from "./testimonial-cards";

export type TestimonialType = {
  image: ReactNode;
  name: string;
  description: string;
};

const testimonialData: TestimonialType[] = [
  {
    image: <Image src="/cutedoc.png" height={80} width={80} alt="doc1" />,
    name: "Dr. Abhinav Kaushal - The MD House",
    description:
      "I Wanted A University That Challenged Me, Making Me Think Beyond The Textbook And Into The World Of Ideas. I Knew That Because BSMU Is A Committed Liberal Medical University.",
  },
  {
    image: <Image src="/cutedoc.png" height={80} width={80} alt="doc2" />,
    name: "Dr. Jasdeep Brar",
    description:
      " Once I Got Admission In I Guessed My Dreams Came Through. I Was Searching For A Good Medical Institution That Could Make Me An Internationally Reputed Doctor. I Found It Here At BSMU.",
  },
  {
    image: <Image src="/cutedoc.png" height={80} width={80} alt="doc3" />,
    name: "Dr. Navjot Singh Ghumaan",
    description:
      "BSMU encouraged me to pursue my other interests outside Medicine and still maintain top-grades. If you are imaginative, persevering and motivated, BSMU is the place for you.",
  },
];

function Testimonials() {
  return (
    <div className="pt-8 pb-8 bg-blue-100">
      <WidthWrapper>
        <div className="flex flex-col gap-8 items-center text-sm">
          <p className="font-bold text-[#2f4688] text-[25px]">
            Student Testimonials
          </p>
          <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 gap-3">
            {testimonialData.map((item, index) => (
              <Testimonialcards key={index} {...item} />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}

export default Testimonials;

import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { TestimonialType } from "./testimonials";

function Testimonialcards({ image, name, description }: TestimonialType) {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex flex-col gap-3 p-4 items-center text-center">
            <p>{image}</p>
            <p className="font-bold text-[20px] leading-6">{name}</p>
            <p className=" leading-7">"{description}"</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Testimonialcards;

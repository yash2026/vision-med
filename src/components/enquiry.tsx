import React from "react";
import WidthWrapper from "./width-wrapper";
import Image from "next/image";
import EnquiryCard from "./enquiry-card";

function Enquiry() {
  return (
    <div className="p-16 max-[650px]:p-8 max-[500px]:p-0">
      <WidthWrapper>
        <div className="flex gap-4 justify-evenly">
          <EnquiryCard />
          <div className="max-[880px]:hidden self-center ">
            <Image
              src="/cutedoctor.png"
              width={500}
              height={500}
              alt="Doctor Image"
            />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}

export default Enquiry;

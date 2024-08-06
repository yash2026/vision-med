import React from "react";
import EnquiryForm from "./enquiry-form";
import WidthWrapper from "./width-wrapper";
import Image from "next/image";

function Enquiry() {
  return (
    <div className="p-16">
      <WidthWrapper>
        <div className="flex gap-4">
          <EnquiryForm />
          <div>
            <Image
              src="/cutedoc.png"
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

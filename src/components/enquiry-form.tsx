import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React from "react";

function EnquiryForm() {
  return (
    <div>
      <Card className="p-16">
        <CardBody>
          <div className="flex flex-col gap-4 text-sm">
            <p className="text-center font-bold text-[#2f4688] text-[20px]">
              Enquiry Now
            </p>
            <p className="leading-7 text-center">
              Please feel welcome to contact our friendly reception staff with
              any general or medical enquiry. Our doctors will receive or return
              any urgent calls.
            </p>
            <Input type="text" label="Name" />
            <Input type="email" label="Email" />
            <Input type="number" label="Phone" />
            <Input type="text" label="Message" />
            <Button>Submit Now</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default EnquiryForm;

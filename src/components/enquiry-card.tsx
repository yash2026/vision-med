import { Card, CardBody } from "@nextui-org/react";
import EnquiryForm from "./enquiry-form";

export default function EnquiryCard() {
  return (
    <div>
      <Card className="p-16 max-[1024px]:px-8 max-w-[600px] max-[650px]:p-8 max-[450px]:p-4">
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
            <EnquiryForm />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

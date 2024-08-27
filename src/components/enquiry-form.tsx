import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

function EnquiryForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input type="text" label="Name" />
      <Input type="email" label="Email" />
      <Input type="number" label="Phone" />
      <Textarea label="Message" />
      <Button>Submit Now</Button>
    </form>
  );
}

export default EnquiryForm;

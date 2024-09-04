import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React from "react";
import { ContentHeading } from "./section-card/section-card";

function BookAppointment() {
  return (
    <Card>
      <div className="p-6">
        <CardBody>
          <div className="flex flex-col gap-5 text-sm">
            <ContentHeading className="text-xl">
              Book An Appointment
            </ContentHeading>
            <div className="flex flex-col gap-3">
              <Input type="text" label="Name" />
              <Input type="email" label="Email" />
              <Input type="number" label="Phone" />
              <Input type="text" label="Address" />
            </div>
            <Button size="lg" color="primary">
              Book Appointment
            </Button>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}

export default BookAppointment;

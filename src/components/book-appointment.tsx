"use client";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React, { FormEvent, useRef, useState } from "react";
import { ContentHeading, Paragraph } from "./section-card/section-card";
import emailjs from "@emailjs/browser";
import { EmailSendData } from "@/types/form-data";

function BookAppointment() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sentSuuccfull, setSentSuccessfull] = useState(false);
  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        EmailSendData.SERVICE_ID,
        EmailSendData.TEMPLATE_ID,
        form.current!,
        {
          publicKey: EmailSendData.PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current!.reset();
          setLoading(false);
          setSentSuccessfull(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  }

  if (sentSuuccfull) {
    return (
      <Card>
        <div className="p-6">
          <CardBody>
            <div className="flex flex-col items-center gap-2">
              <ContentHeading className="text-xl">
                Book An Appointment
              </ContentHeading>
              <ContentHeading>Sent data successfully!!</ContentHeading>
              <Paragraph>We will get back to you soon.</Paragraph>
            </div>
          </CardBody>
        </div>
      </Card>
    );
  }
  return (
    <Card>
      <div className="p-6">
        <CardBody>
          <div className="flex flex-col gap-5 text-sm">
            <ContentHeading className="text-xl">
              Book An Appointment
            </ContentHeading>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3"
            >
              <Input type="text" label="Name" name="user_name" />
              <Input type="email" label="Email" name="user_email" />
              <Input type="number" label="Phone" name="user_phone" />
              <Input type="text" label="Address" name="user_address" />
              <Button
                disabled={loading}
                isLoading={loading}
                size="lg"
                color="primary"
                type="submit"
              >
                Book Appointment
              </Button>
            </form>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}

export default BookAppointment;

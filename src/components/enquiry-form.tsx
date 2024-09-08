"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailSendData } from "@/types/form-data";
import { ContentHeading, Paragraph } from "./section-card/section-card";

function EnquiryForm() {
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
      <div className="flex flex-col items-center gap-2">
        <ContentHeading>Sent data successfully!!</ContentHeading>
        <Paragraph>We will get back to you soon.</Paragraph>
      </div>
    );
  }
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <Input type="text" label="Name" name="user_name" />
      <Input type="email" label="Email" name="user_email" />
      <Input type="number" label="Phone" name="user_phone" />
      <Input type="number" max={720} label="Neet Score" name="user_neet" />
      <Input type="text" label="12th Passed Year" name="user_12th" />
      <Textarea label="Message" name="user_message" />
      <Button
        disabled={loading}
        isLoading={loading}
        type="submit"
        size="lg"
        color="primary"
      >
        Submit Now
      </Button>
    </form>
  );
}

export default EnquiryForm;

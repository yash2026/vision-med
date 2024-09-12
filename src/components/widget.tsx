"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import React, { ReactNode, useState } from "react";
import QuickEnquiryModal from "./quick-enquiry-modal";
import CustomerSupport from "@/icons/customer-support";
import TruthyRenderer from "./truthy-renderer";
import Link from "next/link";
import widgetData from "@/data/widgets.json";

function Widget() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const [supportToggle, setSupportToggle] = useState(false);
  return (
    <>
      <div className="fixed bottom-2 right-3">
        <Button
          title="click on this to open and close support menu"
          onClick={() => setSupportToggle(!supportToggle)}
          className={`w-[80px] h-[80px] border-2 bg-black shadow-2xl rounded-full ${
            supportToggle ? "" : "animate-bounce"
          }`}
        >
          <CustomerSupport width={60} fill="#fff" />
        </Button>
        <TruthyRenderer value={supportToggle}>
          <div className="absolute w-[300px] bottom-full right-full z-10 shadow-2xl bg-white rounded-3xl border-2 p-4 grid grid-cols-2 gap-2 max-[500px]:grid-cols-1 max-[500px]:w-[200px]">
            <Button onPress={onOpen} variant="solid" color="warning">
              Quick Enquiry
            </Button>
            <SameStyleButton>
              <Link href={widgetData.widgetsData.twitter}>Twitter</Link>
            </SameStyleButton>
            <SameStyleButton>
              <Link href={widgetData.widgetsData.instagram}>Instagram</Link>
            </SameStyleButton>
            <SameStyleButton>
              <Link href={widgetData.widgetsData.whatsapp}>Whats App</Link>
            </SameStyleButton>
            <SameStyleButton>
              <Link href={widgetData.widgetsData.linkedin}>Linkedin</Link>
            </SameStyleButton>
          </div>
        </TruthyRenderer>
      </div>
      <QuickEnquiryModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

function SameStyleButton({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Button variant="solid" color="primary">
      {children}
    </Button>
  );
}

export default Widget;

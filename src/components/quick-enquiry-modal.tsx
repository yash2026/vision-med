"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  UseDisclosureProps,
} from "@nextui-org/react";
import EnquiryForm from "./enquiry-form";

export default function QuickEnquiryModal(
  props: UseDisclosureProps & { onOpenChange: (isOpen: boolean) => void }
) {
  const { onOpenChange, isOpen } = props;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4">
        {() => (
          <>
            <ModalHeader className="text-xl">Send Enquiry</ModalHeader>
            <ModalBody>
              <EnquiryForm />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

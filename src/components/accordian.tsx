import { accordion, Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export type Accordiontype = {
  title: string;
  content: string;
  key: number;
};

function Accordian({ data }: { data: Accordiontype[] }) {
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem key={item.key} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Accordian;

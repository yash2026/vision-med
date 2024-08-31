"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ContentHeading } from "./section-card/section-card";
import TruthyRenderer from "./truthy-renderer";
import { TickGernator } from "./section-card/welcome-section";

export type FAQType = {
  id: number;
  title: string;
  content: {
    title?: string;
    points?: string[];
    titleAddon?: string;
  };
};

type FaqBuilderProps = {
  heading: string;
  faqData: FAQType[];
};

export default function FaqBuilder(props: Readonly<FaqBuilderProps>) {
  const { heading, faqData } = props;
  return (
    <div className="flex flex-col gap-4 mt-6">
      <ContentHeading className="text-2xl">{heading}</ContentHeading>
      <Accordion variant="splitted">
        {faqData?.map((faq) => (
          <AccordionItem
            key={faq?.id}
            aria-label={faq?.title}
            title={faq?.title}
            className="text-black/60"
          >
            <p className="text-base text-black/50 mb-3">
              {faq?.content?.title}
            </p>
            <TruthyRenderer value={!!faq?.content?.points}>
              <ul className="flex flex-col gap-2 pb-3">
                <TickGernator data={faq?.content?.points!} />
              </ul>
            </TruthyRenderer>
            <TruthyRenderer value={!!faq?.content?.titleAddon}>
              <p className="text-base text-black/50 mb-3">
                {faq?.content?.titleAddon}
              </p>
            </TruthyRenderer>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

import { Accordion, AccordionItem } from "@nextui-org/react";
import { ContentHeading } from "./section-card/section-card";
import TruthyRenderer from "./truthy-renderer";

export type FAQType = {
  id: number;
  title: string;
  content: {
    title: string;
    points: string[];
  };
};

type FaqBuilderProps = {
  heading: string;
  faqData: FAQType[];
};

export default function FaqBuilder(props: Readonly<FaqBuilderProps>) {
  const { heading, faqData } = props;
  return (
    <div>
      <ContentHeading>{heading}</ContentHeading>
      <Accordion variant="splitted">
        {faqData?.map((faq) => (
          <AccordionItem
            key={faq?.id}
            aria-label={faq?.title}
            title={faq?.title}
          >
            <div>{faq?.content?.title}</div>
            <TruthyRenderer value={!!faq?.content?.points}>
              <ul>
                {faq?.content?.points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </TruthyRenderer>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

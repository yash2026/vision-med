import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import HeroCard from "@/components/hero-card";
import WidthWrapper from "@/components/width-wrapper";
import {
  Root,
  FlexChildLayout,
  ContentHeading,
  Paragraph,
} from "@/components/section-card/section-card";
import Image from "next/image";
import BukovinianFeePage from "@/components/bukovinian-fee-page";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Bukovinian State Medical University Fees & Other Charges",
    link: "/bukovinian-state-medical-university-fee-and-other-charges",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">
        Bukovinian State Medical University Fees & Other Charges
      </PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <div className="mt-20">
        <HeroCard firstName="MBBS In Poland" />
      </div>
      <Root className="mt-20">
        <FlexChildLayout>
          <Image
            src="/images/Bukovinian-Ukraine.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </FlexChildLayout>
        <FlexChildLayout>
          <ContentHeading className="text-2xl">
            Bukovinian State Medical University Fees
          </ContentHeading>
          <Paragraph className="mt-3">
            For Indian students seeking MBBS admission in universities, outside
            India, the Bukovinian State Medical University is the best choice.
            The Bukovinian State Medical University in Ukraine is a 75 years old
            Government University that renders world-class medical education for
            Indian students at a cost that is far less than the fee of private
            medical colleges in India.
          </Paragraph>
          <ContentHeading className="text-2xl mt-7">
            Why should you study MBBS at Bukovinian State Medical University?
          </ContentHeading>
          <Paragraph className="mt-3">
            The Bukovinian state medical university is the first choice of
            students preferring to study MBBS in Ukraine. Students who graduate
            here secure the highest results in the FMGE- MCI examination and are
            one of the finest medical universities that teach MBBS completely in
            the English language.
          </Paragraph>
          <Paragraph className="mt-3">
            Students feel very secure in this institution as there are separate
            hostels for both Girls and Boys. Students get access to Indian food
            and the university already has more than 1700 Indian students
            studying there. There is absolutely nothing to worry about to study
            MBBS from this prestigious institution.
          </Paragraph>
        </FlexChildLayout>
      </Root>
      <BukovinianFeePage />
    </WidthWrapper>
  );
}

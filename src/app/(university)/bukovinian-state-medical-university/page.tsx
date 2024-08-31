import BukovinianPage from "@/components/bukovinian-page";
import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import HeroCard from "@/components/hero-card";
import WidthWrapper from "@/components/width-wrapper";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Bukovinian State Medical University",
    link: "/bukovinian-state-medical-university",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">
        Bukovinian State Medical University
      </PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <div className="mt-10">
        <HeroCard firstName="MBBS In Poland" />
      </div>
      <BukovinianPage />
    </WidthWrapper>
  );
}

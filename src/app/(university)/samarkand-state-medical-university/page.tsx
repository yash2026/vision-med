import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import HeroCard from "@/components/hero-card";
import SamarkandPage from "@/components/samarkand-page";
import WidthWrapper from "@/components/width-wrapper";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Samarkand State Medical University",
    link: "/samarkand-state-medical-university",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">
        Samarkand State Medical University
      </PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <div className="mt-20">
        <HeroCard firstName="MBBS In Uzbekistan" />
      </div>
      <SamarkandPage />
    </WidthWrapper>
  );
}

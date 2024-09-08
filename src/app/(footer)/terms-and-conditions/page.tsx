import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import { Paragraph } from "@/components/section-card/section-card";
import WidthWrapper from "@/components/width-wrapper";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Terms and conditions",
    link: "/terms-and-conditions",
  },
];

export default function page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">Terms and conditions</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <Paragraph className="mt-10">
        The terms and conditions of The Vision Med govern the use of our website
        and the services we offer. By using our website and services, you agree
        to be bound by these terms and conditions. We reserve the right to
        modify these terms and conditions at any time without notice. It is your
        responsibility to review these terms and conditions regularly to stay
        updated. The content on our website is for informational purposes only
        and does not constitute professional advice. We do not guarantee the
        accuracy, completeness, or reliability of the content. Any reliance on
        the content is at your own risk.
      </Paragraph>
    </WidthWrapper>
  );
}

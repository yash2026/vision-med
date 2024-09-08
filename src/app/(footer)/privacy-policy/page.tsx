import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import { Paragraph } from "@/components/section-card/section-card";
import WidthWrapper from "@/components/width-wrapper";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export default function page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">Privacy Policy</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <Paragraph className="mt-10">
        Vision medicos is committed to protecting your privacy. We collect and
        use your personal information only for the purpose of providing you with
        the services you have requested. We may use your personal information to
        communicate with you about our services and to improve our offerings. We
        do not share your personal information with any third party unless
        required by law. We take all necessary precautions to safeguard your
        personal information and ensure its confidentiality. By using our
        services, you agree to the terms of our privacy policy. If you have any
        questions or concerns about our privacy practices, please contact us..
      </Paragraph>
    </WidthWrapper>
  );
}

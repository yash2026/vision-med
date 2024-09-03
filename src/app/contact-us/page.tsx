import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import WidthWrapper from "@/components/width-wrapper";
import { Root, FlexChildLayout } from "@/components/section-card/section-card";
import EnquiryForm from "@/components/enquiry-form";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">Contact Us</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <Root className="mt-10">
        <FlexChildLayout>
          <EnquiryForm />
        </FlexChildLayout>
        <FlexChildLayout>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.2780426352283!2d76.62340687609898!3d28.8900846755251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8526edb90ad7%3A0x26be464e9492f11f!2sPacific%20CITY%20CENTRE!5e0!3m2!1sen!2sin!4v1725385226401!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </FlexChildLayout>
      </Root>
    </WidthWrapper>
  );
}

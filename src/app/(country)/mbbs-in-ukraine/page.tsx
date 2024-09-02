import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import WidthWrapper from "@/components/width-wrapper";
import * as UkrainLayout from "@/components/section-card/section-card";
import Image from "next/image";
import MbbsUkrainPage from "@/components/mbbs-ukrain-page";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "MBBS In Ukraine",
    link: "/mbbs-in-ukraine",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">MBBS In Ukraine</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <UkrainLayout.Root className="mt-20">
        <UkrainLayout.FlexChildLayout className="flex flex-col gap-4">
          <UkrainLayout.ContentHeading className="text-[25px] text-left">
            Study MBBS in Ukraine
          </UkrainLayout.ContentHeading>
          <UkrainLayout.Paragraph>
            Ukraine is one of the best international destinations for Indian
            students to study MBBS as it enhances its medical education on par
            with global standards. There are many world-class government medical
            universities in Ukraine that offer MBBS and MD at an affordable
            cost. Students who complete MBBS in Ukraine are eligible to apply
            for jobs anywhere in the world. The medical universities are
            recognized by WHO and MCI and the medium of instruction is English.
          </UkrainLayout.Paragraph>
          <UkrainLayout.Paragraph>
            The MD house is the official partner of MBBS admission in Ukraine
            and is also an authorized representative of the Bukovinian State
            Medical University in Ukraine in India. Securing an MBBS seat in
            Ukraine is easy and hassle-free and when done through the MD House.
          </UkrainLayout.Paragraph>
        </UkrainLayout.FlexChildLayout>
        <UkrainLayout.FlexChildLayout>
          <Image
            src="/images/Bukovinian-Ukraine.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </UkrainLayout.FlexChildLayout>
      </UkrainLayout.Root>
      <MbbsUkrainPage />
    </WidthWrapper>
  );
}

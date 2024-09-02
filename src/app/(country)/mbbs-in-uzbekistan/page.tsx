import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import WidthWrapper from "@/components/width-wrapper";
import * as UzbekistanLayout from "@/components/section-card/section-card";
import Image from "next/image";
import UzbekistanPage from "@/components/uzbekistan-page";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "MBBS In Ukraine",
    link: "/mbbs-in-uzbekistan",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">MBBS In Uzbekistan</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <UzbekistanLayout.Root className="mt-20">
        <UzbekistanLayout.FlexChildLayout>
          <Image
            src="/images/Samarkand-University.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </UzbekistanLayout.FlexChildLayout>
        <UzbekistanLayout.FlexChildLayout>
          <UzbekistanLayout.ContentHeading className="text-2xl">
            Study MBBS in Uzbekistan
          </UzbekistanLayout.ContentHeading>
          <UzbekistanLayout.Paragraph className="mt-3">
            MBBS in Uzbekistan is a very popular medical degree. In Uzbekistan,
            it is estimated that there are currently around 1,000 MBBS
            graduates. Many of these graduates go on to work as doctors in
            Uzbekistan, while others move to other countries to work as doctors.
          </UzbekistanLayout.Paragraph>
          <UzbekistanLayout.Paragraph className="mt-3">
            The cost of studying MBBS in Uzbekistan is relatively low, and the
            quality of education is excellent. The coursework is based on the UK
            National Curriculum, and the students are taught by experienced
            doctors. The course is usually completed in three years, and the
            students are awarded a degree from one of the country&apos;s leading
            universities.
          </UzbekistanLayout.Paragraph>
          <UzbekistanLayout.ContentHeading className="text-xl mt-7">
            Medical Courses in Abroad
          </UzbekistanLayout.ContentHeading>
          <UzbekistanLayout.Paragraph className="mt-3">
            Medicine is always among the most lucrative and prestigious career
            options both in India and abroad. This profession is noble as such
            and aimed towards a healthier society. Indian students have aspired
            to pursue MBBS abroad. Many foreign countries all over the world are
            offering this course according to the standard criteria. Uzbekistan
            is such a country where students are looking for the courses.
          </UzbekistanLayout.Paragraph>
        </UzbekistanLayout.FlexChildLayout>
      </UzbekistanLayout.Root>
      <UzbekistanPage />
    </WidthWrapper>
  );
}

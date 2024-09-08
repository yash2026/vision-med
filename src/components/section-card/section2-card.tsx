import Image from "next/image";
import WidthWrapper from "../width-wrapper";
import * as Section2Layout from "./section-card";

function Section2card() {
  return (
    <WidthWrapper className="max-[1250px]:px-10 max-[600px]:px-4">
      <Section2Layout.Root className="pt-12">
        <Section2Layout.FlexChildLayout className="self-center justify-center">
          <Image
            src="/images/Samarkand-University.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </Section2Layout.FlexChildLayout>
        <Section2Layout.FlexChildLayout className="flex flex-col gap-4 text-sm  leading-10">
          <Section2Layout.ContentHeading className="text-[25px]">
            Samarkand State Medical University, Uzbekistan
          </Section2Layout.ContentHeading>
          <p className="leading-7">
            Samarkand State Medical University is Central Asia&apos;s oldest
            medical university,which is providing high-quality training to
            medical professionals of the highest calibre. Samarkand State
            Medical University was founded back in 1930. The university is
            situated in Samarkand city, one of the most beautiful & safest
            cities in the world, which has long been a centre of scientific
            thinking and brimming culture. Earning a reputation of having and
            propagating wholesome and technically sound academia over the years.
            MBBS in Samarkand State Medical University, among other disciplines,
            have been evolving with the times aided with internet technology
            combined with electronic and modular educational systems that
            provide electronic teaching and learning materials facilitating
            distance learning too.
          </p>
          <p className="leading-7">
            Being only one university among other institutes in
            Uzbekistan&apos;s NMC-approved universities, it is unquestionably a
            stand-out choice for international medical students interested in
            pursuing an MBBS course in Uzbekistan.
          </p>
        </Section2Layout.FlexChildLayout>
      </Section2Layout.Root>
    </WidthWrapper>
  );
}

export default Section2card;

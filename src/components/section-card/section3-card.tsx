import Image from "next/image";
import WidthWrapper from "../width-wrapper";
import * as Section3Layout from "./section-card";

function Section3card() {
  return (
    <WidthWrapper>
      <Section3Layout.Root className="pt-12">
        <Section3Layout.FlexChildLayout className="flex flex-col gap-4 leading-9 text-sm">
          <Section3Layout.ContentHeading className="text-[25px]">
            University Of Warmia And Mazury, Poland
          </Section3Layout.ContentHeading>
          <p>
            The University of Warmia and Mazury in Olsztyn (UWM) is fully
            Government university of Poland. The establishment resulted from
            merging three institutions of higher education in Olsztyn, i.e. the
            Academy of Agriculture and Technology, the Higher School of
            Pedagogy, and Warmian Theological Institute.
          </p>
          <p>
            At first, in 1999, there were 12 faculties, 32 branches of study,
            and 24.500 students at UWM. The University also had a right to grant
            doctoral degrees in 13 scientific disciplines, and postdoctoral
            degrees in 6 branches. According to the University’s Act of
            Establishment, the position of the first Rector of UWM was taken by
            Prof. Ryszard Górecki, PhD. The University has been settled in
            Kortowo – an academic campus that used to belong to the Academy of
            A&T. UWM has undergone an intense transformation since its
            beginnings. Achieving such a progress would not be possible without
            funds from the European Union. Educational and scientific bases of
            the University have been significantly reinforced, for example by
            purchasing high-tech laboratory equipment.
          </p>
        </Section3Layout.FlexChildLayout>
        <Section3Layout.FlexChildLayout>
          <Image
            src="/section3-image.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
          />
        </Section3Layout.FlexChildLayout>
      </Section3Layout.Root>
    </WidthWrapper>
  );
}

export default Section3card;
